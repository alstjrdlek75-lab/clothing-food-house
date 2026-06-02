$port = 3000
$listener = New-Object System.Net.HttpListener

# Get local IP addresses
$ips = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" } | Select-Object -ExpandProperty IPAddress

# 1. Try to add localhost and all local network IPs
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")
foreach ($ip in $ips) {
    $listener.Prefixes.Add("http://$ip`:$port/")
}

$externalBindSuccess = $true

try {
    $listener.Start()
} catch {
    # If starting fails (Access Denied due to lack of Administrator rights for external binding),
    # we fall back to binding ONLY to localhost (which is always allowed for non-admin on Windows)
    $externalBindSuccess = $false
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Prefixes.Add("http://127.0.0.1:$port/")
    try {
        $listener.Start()
    } catch {
        Write-Host "서버 시작 실패: $_"
        exit
    }
}

Write-Host "=========================================================="
Write-Host "서버가 시작되었습니다!"
if ($externalBindSuccess) {
    Write-Host "같은 교실(Wi-Fi)의 친구들이 접속할 수 있도록 아래 주소를 공유해 주세요:"
    Write-Host "👉 http://localhost:$port"
    foreach ($ip in $ips) {
        Write-Host "👉 http://$ip`:$port"
    }
} else {
    Write-Host "⚠️ [주의] 일반 사용자 권한으로 실행되어 본인 PC(localhost)에서만 접속할 수 있습니다."
    Write-Host "👉 http://localhost:$port"
    Write-Host ""
    Write-Host "교실의 다른 컴퓨터(친구들)와 실시간 공유(공동작업)를 하려면:"
    Write-Host "1. 현재 서버 창을 닫아주세요."
    Write-Host "2. 윈도우 시작 메뉴에서 PowerShell을 마우스 우클릭한 뒤 [관리자 권한으로 실행]으로 열어주세요."
    Write-Host "3. 이 프로젝트 폴더로 이동하여 server.ps1을 다시 실행해 주세요."
    Write-Host "   (그러면 다른 컴퓨터들이 접속할 수 있는 IP 주소가 여기에 표시됩니다!)"
}
Write-Host "=========================================================="

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $method = $request.HttpMethod

        # Clean URL Path (remove query string)
        $urlPath = $request.Url.LocalPath

        # 1. API: GET /api/data?class=xxx
        if ($urlPath -eq "/api/data" -and $method -eq "GET") {
            $classId = $request.QueryString["class"]
            if ([string]::IsNullOrEmpty($classId)) { $classId = "1-5" }
            
            $dataPath = Join-Path $PSScriptRoot "data_$classId.json"
            $response.ContentType = "application/json; charset=utf-8"
            
            if (Test-Path $dataPath) {
                $bytes = [System.IO.File]::ReadAllBytes($dataPath)
            } else {
                $emptyJson = '{"countries":[],"groups":[]}'
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($emptyJson)
            }
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.Close()
            continue
        }

        # 2. API: POST /api/save
        if ($urlPath -eq "/api/save" -and $method -eq "POST") {
            $reader = New-Object System.IO.StreamReader($request.InputStream, [System.Text.Encoding]::UTF8)
            $body = $reader.ReadToEnd()
            $reader.Close()

            try {
                $data = $body | ConvertFrom-Json
                $classId = $data.classId
                if ([string]::IsNullOrEmpty($classId)) {
                    throw "Missing classId"
                }
                
                $dataPath = Join-Path $PSScriptRoot "data_$classId.json"
                [System.IO.File]::WriteAllText($dataPath, $body, [System.Text.Encoding]::UTF8)

                $resJson = '{"success":true}'
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($resJson)
                $response.StatusCode = 200
            } catch {
                $resJson = '{"error":"Failed to save data"}'
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($resJson)
                $response.StatusCode = 400
            }
            
            $response.ContentType = "application/json; charset=utf-8"
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.Close()
            continue
        }

        # 3. Static files handling
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }

        # Local path in Cwd
        $localPath = Join-Path $PSScriptRoot $urlPath.TrimStart('/')

        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            
            # Determine content type
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "text/javascript; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("File Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Host "Error occurred: $_"
} finally {
    $listener.Stop()
    Write-Host "Server stopped."
}
