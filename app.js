// --- 초기 샘플 데이터 정의 ---
const defaultCountries = [
  {
    id: "south-korea",
    name: "대한민국",
    emoji: "🇰🇷",
    summary: "사계절이 뚜렷하고 아름다운 자연과 전통이 어우러진 나라",
    climate: "temperate",
    climateDesc: "봄, 여름, 가을, 겨울의 사계절이 뚜렷해요. 대체로 온화하고 강수량이 풍부해 농사가 잘 되는 기후입니다.",
    ownerGroup: null, // 학급 초기 로딩 시 자유 탐구 상태
    clothing: {
      desc: "한복(Hanbok)은 대한민국의 전통 의상이에요. 부드러운 곡선과 밝고 고운 파스텔톤의 색상이 특징이며, 격식 있는 날에 입어요. 평소에는 현대적이고 트렌디한 일상복을 입으며, 계절에 맞추어 얇거나 두꺼운 옷을 입습니다.",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      desc: "밥을 주식으로 하며, 다양한 국과 반찬을 곁들여 먹어요. 대표적인 음식으로는 김치, 비빔밥, 불고기가 있으며 영양 균형이 뛰어나고 발효 음식을 많이 먹는 것이 특징이에요.",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80"
    },
    housing: {
      desc: "전통 가옥인 한옥(Hanok)은 나무와 흙, 기와로 지어졌어요. 겨울에는 바닥을 따뜻하게 해주는 '온돌'과 여름에는 바람이 잘 통하는 '대청마루'가 있어 기후 변화에 잘 적응하도록 지어졌습니다. 오늘날에는 아파트나 양옥 등 현대적인 주거 형태가 많아요.",
      image: "south_korea_house.png" // 로컬 생성 한옥 일러스트 이미지
    }
  },
  {
    id: "egypt",
    name: "이집트",
    emoji: "🇪🇬",
    summary: "신비로운 피라미드와 나일강의 기적이 살아 숨 쉬는 역사 깊은 나라",
    climate: "dry",
    climateDesc: "대부분이 사막 기후로 강수량이 매우 적고 건조해요. 낮에는 무척 덥고 밤에는 쌀쌀한 큰 일교차를 보입니다.",
    ownerGroup: null, // 학급 초기 로딩 시 자유 탐구 상태
    clothing: {
      desc: "갈라베야(Galabeya)는 온몸을 감싸는 통풍이 잘되는 긴 옷이에요. 강한 햇빛과 모래바람으로부터 피부를 보호하기 위해 밝은 색상의 천을 주로 사용하며 품이 넉넉하게 제작됩니다.",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      desc: "콩, 곡물, 채소를 주로 사용한 영양가 높은 음식을 먹어요. 삶은 병아리콩 and 다양한 곡물들을 섞어 만든 '코샤리(Kushari)'와 빵에 싸 먹는 '타아메야(이집트식 팔라펠)'가 대표적입니다.",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80"
    },
    housing: {
      desc: "전통적으로 나일강 주변의 진흙을 굳혀 만든 흙벽돌 집(Mud-brick House)에서 살았어요. 비가 거의 내리지 않아 지붕을 평평하게 만들어 창고나 더운 밤에 잠을 자는 공간으로 활용하며, 두꺼운 흙벽은 낮의 뜨거운 열기를 막아줍니다.",
      image: "egypt_house.png" // 로컬 생성 누비안 진흙 주택 일러스트 이미지
    }
  },
  {
    id: "brazil",
    name: "브라질",
    emoji: "🇧🇷",
    summary: "아마존 정글과 신나는 삼바 축제의 열정으로 가득 찬 나라",
    climate: "tropical",
    climateDesc: "대부분 지역이 일년 내내 덥고 습한 열대 기후입니다. 아마존 열대우림이 펼쳐져 있으며 비가 자주 내리는 편이에요.",
    ownerGroup: null, // 학급 초기 로딩 시 자유 탐구 상태
    clothing: {
      desc: "고온 다습한 날씨 때문에 가볍고 통풍이 잘 되는 면 옷을 주로 입어요. 삼바 축제 기간에는 화려한 깃털과 보석으로 장식된 화려한 전통 축제 의상을 입고 춤을 춥니다.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      desc: "고기와 콩을 듬뿍 사용해요. 검은콩과 돼지고기의 여러 부위를 함께 넣고 푹 끓인 '페이조아다(Feijoada)'와 꼬치에 꿰어 숯불에 구운 고기 요리인 '슈하스코(Churrasco)'가 가장 유명합니다.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    housing: {
      desc: "아마존 강 유역이나 습지대에서는 바닥 위에 기둥을 세워 집을 높이 띄운 '수상 가옥(Palafita)'을 짓고 살아요. 잦은 홍수로 인해 강물이 불어나는 것을 대비하고 습기와 해충으로부터 안전하게 지켜줍니다.",
      image: "brazil_house.png" // 로컬 생성 수상 가옥 일러스트 이미지
    }
  },
  {
    id: "canada",
    name: "캐나다",
    emoji: "🇨🇦",
    summary: "거대한 침엽수림과 아름다운 단풍, 빙하가 공존하는 넓은 나라",
    climate: "cold",
    climateDesc: "겨울이 길고 추운 냉대 기후가 넓게 펼쳐져 있어요. 침엽수림지대인 '타이가'가 매우 발달해 있습니다.",
    ownerGroup: null,
    clothing: {
      desc: "겨울이 춥고 길어서 두꺼운 패딩, 털모자, 장갑 등을 주로 입어요. 전통적으로 원주민들은 사슴이나 순록의 가죽과 털로 따뜻한 방한복을 지어 입었습니다.",
      image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      desc: "단풍나무 수액을 달여 만든 '메이플 시럽'을 팬케이크 등에 곁들여 먹는 것으로 유명합니다. 또한 감자튀김에 치즈 커드와 따뜻한 그레이비소스를 얹은 '푸틴(Poutine)'도 대표적입니다.",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
    },
    housing: {
      desc: "주변에 침엽수가 많아 튼튼하고 따뜻한 '통나무집(Log Cabin)'을 짓고 살았습니다. 오늘날 벽을 두껍게 만들고 단열 처리를 한 현대식 단독 주택과 아파트가 많습니다.",
      image: "canada_house.png" // 로컬 생성 캐나다 통나무집 일러스트 이미지
    }
  },
  {
    id: "greenland",
    name: "그린란드",
    emoji: "🇬🇱",
    summary: "빙하와 오로라가 펼쳐진 거대하고 신비로운 얼음의 땅",
    climate: "polar",
    climateDesc: "일년 내내 눈과 얼음으로 덮여 있는 매우 추운 한대 기후입니다. 땅속이 꽁꽁 얼어붙어 있어 농사를 짓기 힘듭니다.",
    ownerGroup: null,
    clothing: {
      desc: "체온을 유지하기 위해 바다표범이나 순록의 생가죽과 방수 털로 만든 두꺼운 전통 아노락(Anorak)을 입고 가죽 장화를 신습니다. 현대에는 특수 방한 아웃도어 의류를 일상적으로 입습니다.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    },
    food: {
      desc: "농사가 불가능해 전통적으로 바다표범, 고래, 순록 같은 동물을 사냥하거나 생선을 잡아서 먹었습니다. 날고기로 영양소를 보충하거나 말려서 오랫동안 보존해 두고 먹습니다.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
    },
    housing: {
      desc: "사냥할 때는 주변의 눈블록을 잘라 둥글게 쌓아 만든 임시 거처인 '이글루(Igloo)'에서 묵기도 했습니다. 오늘날은 단열을 잘하고 눈속에서도 쉽게 찾을 수 있도록 알록달록한 원색으로 칠해진 나무 목조 가옥에서 생활합니다.",
      image: "greenland_house.png" // 로컬 생성 한대 기후 목조 주택 일러스트 이미지
    }
  }
];

// --- 기후별 기본 이미지 추천셋 ---
const fallbackImages = {
  tropical: {
    clothing: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    food: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    housing: "brazil_house.png" // 로컬 생성 일러스트
  },
  dry: {
    clothing: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    food: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    housing: "egypt_house.png" // 로컬 생성 일러스트
  },
  temperate: {
    clothing: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
    food: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    housing: "south_korea_house.png" // 로컬 생성 일러스트
  },
  cold: {
    clothing: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    food: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    housing: "canada_house.png" // 로컬 생성 일러스트
  },
  polar: {
    clothing: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    food: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    housing: "greenland_house.png" // 로컬 생성 일러스트
  }
};

// 기후 한국어 및 이모지 변환 매핑
const climateLabels = {
  tropical: { label: "열대 기후 ☀️", colorClass: "bg-orange-100 text-orange-700 border-orange-200" },
  dry: { label: "건조 기후 🌵", colorClass: "bg-amber-100 text-amber-700 border-amber-200" },
  temperate: { label: "온대 기후 🌳", colorClass: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  cold: { label: "냉대 기후 🌲", colorClass: "bg-sky-100 text-sky-700 border-sky-200" },
  polar: { label: "한대 기후 ❄️", colorClass: "bg-slate-100 text-slate-700 border-slate-200" },
  unassigned: { label: "기후 미지정 ❓", colorClass: "bg-gray-100 text-gray-500 border-gray-200" }
};

// 학급 변수 한국어 배칭 사전
const classNamesMapping = {
  '1-5': '1학년 5반',
  '1-6': '1학년 6반',
  'example': '예시 모둠'
};

// --- 애플리케이션 상태 (State) ---
let currentClass = '1-5'; // 기본 활성 학급
let countries = [];
let groups = [];
let selectedCountry = null;
let currentDetailTab = 'climate';
let editingCountryId = null;

// --- 로컬 스토리지 데이터 동기화 ---
function initData() {
  // 현재 설정된 학급 정보 불러오기
  currentClass = localStorage.getItem('current_class') || '1-5';

  const countriesKey = `world_countries_${currentClass}`;
  const groupsKey = `world_groups_${currentClass}`;

  // 1. 모둠 데이터 초기화
  const storedGroups = localStorage.getItem(groupsKey);
  if (storedGroups) {
    groups = JSON.parse(storedGroups);
  } else {
    if (currentClass === 'example') {
      // 예시 모둠은 1개 모둠으로 구성하며, 5가지 기후 대표 국가를 전부 소유함
      groups = [
        { name: "예시 모둠", countryIds: ["south-korea", "egypt", "brazil", "canada", "greenland"] }
      ];
    } else {
      // 일반 학급은 6개 모둠으로 시작
      groups = [
        { name: "1모둠", countryIds: [] },
        { name: "2모둠", countryIds: [] },
        { name: "3모둠", countryIds: [] },
        { name: "4모둠", countryIds: [] },
        { name: "5모둠", countryIds: [] },
        { name: "6모둠", countryIds: [] }
      ];
    }
    localStorage.setItem(groupsKey, JSON.stringify(groups));
  }

  // 2. 국가 데이터 초기화
  const storedData = localStorage.getItem(countriesKey);
  if (storedData) {
    countries = JSON.parse(storedData);
  } else {
    if (currentClass === 'example') {
      // 예시 모둠의 국가들은 모두 예시 모둠(인덱스 0)의 소유
      countries = defaultCountries.map(c => ({ ...c, ownerGroup: 0 }));
    } else {
      // 일반 학급은 소유권이 지정되지 않은 (자유 탐구) 템플릿 국가들로 로드
      countries = defaultCountries.map(c => ({ ...c, ownerGroup: null }));
    }
    localStorage.setItem(countriesKey, JSON.stringify(countries));
  }

  // 3. 예시 모둠 규격 변경(6개 모둠 -> 1개 모둠 축소 및 5개 기후 추가) 대응 마이그레이션 실행
  if (currentClass === 'example') {
    const hasCanada = countries.some(c => c.id === 'canada');
    const hasGreenland = countries.some(c => c.id === 'greenland');
    const isSingleGroup = groups.length === 1;

    if (!hasCanada || !hasGreenland || !isSingleGroup) {
      groups = [
        { name: "예시 모둠", countryIds: ["south-korea", "egypt", "brazil", "canada", "greenland"] }
      ];
      countries = defaultCountries.map(c => ({ ...c, ownerGroup: 0 }));
      saveToLocalStorage();
    }
  } else {
    // 일반 학급에서 캐나다와 그린란드 템플릿 국가가 누락되었을 시 보충
    const hasCanada = countries.some(c => c.id === 'canada');
    const hasGreenland = countries.some(c => c.id === 'greenland');
    if (!hasCanada || !hasGreenland) {
      defaultCountries.forEach(dc => {
        if (!countries.some(c => c.id === dc.id)) {
          countries.push({ ...dc, ownerGroup: null });
        }
      });
      saveToLocalStorage();
    }
  }

  // 4. 주거 사진 링크 업데이트 및 마이그레이션 패치 (구버전의 잘못 들어간 더미 Unsplash 이미지들을 직접 제작한 일러스트 이미지들로 전면 교체)
  let databaseUpdated = false;
  countries.forEach(c => {
    if (c.id === "south-korea" && (c.housing.image.includes("unsplash.com") || !c.housing.image)) {
      c.housing.image = "south_korea_house.png";
      databaseUpdated = true;
    }
    if (c.id === "egypt" && (c.housing.image.includes("unsplash.com") || !c.housing.image)) {
      c.housing.image = "egypt_house.png";
      databaseUpdated = true;
    }
    if (c.id === "brazil" && (c.housing.image.includes("unsplash.com") || !c.housing.image)) {
      c.housing.image = "brazil_house.png";
      databaseUpdated = true;
    }
    if (c.id === "canada" && (c.housing.image.includes("unsplash.com") || !c.housing.image)) {
      c.housing.image = "canada_house.png";
      databaseUpdated = true;
    }
    if (c.id === "greenland" && (c.housing.image.includes("unsplash.com") || !c.housing.image)) {
      c.housing.image = "greenland_house.png";
      databaseUpdated = true;
    }
  });
  if (databaseUpdated) {
    saveToLocalStorage();
  }
}

function saveToLocalStorage() {
  const countriesKey = `world_countries_${currentClass}`;
  const groupsKey = `world_groups_${currentClass}`;
  localStorage.setItem(countriesKey, JSON.stringify(countries));
  localStorage.setItem(groupsKey, JSON.stringify(groups));
}

// --- DOM 요소 참조 ---
const cardsGrid = document.getElementById('cards-grid');
const searchInput = document.getElementById('search-input');
const climateFilter = document.getElementById('climate-filter');
const emptyState = document.getElementById('empty-state');

// 모둠 관련 엘리먼트
const groupsGrid = document.getElementById('groups-grid');
const groupModal = document.getElementById('group-modal');
const groupForm = document.getElementById('group-form');
const editGroupIndex = document.getElementById('edit-group-index');
const groupNameInput = document.getElementById('group-name-input');
const groupCountriesCheckboxes = document.getElementById('group-countries-checkboxes');
const countryGroupSelect = document.getElementById('country-group');

// 모달 엘리먼트들
const formModal = document.getElementById('form-modal');
const formModalContent = formModal.querySelector('.modal-content');
const countryForm = document.getElementById('country-form');
const formTitle = document.getElementById('form-title');

// 국기 이모지 셀렉터 관련
const emojiInput = document.getElementById('country-emoji');
const quickEmojis = document.querySelectorAll('.quick-emoji');

// 이미지 URL 프리뷰 엘리먼트들
const clothingImgUrl = document.getElementById('clothing-image');
const foodImgUrl = document.getElementById('food-image');
const housingImgUrl = document.getElementById('housing-image');

const clothingPreview = document.getElementById('clothing-preview');
const foodPreview = document.getElementById('food-preview');
const housingPreview = document.getElementById('housing-preview');

// 상세 보기 모달 관련
const detailModal = document.getElementById('detail-modal');
const detailModalContent = detailModal.querySelector('.modal-content');

// --- 이벤트 리스너 등록 ---
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderDashboard();
  renderGroups();
  updateClassTabsUI();

  // 검색 및 필터 이벤트
  searchInput.addEventListener('input', renderDashboard);
  climateFilter.addEventListener('change', renderDashboard);

  // 이모지 간편 선택 클릭 이벤트
  quickEmojis.forEach(btn => {
    btn.addEventListener('click', () => {
      emojiInput.value = btn.textContent;
    });
  });

  // 이미지 프리뷰 이벤트 핸들러
  setupImagePreview(clothingImgUrl, clothingPreview);
  setupImagePreview(foodImgUrl, foodPreview);
  setupImagePreview(housingImgUrl, housingPreview);

  // 폼 등록 이벤트
  countryForm.addEventListener('submit', handleFormSubmit);

  // 모둠 설정 폼 이벤트
  groupForm.addEventListener('submit', handleGroupSubmit);
});

// 이미지 입력란 변경 시 미리보기 기능
function setupImagePreview(inputElement, previewElement) {
  inputElement.addEventListener('input', () => {
    updatePreview(inputElement.value, previewElement);
  });
}

// 이미지 미리보기 업데이터
function updatePreview(url, previewElement) {
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    previewElement.src = url;
    previewElement.classList.remove('hidden');
  } else {
    previewElement.classList.add('hidden');
  }
}

// --- 학급 전환 제어 및 UI 갱신 ---
function switchClass(classId) {
  currentClass = classId;
  localStorage.setItem('current_class', classId);
  
  // 데이터 동기화 및 다시 로딩
  initData();
  renderDashboard();
  renderGroups();
  updateClassTabsUI();
}

function updateClassTabsUI() {
  const tabs = {
    '1-5': document.getElementById('class-tab-1-5'),
    '1-6': document.getElementById('class-tab-1-6'),
    'example': document.getElementById('class-tab-example')
  };

  const classNameKor = classNamesMapping[currentClass];
  
  // 모둠 탐구판 타이틀 동적 수정
  document.getElementById('groups-board-title').innerHTML = `<span>👥</span> ${classNameKor} 모둠별 탐구 현황`;

  Object.keys(tabs).forEach(key => {
    if (key === currentClass) {
      tabs[key].className = "class-tab px-6 py-3 rounded-t-2xl font-bold text-sm flex items-center gap-2 border-t-2 border-x-2 border-slate-200 bg-white text-sky-600 border-b-transparent translate-y-[2px] shadow-sm focus:outline-none";
    } else {
      tabs[key].className = "class-tab px-6 py-3 rounded-t-2xl font-bold text-sm flex items-center gap-2 border-t-2 border-x-2 border-transparent text-slate-400 hover:bg-slate-100 transition-all focus:outline-none";
    }
  });

  // 담당 탐구 모둠 드롭다운 동적 구성
  countryGroupSelect.innerHTML = '';

  // 🔓 자유 탐구 옵션 추가
  const unassignedOpt = document.createElement('option');
  unassignedOpt.value = "";
  unassignedOpt.textContent = "🔓 자유 탐구 (지정 없음)";
  countryGroupSelect.appendChild(unassignedOpt);

  groups.forEach((group, idx) => {
    const opt = document.createElement('option');
    opt.value = String(idx);
    opt.textContent = `${group.name} 👥`;
    countryGroupSelect.appendChild(opt);
  });
}

// --- 대시보드 국가 카드 리스트 렌더링 ---
function renderDashboard() {
  const query = searchInput.value.toLowerCase().trim();
  const climateVal = climateFilter.value;

  // 필터링 적용
  const filtered = countries.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(query) || c.summary.toLowerCase().includes(query);
    const matchClimate = climateVal === 'all' || c.climate === climateVal;
    return matchSearch && matchClimate;
  });

  // 초기화
  cardsGrid.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');

  filtered.forEach(country => {
    const climateInfo = climateLabels[country.climate] || { label: country.climate, colorClass: "bg-gray-100 text-gray-700" };
    
    // 소유 모둠 배지 렌더링
    let ownerGroupBadge = '';
    if (country.ownerGroup !== undefined && country.ownerGroup !== null) {
      const groupName = groups[country.ownerGroup] ? groups[country.ownerGroup].name : `${country.ownerGroup + 1}모둠`;
      ownerGroupBadge = `
        <span class="text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-600 border border-purple-100 rounded-full mt-1.5 inline-block">
          👥 ${groupName} 조사 중
        </span>
      `;
    } else {
      ownerGroupBadge = `
        <span class="text-[10px] font-bold px-2 py-0.5 bg-slate-50 text-slate-400 border border-slate-100 rounded-full mt-1.5 inline-block">
          🔓 자유 탐구
        </span>
      `;
    }

    // 카드 노드 생성
    const card = document.createElement('div');
    card.className = "soft-shadow-hover bg-white border border-slate-100 rounded-3xl p-6 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden group";
    card.setAttribute('onclick', `openDetailView('${country.id}')`);

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
            ${country.emoji}
          </div>
          <div class="flex flex-col items-end">
            <span class="text-xs font-semibold px-3 py-1 rounded-full border ${climateInfo.colorClass}">
              ${climateInfo.label}
            </span>
            ${ownerGroupBadge}
          </div>
        </div>
        <h3 class="text-2xl text-slate-800 mb-2 font-bold group-hover:text-sky-500 transition-colors">${country.name}</h3>
        <p class="text-slate-500 text-sm leading-relaxed">${country.summary}</p>
      </div>
      <div class="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 text-xs text-sky-500 font-semibold group-hover:translate-x-1 transition-transform duration-300">
        <span>자세히 조사하기 🔍</span>
        <span>→</span>
      </div>
      <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-100/30 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    `;

    cardsGrid.appendChild(card);
  });
}

// --- 국가 상세 보기 기능 ---
function openDetailView(countryId) {
  selectedCountry = countries.find(c => c.id === countryId);
  if (!selectedCountry) return;

  currentDetailTab = 'climate';
  renderDetailContent();

  // 모달 클래스 적용 및 노출
  detailModal.classList.remove('hidden');
  detailModal.classList.add('flex');
  setTimeout(() => {
    detailModal.classList.add('modal-active');
  }, 10);
}

function closeDetailView() {
  detailModal.classList.remove('modal-active');
  setTimeout(() => {
    detailModal.classList.add('hidden');
    detailModal.classList.remove('flex');
  }, 300);
}

function switchTab(tabId) {
  currentDetailTab = tabId;
  renderDetailContent();
}

function renderDetailContent() {
  if (!selectedCountry) return;

  const country = selectedCountry;
  const climateInfo = climateLabels[country.climate] || { label: country.climate, colorClass: "bg-gray-100" };

  // 국가 헤더 렌더링
  document.getElementById('detail-title').textContent = country.name;
  document.getElementById('detail-emoji').textContent = country.emoji;
  document.getElementById('detail-summary').textContent = country.summary;

  // 탭 헤더 활성화 상태 정의
  const tabs = ['climate', 'clothing', 'food', 'housing'];
  tabs.forEach(tab => {
    const tabBtn = document.getElementById(`tab-btn-${tab}`);
    if (tab === currentDetailTab) {
      tabBtn.classList.add('active', 'text-sky-500', 'border-sky-500', 'font-bold');
      tabBtn.classList.remove('text-slate-400');
    } else {
      tabBtn.classList.remove('active', 'text-sky-500', 'border-sky-500', 'font-bold');
      tabBtn.classList.add('text-slate-400');
    }
  });

  // 탭 콘텐츠 렌더링
  const contentArea = document.getElementById('detail-tab-content');
  let contentHtml = '';

  // 트랜지션 애니메이션 느낌을 위해 투명도 조절용 래퍼 사용
  contentArea.innerHTML = `<div class="opacity-0 transition-opacity duration-300" id="tab-animate-wrapper"></div>`;
  const wrapper = document.getElementById('tab-animate-wrapper');

  switch (currentDetailTab) {
    case 'climate':
      contentHtml = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl border ${climateInfo.colorClass} mb-4">
              <span class="font-bold text-sm">${climateInfo.label}</span>
            </div>
            <h4 class="text-2xl text-slate-800 mb-4 font-bold">기후 특성 알아보기 🌡️</h4>
            <p class="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">${country.climateDesc || '기후 정보가 등록되지 않았습니다.'}</p>
          </div>
          <div class="flex justify-center">
            <div class="polaroid-frame w-full max-w-sm">
              <div class="h-64 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center relative">
                ${getClimateIllustration(country.climate)}
              </div>
              <div class="polaroid-caption">지구본에서 만나는 ${country.name}의 하늘 🌤️</div>
            </div>
          </div>
        </div>
      `;
      break;

    case 'clothing':
      const clothingImg = country.clothing.image || fallbackImages[country.climate]?.clothing || fallbackImages.temperate.clothing;
      contentHtml = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 class="text-2xl text-slate-800 mb-4 font-bold">전통 및 현대 의복 👘</h4>
            <p class="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">${country.clothing.desc || '의복 정보가 등록되지 않았습니다.'}</p>
          </div>
          <div class="flex justify-center">
            <div class="polaroid-frame w-full max-w-sm">
              <img src="${clothingImg}" alt="${country.name} 의복" class="w-full h-64 object-cover rounded-lg" onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'">
              <div class="polaroid-caption">${country.name}의 멋과 옷차림 👗</div>
            </div>
          </div>
        </div>
      `;
      break;

    case 'food':
      const foodImg = country.food.image || fallbackImages[country.climate]?.food || fallbackImages.temperate.food;
      contentHtml = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 class="text-2xl text-slate-800 mb-4 font-bold">즐겨 먹는 맛있는 음식 🍛</h4>
            <p class="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">${country.food.desc || '음식 정보가 등록되지 않았습니다.'}</p>
          </div>
          <div class="flex justify-center">
            <div class="polaroid-frame w-full max-w-sm">
              <img src="${foodImg}" alt="${country.name} 음식" class="w-full h-64 object-cover rounded-lg" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'">
              <div class="polaroid-caption">맛있는 전통 밥상 냠냠 😋</div>
            </div>
          </div>
        </div>
      `;
      break;

    case 'housing':
      const housingImg = country.housing.image || fallbackImages[country.climate]?.housing || fallbackImages.temperate.housing;
      contentHtml = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 class="text-2xl text-slate-800 mb-4 font-bold">자연을 닮은 주거 형태 🏠</h4>
            <p class="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">${country.housing.desc || '주거 정보가 등록되지 않았습니다.'}</p>
          </div>
          <div class="flex justify-center">
            <div class="polaroid-frame w-full max-w-sm">
              <img src="${housingImg}" alt="${country.name} 주거" class="w-full h-64 object-cover rounded-lg" onerror="this.src='https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80'">
              <div class="polaroid-caption">기후를 이겨내는 특별한 집 🏡</div>
            </div>
          </div>
        </div>
      `;
      break;
  }

  wrapper.innerHTML = contentHtml;
  setTimeout(() => {
    wrapper.classList.remove('opacity-0');
  }, 50);
}

// 기후 카드 일러스트 대체용 아름다운 그래픽 렌더러
function getClimateIllustration(climate) {
  switch (climate) {
    case 'tropical':
      return `<div class="absolute inset-0 bg-gradient-to-tr from-amber-200 to-orange-100 flex flex-col items-center justify-center text-yellow-500">
                <span class="text-7xl animate-float">☀️</span>
                <span class="text-xl font-bold mt-4 text-orange-800">이글이글 뜨거운 태양</span>
              </div>`;
    case 'dry':
      return `<div class="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-amber-100 flex flex-col items-center justify-center text-amber-600">
                <span class="text-7xl animate-bounce-subtle">🌵</span>
                <span class="text-xl font-bold mt-4 text-amber-800">메마르고 건조한 사막</span>
              </div>`;
    case 'temperate':
      return `<div class="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-teal-100 flex flex-col items-center justify-center text-emerald-600">
                <span class="text-7xl animate-float">🌳</span>
                <span class="text-xl font-bold mt-4 text-emerald-800">살기 좋은 온화한 숲</span>
              </div>`;
    case 'cold':
      return `<div class="absolute inset-0 bg-gradient-to-tr from-blue-200 to-sky-100 flex flex-col items-center justify-center text-sky-600">
                <span class="text-7xl animate-float-slow">🌲</span>
                <span class="text-xl font-bold mt-4 text-sky-800">울창한 상록수림 타이가</span>
              </div>`;
    case 'polar':
      return `<div class="absolute inset-0 bg-gradient-to-tr from-slate-200 to-blue-50 flex flex-col items-center justify-center text-slate-400">
                <span class="text-7xl animate-float">❄️</span>
                <span class="text-xl font-bold mt-4 text-slate-700">꽁꽁 얼어붙은 얼음땅</span>
              </div>`;
    default:
      return `<span class="text-6xl">🌍</span>`;
  }
}

// --- 국가 추가 / 편집 폼 제어 ---
function openAddForm(groupIndex = null) {
  editingCountryId = null;
  
  const classNameKor = classNamesMapping[currentClass];
  formTitle.textContent = `🌍 [${classNameKor}] 새로운 탐구 국가 등록하기`;
  countryForm.reset();
  
  // 프리뷰 이미지 숨김
  clothingPreview.classList.add('hidden');
  foodPreview.classList.add('hidden');
  housingPreview.classList.add('hidden');

  // 모둠 지정 제어
  if (groupIndex !== null && groupIndex !== undefined) {
    countryGroupSelect.value = String(groupIndex);
    countryGroupSelect.disabled = true; // 지정된 모둠에서 추가 시 고정
  } else {
    countryGroupSelect.value = ""; // 글로벌 추가 시 기본적으로 자유 탐구 상태
    countryGroupSelect.disabled = false; // 직접 선택 가능
  }

  showFormModal();
}

function openEditForm() {
  if (!selectedCountry) return;
  const country = selectedCountry;

  editingCountryId = country.id;
  const classNameKor = classNamesMapping[currentClass];
  formTitle.textContent = `✏️ [${classNameKor}] ${country.name} 정보 수정하기`;

  // 값 채워넣기
  document.getElementById('country-name').value = country.name;
  document.getElementById('country-emoji').value = country.emoji;
  document.getElementById('country-summary').value = country.summary;
  document.getElementById('country-climate').value = country.climate;
  document.getElementById('climate-desc').value = country.climateDesc;

  // 담당 모둠 반영
  countryGroupSelect.value = country.ownerGroup !== undefined && country.ownerGroup !== null ? String(country.ownerGroup) : "";
  countryGroupSelect.disabled = false; // 수정을 원할 시 언제든지 변경 가능하게 오픈

  document.getElementById('clothing-desc').value = country.clothing.desc;
  document.getElementById('clothing-image').value = country.clothing.image;
  updatePreview(country.clothing.image, clothingPreview);

  document.getElementById('food-desc').value = country.food.desc;
  document.getElementById('food-image').value = country.food.image;
  updatePreview(country.food.image, foodPreview);

  document.getElementById('housing-desc').value = country.housing.desc;
  document.getElementById('housing-image').value = country.housing.image;
  updatePreview(country.housing.image, housingPreview);

  closeDetailView();
  showFormModal();
}

function showFormModal() {
  formModal.classList.remove('hidden');
  formModal.classList.add('flex');
  setTimeout(() => {
    formModal.classList.add('modal-active');
  }, 10);
}

function closeFormModal() {
  formModal.classList.remove('modal-active');
  setTimeout(() => {
    formModal.classList.add('hidden');
    formModal.classList.remove('flex');
  }, 300);
}

// --- 폼 제출 저장 제어 ---
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('country-name').value.trim();
  const emoji = document.getElementById('country-emoji').value.trim() || "🌍";
  const summary = document.getElementById('country-summary').value.trim();
  const climate = document.getElementById('country-climate').value;
  const climateDesc = document.getElementById('climate-desc').value.trim();

  // 담당 모둠 추출
  const ownerGroupVal = countryGroupSelect.value;
  const ownerGroup = ownerGroupVal !== "" ? parseInt(ownerGroupVal, 10) : null;

  const clothingDesc = document.getElementById('clothing-desc').value.trim();
  const clothingImage = document.getElementById('clothing-image').value.trim();

  const foodDesc = document.getElementById('food-desc').value.trim();
  const foodImage = document.getElementById('food-image').value.trim();

  const housingDesc = document.getElementById('housing-desc').value.trim();
  const housingImage = document.getElementById('housing-image').value.trim();

  if (!name || !summary || !climateDesc) {
    alert("국가명, 한 줄 소개, 그리고 기후 설명은 필수 입력 사항입니다! ✏️");
    return;
  }

  // 고유 아이디 생성
  const countryId = editingCountryId || name.toLowerCase().replace(/[^a-z0-9]/g, '-') || Date.now().toString();

  const countryData = {
    id: countryId,
    name: name,
    emoji: emoji,
    summary: summary,
    climate: climate,
    climateDesc: climateDesc,
    ownerGroup: ownerGroup, // 모둠 소유권 매핑
    clothing: {
      desc: clothingDesc,
      image: clothingImage
    },
    food: {
      desc: foodDesc,
      image: foodImage
    },
    housing: {
      desc: housingDesc,
      image: housingImage
    }
  };

  // 모둠 연동 동기화 로직
  if (editingCountryId) {
    const oldCountry = countries.find(c => c.id === editingCountryId);
    const oldOwnerGroup = oldCountry ? oldCountry.ownerGroup : null;

    // 만약 배정된 담당 모둠이 변경되었다면
    if (oldOwnerGroup !== ownerGroup) {
      // 1. 이전 소유 모둠의 국가 리스트에서 삭제
      if (oldOwnerGroup !== null && oldOwnerGroup !== undefined && groups[oldOwnerGroup]) {
        groups[oldOwnerGroup].countryIds = groups[oldOwnerGroup].countryIds.filter(id => id !== countryId);
      }
      // 2. 신규 소유 모둠의 국가 리스트에 추가
      if (ownerGroup !== null && ownerGroup !== undefined && groups[ownerGroup]) {
        if (!groups[ownerGroup].countryIds.includes(countryId)) {
          groups[ownerGroup].countryIds.push(countryId);
        }
      }
    }

    // 수정 모드 반영
    const index = countries.findIndex(c => c.id === editingCountryId);
    if (index !== -1) {
      countries[index] = countryData;
    }
  } else {
    // 추가 모드 (동일 아이디 검사 후 추가)
    if (countries.some(c => c.id === countryId)) {
      alert("이미 등록된 국가명이거나 고유 아이디가 중복됩니다. 다른 국가명을 입력해주세요.");
      return;
    }
    countries.push(countryData);

    // 신규 추가된 국가를 소유 모둠에 동시 매핑
    if (ownerGroup !== null && ownerGroup !== undefined && groups[ownerGroup]) {
      if (!groups[ownerGroup].countryIds.includes(countryId)) {
        groups[ownerGroup].countryIds.push(countryId);
      }
    }
  }

  saveToLocalStorage();
  closeFormModal();
  renderDashboard();
  renderGroups(); // 모둠 상태 리프레시
}

// --- 국가 데이터 삭제 기능 ---
function deleteCountry() {
  if (!selectedCountry) return;
  
  if (confirm(`진짜로 ${selectedCountry.name}에 대한 조사 자료를 삭제할 건가요? 😢`)) {
    const deletedId = selectedCountry.id;
    countries = countries.filter(c => c.id !== deletedId);

    // 모둠에서 삭제된 나라가 매핑되어 있었다면 체크 해제
    groups.forEach(g => {
      if (g.countryIds) {
        g.countryIds = g.countryIds.filter(id => id !== deletedId);
      }
    });

    saveToLocalStorage();
    closeDetailView();
    renderDashboard();
    renderGroups(); // 모둠 상태 리프레시
  }
}

// --- 모둠 탐구 보드 렌더링 ---
function renderGroups() {
  groupsGrid.innerHTML = '';

  groups.forEach((group, index) => {
    // 1. 모둠이 선택한 국가들의 상세 정보 조회
    const assignedCountries = countries.filter(c => group.countryIds.includes(c.id));
    
    // 2. 선택된 국가들로부터 기후 리스트 및 중복 없는 이모지 배지 생성
    const climates = [...new Set(assignedCountries.map(c => c.climate))];
    
    let climateBadgesHtml = '';
    if (climates.length > 0) {
      climates.forEach(climate => {
        const climateInfo = climateLabels[climate] || { label: climate, colorClass: "bg-slate-100 text-slate-400 border-slate-200" };
        climateBadgesHtml += `
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full border ${climateInfo.colorClass} mr-1 mb-1">
            ${climateInfo.label.split(' ')[0]} ${climateInfo.label.split(' ')[1] || ''}
          </span>
        `;
      });
    } else {
      climateBadgesHtml = `
        <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-slate-100 text-slate-400 border-slate-200 mr-1 mb-1">
          기후 미지정 ❓
        </span>
      `;
    }

    const card = document.createElement('div');
    card.className = "bg-white border-2 border-slate-800 rounded-3xl p-5 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] transition-all hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] flex flex-col justify-between h-full";

    // 3. 국가 미니 칩들 생성
    let countriesDisplayHtml = '';
    if (assignedCountries.length > 0) {
      countriesDisplayHtml = `
        <div class="mt-4 flex flex-wrap gap-2">
          ${assignedCountries.map(ac => `
            <button onclick="openDetailView('${ac.id}')" class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-600 rounded-xl transition-all shadow-sm">
              <span>${ac.emoji}</span>
              <span>${ac.name}</span>
              <span class="text-[9px] text-sky-400 font-normal">🔍</span>
            </button>
          `).join('')}
        </div>
      `;
    } else {
      countriesDisplayHtml = `
        <div class="mt-4 p-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-center text-xs text-slate-400 font-semibold">
          🗺️ 조사할 나라를 선택해 주세요.
        </div>
      `;
    }

    // 예시 모둠일 때와 일반 반일 때 버튼의 타이틀 표시 매핑
    const addCountryTitle = currentClass === 'example' ? '이 예시 모둠에 새로운 나라 추가' : '이 모둠에 새로운 나라 추가';
    const settingsTitle = currentClass === 'example' ? '예시 모둠 설정 수정' : '모둠 설정 수정';

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xl font-bold text-slate-800 cute-font">${group.name}</h3>
          <div class="flex items-center gap-1.5">
            <button onclick="openAddForm(${index})" class="w-8 h-8 flex items-center justify-center bg-sky-100 hover:bg-sky-200 hover:text-sky-700 text-sky-600 rounded-full transition-all border border-sky-200 shadow-sm" title="${addCountryTitle}">
              ➕
            </button>
            <button onclick="openGroupModal(${index})" class="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full transition-all border border-slate-200 shadow-sm" title="${settingsTitle}">
              ⚙️
            </button>
          </div>
        </div>
        <div class="flex flex-wrap items-center">
          ${climateBadgesHtml}
        </div>
      </div>
      ${countriesDisplayHtml}
    `;

    groupsGrid.appendChild(card);
  });
}

// --- 모둠 설정 모달 제어 ---
function openGroupModal(index) {
  const group = groups[index];
  editGroupIndex.value = index;
  groupNameInput.value = group.name;

  const classNameKor = classNamesMapping[currentClass];
  document.getElementById('group-form-title').textContent = `⚙️ [${classNameKor}] ${group.name} 설정`;

  // 나라 선택 체크박스 목록 동적 갱신
  renderGroupCountriesCheckboxes(index, group.countryIds);

  // 모달 클래스 적용 및 노출
  groupModal.classList.remove('hidden');
  groupModal.classList.add('flex');
  setTimeout(() => {
    groupModal.classList.add('modal-active');
  }, 10);
}

// 모둠 설정 모달 닫기
function closeGroupModal() {
  groupModal.classList.remove('modal-active');
  setTimeout(() => {
    groupModal.classList.add('hidden');
    groupModal.classList.remove('flex');
  }, 300);
}

function renderGroupCountriesCheckboxes(currentGroupIndex, selectedIds = []) {
  groupCountriesCheckboxes.innerHTML = '';

  if (countries.length === 0) {
    groupCountriesCheckboxes.innerHTML = `
      <p class="text-xs text-slate-400 text-center py-4">등록된 나라가 없습니다. 먼저 나라를 추가해 주세요!</p>
    `;
    return;
  }

  countries.forEach(c => {
    const wrapper = document.createElement('label');
    wrapper.className = "flex items-center space-x-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors border border-transparent hover:border-slate-100";
    
    // 소유 관계 체크
    const isOwnedByOther = c.ownerGroup !== undefined && c.ownerGroup !== null && c.ownerGroup !== currentGroupIndex;
    const isChecked = selectedIds.includes(c.id) ? 'checked' : '';
    const climateInfo = climateLabels[c.climate]?.label || c.climate;

    if (isOwnedByOther) {
      const otherGroupName = groups[c.ownerGroup] ? groups[c.ownerGroup].name : `${c.ownerGroup + 1}모둠`;
      wrapper.className += " opacity-50 cursor-not-allowed bg-slate-100/50";
      wrapper.innerHTML = `
        <input type="checkbox" disabled class="w-4 h-4 text-slate-300 border-slate-300 rounded">
        <span class="text-lg">${c.emoji}</span>
        <span class="text-sm font-bold text-slate-500 flex-1">${c.name}</span>
        <span class="text-xs text-purple-500 font-semibold">👥 ${otherGroupName} 조사 중</span>
      `;
    } else {
      wrapper.innerHTML = `
        <input type="checkbox" name="group-country-checkbox" value="${c.id}" ${isChecked} 
          class="w-4 h-4 text-sky-500 border-slate-300 rounded focus:ring-sky-400">
        <span class="text-lg">${c.emoji}</span>
        <span class="text-sm font-bold text-slate-700 flex-1">${c.name}</span>
        <span class="text-xs text-slate-400">${climateInfo}</span>
      `;
    }

    groupCountriesCheckboxes.appendChild(wrapper);
  });
}

function handleGroupSubmit(event) {
  event.preventDefault();

  const index = parseInt(editGroupIndex.value, 10);
  const name = groupNameInput.value.trim();

  if (isNaN(index) || index < 0 || index >= groups.length) return;

  // 체크된 국가 ID 수집
  const checkedBoxes = groupCountriesCheckboxes.querySelectorAll('input[name="group-country-checkbox"]:checked');
  const checkedCountryIds = Array.from(checkedBoxes).map(cb => cb.value);

  // 모둠이 수동 해제(체크 해제)한 국가가 있다면, 해당 국가의 소유권(ownerGroup)도 해제(null 처리)해 주어야 합니다.
  const oldCountryIds = groups[index].countryIds || [];
  const removedCountryIds = oldCountryIds.filter(id => !checkedCountryIds.includes(id));
  
  removedCountryIds.forEach(id => {
    const country = countries.find(c => c.id === id);
    if (country && country.ownerGroup === index) {
      country.ownerGroup = null; // 소유권 해제 (자유 탐구 상태로 변경)
    }
  });

  // 새로 추가된 국가가 있다면, 해당 국가의 소유권(ownerGroup)을 현재 모둠으로 지정합니다.
  checkedCountryIds.forEach(id => {
    const country = countries.find(c => c.id === id);
    if (country && (country.ownerGroup === null || country.ownerGroup === undefined)) {
      country.ownerGroup = index; // 소유권 귀속
    }
  });

  groups[index] = {
    name: name || `모둠 ${index + 1}`,
    countryIds: checkedCountryIds
  };

  saveToLocalStorage();
  closeGroupModal();
  renderDashboard(); // 메인 대시보드 뱃지 갱신용
  renderGroups();
}
