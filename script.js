"use strict";

const STORAGE_KEY = "sea-k-state-v2";
const PHOTO_DB_NAME = "sea-k-photo-album";
const PHOTO_STORE_NAME = "card-photos";

const cards = [
  { id: 1, name: "광안리 푸른 다리", region: "수영구", season: "여름", time: "밤", rarity: "희귀", icon: "⌁", colors: ["#5cd2d0", "#087f8c"], images: ["assets/cards/gwangalli.jpg"], imageAlt: "광안리 해변에서 바라본 광안대교", description: "광안대교의 불빛이 잔잔한 밤바다 위로 번지는 순간", source: "광안리 현장 인증 또는 카드팩" },
  { id: 2, name: "해운대 윤슬", region: "해운대구", season: "여름", time: "낮", rarity: "일반", icon: "☀", colors: ["#7edbd6", "#279eb2"], images: ["assets/cards/haeundae.jpg"], imageAlt: "부산 해운대 해수욕장의 백사장과 바다", description: "햇살이 잘게 부서져 반짝이는 해운대의 푸른 수면", source: "해운대 현장 인증 또는 카드팩" },
  { id: 3, name: "다대포 붉은 노을", region: "사하구", season: "가을", time: "노을", rarity: "희귀", icon: "◒", colors: ["#ffbd6e", "#ed7162"], images: ["assets/cards/dadaepo.jpg"], imageAlt: "부산 다대포 해수욕장의 넓은 모래사장과 바다", description: "넓은 갯벌과 하늘을 붉게 물들이는 다대포의 저녁", source: "다대포 현장 인증 또는 카드팩" },
  { id: 4, name: "송정 첫 파도", region: "해운대구", season: "봄", time: "아침", rarity: "일반", icon: "〰", colors: ["#7cded2", "#2b9eb2"], images: ["assets/cards/songjeong.jpg"], imageAlt: "부산 송정 해수욕장의 해안 풍경", description: "서퍼보다 먼저 해변에 도착한 산뜻한 아침 파도", source: "송정 현장 인증 또는 카드팩" },
  { id: 5, name: "흰여울 골목 바다", region: "영도구", season: "봄", time: "낮", rarity: "일반", icon: "⌂", colors: ["#87d4cf", "#3a91a4"], images: ["assets/cards/huinnyeoul.jpg"], imageAlt: "부산 영도 흰여울문화마을과 바다 풍경", description: "하얀 골목 틈으로 펼쳐지는 영도의 포근한 바다", source: "카드팩" },
  { id: 6, name: "오륙도 새벽빛", region: "남구", season: "겨울", time: "아침", rarity: "영웅", icon: "▲", colors: ["#9eadd0", "#445d83"], images: ["assets/cards/oryukdo.jpg"], imageAlt: "부산 오륙도 스카이워크와 해안 풍경", description: "겨울 새벽빛 사이로 섬들이 또렷하게 깨어나는 풍경", source: "희귀 카드팩" },
  { id: 7, name: "청사포 등대불", region: "해운대구", season: "가을", time: "밤", rarity: "희귀", icon: "♜", colors: ["#7b9ac2", "#243d64"], images: ["assets/cards/cheongsapo.jpg"], imageAlt: "부산 해운대 청사포 어촌과 바다", description: "붉고 하얀 두 등대가 가을 밤바다를 지키는 모습", source: "카드팩" },
  { id: 8, name: "이기대 물길", region: "남구", season: "여름", time: "낮", rarity: "일반", icon: "≈", colors: ["#55c9a9", "#14798b"], images: ["assets/cards/igidae.jpg"], imageAlt: "부산 이기대 해안 산책로와 바다", description: "해안 산책로 아래 맑은 물결이 바위 사이로 흐르는 장면", source: "카드팩" },
  { id: 9, name: "기장 은빛 바다", region: "기장군", season: "겨울", time: "낮", rarity: "희귀", icon: "✦", colors: ["#b7d8df", "#568ca0"], images: ["assets/cards/ilgwang.jpg"], imageAlt: "부산 기장 일광 해수욕장의 해안 풍경", description: "차가운 바람 아래 은빛으로 반짝이는 기장의 겨울 바다", source: "카드팩" },
  { id: 10, name: "태종대 파도숲", region: "영도구", season: "가을", time: "아침", rarity: "영웅", icon: "♣", colors: ["#78b79d", "#226b6c"], images: ["assets/cards/taejongdae.jpg"], imageAlt: "부산 영도 태종대의 절벽과 바다", description: "짙은 숲과 힘찬 파도가 함께 깨어나는 태종대의 아침", source: "희귀 카드팩" },
  { id: 11, name: "부산 바다의 심장", region: "부산 전역", season: "사계절", time: "모든 시간", rarity: "전설", icon: "♥", colors: ["#ffc860", "#e96b5b"], images: ["assets/cards/gwangalli.jpg", "assets/cards/dadaepo.jpg"], imageAlt: "광안리와 다대포의 실제 바다 풍경을 함께 담은 사진", description: "서로 다른 부산의 바다가 하나로 이어진 전설의 풍경", source: "광안리와 다대포 카드 조합" },
  { id: 12, name: "달빛 광안대교", region: "수영구", season: "겨울", time: "밤", rarity: "전설", icon: "☾", colors: ["#7873c8", "#273e75"], images: ["assets/cards/gwangalli-night.jpg"], imageAlt: "밤의 광안리 해변과 광안대교 불빛", description: "겨울 달빛과 광안대교의 불빛이 겹쳐 탄생한 밤 풍경", source: "해운대와 청사포 카드 조합" }
];

const places = [
  { id: "gwangalli", name: "광안리 해수욕장", area: "수영구", detail: "광안대교 야경과 해변 산책", description: "도심의 불빛과 광안대교가 만나는 부산의 대표 야경 명소", icon: "⌁", colors: ["#62d5cf", "#087f8c"], cardId: 1, lat: 35.1532, lng: 129.1187 },
  { id: "haeundae", name: "해운대 해수욕장", area: "해운대구", detail: "넓은 백사장과 푸른 수평선", description: "탁 트인 수평선과 활기찬 도시 풍경을 함께 만나는 해변", icon: "☀", colors: ["#7bd9d4", "#318cae"], cardId: 2, lat: 35.1587, lng: 129.1604 },
  { id: "dadaepo", name: "다대포 해수욕장", area: "사하구", detail: "고운 모래와 아름다운 낙조", description: "넓은 갯벌 위로 부산의 가장 긴 노을을 감상하는 장소", icon: "◒", colors: ["#ffc26e", "#e97262"], cardId: 3, lat: 35.0467, lng: 128.9666 },
  { id: "songjeong", name: "송정 해수욕장", area: "해운대구", detail: "서핑과 여유로운 아침 바다", description: "파도를 가까이에서 즐기며 느긋하게 걷기 좋은 바다", icon: "〰", colors: ["#74d6cf", "#278ea4"], cardId: 4, lat: 35.1786, lng: 129.1997 }
];

const missions = [
  { id: "quiz", title: "바다 안전 퀴즈", description: "안전하게 바다를 즐기는 방법 맞히기", reward: 15, icon: "?", color: "#1679a6", tint: "#e0f2fb", action: "퀴즈 풀기" },
  { id: "walk", title: "파도 소리 산책", description: "발표용 산책 기록을 남기고 코인 받기", reward: 20, icon: "♒", color: "#2b8b71", tint: "#e1f5ec", action: "산책 기록 체험" },
  { id: "collector", title: "초보 수집가", description: "서로 다른 부산 바다 카드 3장 모으기", reward: 25, icon: "▦", color: "#c36d37", tint: "#fff0df", action: "보상 확인" }
];

const recipes = [
  { id: "heart", title: "동쪽과 서쪽의 만남", description: "푸른 야경과 붉은 노을을 겹쳐 보세요.", ingredients: [1, 3], result: 11 },
  { id: "moon", title: "빛나는 해운대의 밤", description: "낮의 윤슬과 밤의 등대불을 이어 보세요.", ingredients: [2, 7], result: 12 }
];

const products = [
  { id: "pack", name: "파도 카드팩", description: "현재 계절과 시간대에 어울리는 카드 1장을 발견해요.", price: 60, icon: "▧", colors: ["#dff7f2", "#b7e6e0"] },
  { id: "hint", name: "탐험 힌트", description: "아직 없는 카드의 획득 장소와 조건을 하나 알려 줘요.", price: 25, icon: "?", colors: ["#e5f2ff", "#c6def4"] },
  { id: "decoration", name: "조개 스티커", description: "앨범을 꾸미는 반짝이는 조개 스티커를 보관해요.", price: 40, icon: "♢", colors: ["#fff0e1", "#ffd8c0"] },
  { id: "cafeCoupon", inventoryKey: "cafeCoupons", name: "광안리 카페 10% 할인권", description: "제휴 오션뷰 카페에서 음료 주문 시 사용하는 발표용 할인권이에요.", price: 90, icon: "☕", colors: ["#fff0dd", "#e9c79f"] },
  { id: "convenienceCoupon", inventoryKey: "convenienceCoupons", name: "해변 편의점 1,000원 할인권", description: "제휴 편의점에서 5,000원 이상 구매할 때 사용하는 발표용 할인권이에요.", price: 80, icon: "▣", colors: ["#e5f5ff", "#b9dff1"] },
  { id: "souvenirCoupon", inventoryKey: "souvenirCoupons", name: "부산 기념품점 10% 할인권", description: "제휴 기념품점에서 여행 상품을 살 때 사용하는 발표용 할인권이에요.", price: 110, icon: "♙", colors: ["#f3eaff", "#d9c7ef"] }
];

const defaultState = {
  coins: 160,
  collection: {},
  completedMissions: [],
  verifiedPlaces: [],
  inventory: { hints: 0, decorations: 0, cafeCoupons: 0, convenienceCoupons: 0, souvenirCoupons: 0 },
  lastVerifiedPlace: null
};

let state = loadState();
let activePlaceId = places[0].id;
let activeMethod = "qr";
let methodVerified = false;
let photoReady = false;
let previewUrl = null;
let pendingPhotoFile = null;
const capturedPhotos = new Map();
let toastTimer = null;
let scanTimer = null;
let locationRequestId = 0;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function openPhotoDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(PHOTO_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(PHOTO_STORE_NAME)) database.createObjectStore(PHOTO_STORE_NAME, { keyPath: "cardId" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadCapturedPhotos() {
  try {
    const database = await openPhotoDatabase();
    const records = await new Promise((resolve, reject) => {
      const request = database.transaction(PHOTO_STORE_NAME, "readonly").objectStore(PHOTO_STORE_NAME).getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    database.close();
    records.forEach((record) => {
      const url = URL.createObjectURL(record.photo);
      capturedPhotos.set(Number(record.cardId), { url, capturedAt: record.capturedAt });
    });
  } catch (error) {
    console.warn("촬영 사진을 불러오지 못했습니다.", error);
  }
}

async function saveCapturedPhoto(cardId, photo) {
  try {
    const database = await openPhotoDatabase();
    const capturedAt = new Date().toISOString();
    await new Promise((resolve, reject) => {
      const request = database.transaction(PHOTO_STORE_NAME, "readwrite").objectStore(PHOTO_STORE_NAME).put({ cardId: Number(cardId), photo, capturedAt });
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    database.close();
    const previous = capturedPhotos.get(Number(cardId));
    if (previous) URL.revokeObjectURL(previous.url);
    capturedPhotos.set(Number(cardId), { url: URL.createObjectURL(photo), capturedAt });
    return true;
  } catch (error) {
    console.warn("촬영 사진을 저장하지 못했습니다.", error);
    return false;
  }
}

async function clearCapturedPhotos() {
  capturedPhotos.forEach((record) => URL.revokeObjectURL(record.url));
  capturedPhotos.clear();
  try {
    const database = await openPhotoDatabase();
    await new Promise((resolve, reject) => {
      const request = database.transaction(PHOTO_STORE_NAME, "readwrite").objectStore(PHOTO_STORE_NAME).clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    database.close();
  } catch (error) {
    console.warn("촬영 사진을 초기화하지 못했습니다.", error);
  }
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return structuredClone(defaultState);
    const collection = { ...defaultState.collection };
    cards.forEach((card) => {
      if (saved.collection && Object.prototype.hasOwnProperty.call(saved.collection, String(card.id))) {
        const count = Number(saved.collection[String(card.id)]);
        collection[String(card.id)] = Number.isFinite(count) && count >= 0 ? Math.floor(count) : 0;
      }
    });
    const safeNumber = (value) => {
      const number = Number(value);
      return Number.isFinite(number) && number >= 0 ? Math.floor(number) : 0;
    };
    return {
      ...structuredClone(defaultState),
      ...saved,
      coins: safeNumber(saved.coins ?? defaultState.coins),
      collection,
      inventory: {
        hints: safeNumber(saved.inventory?.hints),
        decorations: safeNumber(saved.inventory?.decorations),
        cafeCoupons: safeNumber(saved.inventory?.cafeCoupons),
        convenienceCoupons: safeNumber(saved.inventory?.convenienceCoupons),
        souvenirCoupons: safeNumber(saved.inventory?.souvenirCoupons)
      },
      completedMissions: Array.isArray(saved.completedMissions) ? [...new Set(saved.completedMissions.filter((id) => missions.some((mission) => mission.id === id)))] : [],
      verifiedPlaces: Array.isArray(saved.verifiedPlaces) ? [...new Set(saved.verifiedPlaces.filter((id) => places.some((place) => place.id === id)))] : [],
      lastVerifiedPlace: places.some((place) => place.id === saved.lastVerifiedPlace) ? saved.lastVerifiedPlace : null
    };
  } catch (error) {
    console.warn("저장된 체험 데이터를 읽지 못해 새로 시작합니다.", error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("체험 데이터를 저장하지 못했습니다.", error);
  }
}

function getCard(id) {
  return cards.find((card) => card.id === Number(id));
}

function ownedCount(id) {
  return Number(state.collection[String(id)] || 0);
}

function uniqueOwnedCount() {
  return cards.filter((card) => ownedCount(card.id) > 0).length;
}

function progressPercent() {
  return Math.round((uniqueOwnedCount() / cards.length) * 100);
}

function currentContext() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const hour = now.getHours();
  const season = month >= 3 && month <= 5 ? "봄" : month >= 6 && month <= 8 ? "여름" : month >= 9 && month <= 11 ? "가을" : "겨울";
  const time = hour >= 5 && hour <= 9 ? "아침" : hour >= 10 && hour <= 16 ? "낮" : hour >= 17 && hour <= 19 ? "노을" : "밤";
  const recommended = places[now.getDay() % places.length];
  return { season, time, recommended };
}

function updateAll() {
  updateSummaries();
  renderMissions();
  renderCards();
  renderRecipes();
  renderPlaces();
  updateVerificationPanel();
  renderProducts();
  renderInventory();
}

function updateSummaries() {
  const unique = uniqueOwnedCount();
  const progress = progressPercent();
  const missionDone = state.completedMissions.length;
  $("#headerCoin").textContent = state.coins;
  $("#homeCoin").textContent = state.coins;
  $("#shopCoin").textContent = state.coins;
  $("#uniqueCount").textContent = unique;
  $("#totalCardCount").textContent = cards.length;
  $("#homeProgressText").textContent = `${progress}%`;
  $("#homeProgressBar").style.width = `${progress}%`;
  $("#missionCount").textContent = missionDone;
  $("#albumProgressText").textContent = `${progress}%`;
  $("#scoreRing").style.background = `conic-gradient(var(--teal) ${progress}%, #dcebea ${progress}%)`;

  const visitCount = state.verifiedPlaces.length;
  $("#streakTitle").textContent = visitCount ? `${visitCount}곳의 파도를 만났어요!` : "첫 파도를 만나러 가요!";
  $("#streakCopy").textContent = visitCount ? `인증한 장소 ${visitCount}곳 · 다음 바다도 앨범에 담아 보세요.` : "현장 인증을 완료하면 이곳에 방문 기록이 쌓여요.";

  const context = currentContext();
  $("#currentSeason").textContent = context.season;
  $("#currentTimeBand").textContent = context.time;
  $("#recommendedPlace").textContent = context.recommended.name.replace(" 해수욕장", "");
  $("#conditionTip").textContent = `${context.season} · ${context.time} 조건과 잘 맞는 카드는 카드팩에서 등장할 확률이 높아요.`;
}

function navigate(viewName) {
  $$("[data-view]").forEach((view) => {
    const isActive = view.dataset.view === viewName;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });
  $$("[data-nav]").forEach((button) => {
    const isActive = button.dataset.nav === viewName;
    button.classList.toggle("is-active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "album") renderCards();
  if (viewName === "shop") renderProducts();
}

function renderMissions() {
  const grid = $("#missionGrid");
  grid.innerHTML = missions.map((mission) => {
    const done = state.completedMissions.includes(mission.id);
    const collectorReady = mission.id !== "collector" || uniqueOwnedCount() >= 3;
    const buttonText = done ? "완료했어요" : mission.id === "collector" && !collectorReady ? `${uniqueOwnedCount()} / 3장 수집 중` : mission.action;
    return `
      <article class="mission-card" style="--mission-color:${mission.color};--mission-tint:${mission.tint}">
        <div class="mission-top"><span class="mission-icon" aria-hidden="true">${mission.icon}</span><span class="reward"><span aria-hidden="true">●</span> +${mission.reward} 코인</span></div>
        <h3>${mission.title}</h3><p>${mission.description}</p>
        <button class="mission-action ${done ? "done" : ""}" type="button" data-mission="${mission.id}" ${done || !collectorReady ? "disabled" : ""}>${buttonText}</button>
      </article>`;
  }).join("");
}

function cardMarkup(card) {
  const count = ownedCount(card.id);
  const locked = count === 0;
  const personalPhoto = !locked ? capturedPhotos.get(card.id) : null;
  const displayImages = personalPhoto ? [personalPhoto.url] : card.images;
  const photos = displayImages.map((image, index) => `<img class="card-photo" src="${image}" alt="${personalPhoto ? `${card.name} 현장에서 내가 촬영한 사진` : index === 0 ? card.imageAlt : ""}" loading="lazy" decoding="async" />`).join("");
  return `
    <article class="collect-card ${locked ? "is-locked" : ""}" aria-label="${card.name}, ${locked ? "아직 획득하지 못함" : `${count}장 보유`}">
      <div class="card-art" style="--card-one:${card.colors[0]};--card-two:${card.colors[1]}">
        <div class="card-photo-group ${displayImages.length > 1 ? "is-collage" : ""}">${photos}</div>
        <span class="card-number">부산 바다 ${String(card.id).padStart(2, "0")}</span>
        <span class="card-rarity">${card.rarity}</span>
        ${personalPhoto ? '<span class="card-personal-photo">내가 찍은 사진</span>' : ""}
        ${locked ? '<span class="card-lock" aria-hidden="true">아직 미획득</span>' : ""}
      </div>
      <div class="card-body">
        <h3>${card.name}</h3>
        <p>${card.description}</p>
        <div class="card-tags"><span>지역 · ${card.region}</span><span>계절 · ${card.season}</span><span>시간 · ${card.time}</span></div>
        <div class="card-owned"><span>수집 상태</span><strong>${locked ? "아직 미획득" : `보유 ${count}장`}</strong></div>
      </div>
    </article>`;
}

function renderCards() {
  const region = $("#regionFilter").value;
  const season = $("#seasonFilter").value;
  const time = $("#timeFilter").value;
  const filtered = cards.filter((card) =>
    (region === "전체" || card.region === region) &&
    (season === "전체" || card.season === season) &&
    (time === "전체" || card.time === time)
  );
  $("#filteredCount").textContent = filtered.length;
  $("#cardGrid").innerHTML = filtered.map(cardMarkup).join("");
  $("#cardEmpty").hidden = filtered.length !== 0;
}

function renderRecipes() {
  $("#recipeGrid").innerHTML = recipes.map((recipe) => {
    const first = getCard(recipe.ingredients[0]);
    const second = getCard(recipe.ingredients[1]);
    const result = getCard(recipe.result);
    const canCombine = ownedCount(first.id) > 0 && ownedCount(second.id) > 0;
    return `
      <article class="recipe-card">
        <h3>${recipe.title}</h3><p>${recipe.description}</p>
        <div class="recipe-flow" aria-label="${first.name}과 ${second.name}을 조합해 ${result.name} 획득">
          <div class="recipe-piece"><span aria-hidden="true">${first.icon}</span><strong>${first.name}</strong><small>보유 ${ownedCount(first.id)}장</small></div>
          <div class="recipe-operator" aria-hidden="true">＋</div>
          <div class="recipe-piece"><span aria-hidden="true">${second.icon}</span><strong>${second.name}</strong><small>보유 ${ownedCount(second.id)}장</small></div>
          <div class="recipe-operator" aria-hidden="true">→</div>
          <div class="recipe-piece result"><span aria-hidden="true">${result.icon}</span><strong>${result.name}</strong><small>${result.rarity}</small></div>
        </div>
        <div class="recipe-bottom"><p>재료 카드는 각 1장씩 사용돼요.</p><button class="primary-button" type="button" data-recipe="${recipe.id}" ${canCombine ? "" : "disabled"}>${canCombine ? "조합하기" : "재료 부족"}</button></div>
      </article>`;
  }).join("");
}

function renderPlaces() {
  $("#placeList").innerHTML = places.map((place) => {
    const active = place.id === activePlaceId;
    const verified = state.verifiedPlaces.includes(place.id);
    return `
      <button class="place-option ${active ? "is-active" : ""}" type="button" data-place="${place.id}" aria-pressed="${active}">
        <span class="place-thumb" style="--place-one:${place.colors[0]};--place-two:${place.colors[1]}" aria-hidden="true">${place.icon}</span>
        <span><strong>${place.name}</strong><small>${place.area} · ${place.detail}</small></span>
        <span class="place-status">${verified ? "인증 완료" : "+35"}</span>
      </button>`;
  }).join("");
}

function activePlace() {
  return places.find((place) => place.id === activePlaceId) || places[0];
}

function resetVerificationInputs() {
  if (scanTimer) {
    window.clearTimeout(scanTimer);
    scanTimer = null;
  }
  locationRequestId += 1;
  methodVerified = false;
  $("#qrFrame").classList.remove("is-scanning");
  $("#scanQrButton").disabled = false;
  $("#scanQrButton").textContent = "QR 스캔 체험";
  $("#locationButton").disabled = false;
  $("#locationButton").textContent = "내 위치 확인";
  $("#qrStatus").textContent = "체험 버튼을 누르면 QR 인식 과정을 재현해요.";
  $("#locationStatus").textContent = "브라우저 권한을 허용하면 실제 거리를 확인해요.";
  updateVerificationButton();
}

function clearSelectedPhoto() {
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
  pendingPhotoFile = null;
  $("#photoInput").value = "";
  $("#photoPreview").src = "";
  $("#photoPreview").hidden = true;
  $("#photoRemove").hidden = true;
  $("#photoUploader").classList.remove("has-photo");
  photoReady = false;
  updateVerificationButton();
}

function updateVerificationPanel() {
  const place = activePlace();
  $("#selectedPlaceName").textContent = place.name;
  $("#selectedPlaceDescription").textContent = place.description;
  updateVerificationButton();
}

function updateVerificationButton() {
  const button = $("#completeVerifyButton");
  const already = state.verifiedPlaces.includes(activePlaceId);
  button.disabled = already || !methodVerified || !photoReady;
  if (already) button.textContent = "이미 인증한 장소예요";
  else if (!methodVerified) button.textContent = "인증을 먼저 완료해 주세요";
  else if (!photoReady) button.textContent = "바다 사진을 선택해 주세요";
  else button.textContent = "현장 인증 완료하기 · 35코인";
  $("#verifyHelper").textContent = already ? "다른 장소를 선택하면 새로운 인증을 시작할 수 있어요." : "인증 방법 완료와 사진 선택이 모두 필요해요.";
}

function setMethod(method) {
  if (method === activeMethod) return;
  activeMethod = method;
  resetVerificationInputs();
  $$("[data-method]").forEach((button) => {
    const active = button.dataset.method === method;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("#qrMethod").hidden = method !== "qr";
  $("#locationMethod").hidden = method !== "location";
}

function markMethodVerified(message, target) {
  methodVerified = true;
  $(target).textContent = message;
  updateVerificationButton();
  showToast("장소 확인 완료! 이제 바다 사진을 선택해 주세요.");
}

function distanceInKm(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const toRad = (value) => value * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function completeMission(id) {
  if (state.completedMissions.includes(id)) {
    showToast("이미 완료한 미션이에요.", true);
    return;
  }
  const mission = missions.find((item) => item.id === id);
  if (!mission) return;
  if (id === "collector" && uniqueOwnedCount() < 3) {
    showToast("서로 다른 카드를 3장 모으면 보상을 받을 수 있어요.", true);
    return;
  }
  state.completedMissions.push(id);
  state.coins += Number(mission.reward);
  saveState();
  updateAll();
  showToast(`${mission.title} 완료! 코인 ${mission.reward}개를 받았어요.`);
}

function combineRecipe(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  const canCombine = recipe.ingredients.every((id) => ownedCount(id) > 0);
  if (!canCombine) {
    showToast("조합에 필요한 카드가 부족해요.", true);
    return;
  }
  recipe.ingredients.forEach((id) => {
    state.collection[String(id)] = ownedCount(id) - 1;
  });
  state.collection[String(recipe.result)] = ownedCount(recipe.result) + 1;
  saveState();
  updateAll();
  const result = getCard(recipe.result);
  showCardDialog(result, "카드 조합 성공!", "두 풍경이 만나 전설 카드가 탄생했어요.");
}

function weightedPackCard() {
  const context = currentContext();
  const pool = cards.filter((card) => ![11, 12].includes(card.id));
  const rarityWeight = { "일반": 50, "희귀": 27, "영웅": 9, "전설": 1 };
  const weighted = pool.map((card) => {
    let weight = rarityWeight[card.rarity] || 10;
    if (card.season === context.season) weight *= 1.7;
    if (card.time === context.time) weight *= 1.5;
    const lastPlace = places.find((place) => place.id === state.lastVerifiedPlace);
    if (lastPlace && card.region === lastPlace.area) weight *= 1.35;
    if (ownedCount(card.id) === 0) weight *= 1.2;
    return { card, weight };
  });
  const total = weighted.reduce((sum, item) => sum + item.weight, 0);
  let pick = Math.random() * total;
  for (const item of weighted) {
    pick -= item.weight;
    if (pick <= 0) return item.card;
  }
  return weighted[0].card;
}

function buyProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  if (state.coins < product.price) {
    showToast("코인이 부족해요. 미션이나 현장 인증으로 코인을 모아 보세요.", true);
    return;
  }
  state.coins = Number(state.coins) - Number(product.price);
  if (product.id === "pack") {
    const card = weightedPackCard();
    state.collection[String(card.id)] = ownedCount(card.id) + 1;
    saveState();
    updateAll();
    showCardDialog(card, "카드팩을 열었어요!", ownedCount(card.id) > 1 ? "반가운 풍경을 한 장 더 발견했어요." : "새로운 부산 바다 풍경을 발견했어요.");
    return;
  }
  if (product.id === "hint") {
    state.inventory.hints += 1;
    const missing = cards.find((card) => ownedCount(card.id) === 0);
    showToast(missing ? `힌트: “${missing.name}” 카드는 ${missing.source}에서 만날 수 있어요.` : "모든 카드를 모았어요! 힌트는 보관함에 간직했어요.");
  }
  if (product.id === "decoration") {
    state.inventory.decorations += 1;
    showToast("조개 스티커를 보관함에 담았어요.");
  }
  if (product.inventoryKey) {
    state.inventory[product.inventoryKey] += 1;
    showToast(`${product.name}을 보관함에 담았어요.`);
  }
  saveState();
  updateAll();
}

function renderProducts() {
  $("#productGrid").innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-visual" style="--product-one:${product.colors[0]};--product-two:${product.colors[1]}" aria-hidden="true">${product.icon}</div>
      <h3>${product.name}</h3><p>${product.description}</p>
      <div class="product-bottom"><span class="product-price">${product.price} 코인</span><button class="buy-button" type="button" data-product="${product.id}" ${state.coins < product.price ? "disabled" : ""}>교환하기</button></div>
    </article>`).join("");
}

function renderInventory() {
  const items = [
    { icon: "?", name: "탐험 힌트", count: state.inventory.hints },
    { icon: "♢", name: "조개 스티커", count: state.inventory.decorations },
    { icon: "☕", name: "카페 할인권", count: state.inventory.cafeCoupons },
    { icon: "▣", name: "편의점 할인권", count: state.inventory.convenienceCoupons },
    { icon: "♙", name: "기념품점 할인권", count: state.inventory.souvenirCoupons }
  ];
  $("#inventoryGrid").innerHTML = items.map((item) => `<div class="inventory-item"><span aria-hidden="true">${item.icon}</span><div><small>${item.name}</small><strong>${item.count}개</strong></div></div>`).join("");
}

function showCardDialog(card, kicker, text) {
  const reveal = $("#revealCard");
  reveal.innerHTML = card.images.map((image) => `<img src="${image}" alt="" />`).join("");
  reveal.classList.toggle("is-collage", card.images.length > 1);
  reveal.style.setProperty("--reveal-one", card.colors[0]);
  reveal.style.setProperty("--reveal-two", card.colors[1]);
  $("#resultDialogKicker").textContent = kicker;
  $("#resultDialogTitle").textContent = card.name;
  $("#resultDialogText").textContent = `${card.rarity} · ${card.region} · ${text}`;
  $("#resultDialog").showModal();
}

function showToast(message, isError = false) {
  const toast = $("#toast");
  clearTimeout(toastTimer);
  $("#toastText").textContent = message;
  $("#toastIcon").textContent = isError ? "!" : "✓";
  toast.classList.toggle("is-error", isError);
  toast.hidden = false;
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 4300);
}

function setupFilters() {
  const regions = [...new Set(cards.map((card) => card.region))];
  $("#regionFilter").insertAdjacentHTML("beforeend", regions.map((region) => `<option value="${region}">${region}</option>`).join(""));
  ["#regionFilter", "#seasonFilter", "#timeFilter"].forEach((id) => $(id).addEventListener("change", renderCards));
  $("#filterReset").addEventListener("click", () => {
    $("#regionFilter").value = "전체";
    $("#seasonFilter").value = "전체";
    $("#timeFilter").value = "전체";
    renderCards();
  });
}

function setupNavigation() {
  document.addEventListener("click", (event) => {
    const navigation = event.target.closest("[data-nav], [data-go]");
    if (navigation) navigate(navigation.dataset.nav || navigation.dataset.go);

    const placeButton = event.target.closest("[data-place]");
    if (placeButton) {
      activePlaceId = placeButton.dataset.place;
      resetVerificationInputs();
      clearSelectedPhoto();
      renderPlaces();
      updateVerificationPanel();
    }

    const methodButton = event.target.closest("[data-method]");
    if (methodButton) setMethod(methodButton.dataset.method);

    const missionButton = event.target.closest("[data-mission]");
    if (missionButton) {
      const id = missionButton.dataset.mission;
      if (id === "quiz") {
        $("#quizFeedback").textContent = "";
        $$("[data-answer]").forEach((button) => { button.disabled = false; });
        $("#quizDialog").showModal();
      } else completeMission(id);
    }

    const recipeButton = event.target.closest("[data-recipe]");
    if (recipeButton) combineRecipe(recipeButton.dataset.recipe);

    const productButton = event.target.closest("[data-product]");
    if (productButton) buyProduct(productButton.dataset.product);
  });
}

function setupVerification() {
  $("#scanQrButton").addEventListener("click", () => {
    const button = $("#scanQrButton");
    const scannedPlaceId = activePlaceId;
    button.disabled = true;
    button.textContent = "QR 찾는 중…";
    $("#qrFrame").classList.add("is-scanning");
    $("#qrStatus").textContent = `${activePlace().name}의 QR 정보를 확인하고 있어요.`;
    scanTimer = window.setTimeout(() => {
      scanTimer = null;
      if (activeMethod !== "qr" || activePlaceId !== scannedPlaceId) return;
      $("#qrFrame").classList.remove("is-scanning");
      button.textContent = "QR 확인 완료";
      markMethodVerified(`${activePlace().name}의 체험용 QR을 확인했어요.`, "#qrStatus");
    }, 900);
  });

  $("#locationButton").addEventListener("click", () => {
    if (!navigator.geolocation) {
      $("#locationStatus").textContent = "이 브라우저에서는 위치 확인을 지원하지 않아요. 발표용 체험을 이용해 주세요.";
      return;
    }
    const button = $("#locationButton");
    const requestedPlaceId = activePlaceId;
    const requestId = ++locationRequestId;
    button.disabled = true;
    button.textContent = "위치 확인 중…";
    $("#locationStatus").textContent = "현재 위치를 안전하게 한 번만 확인하고 있어요.";
    navigator.geolocation.getCurrentPosition((position) => {
      if (requestId !== locationRequestId || activeMethod !== "location" || activePlaceId !== requestedPlaceId) return;
      button.disabled = false;
      button.textContent = "내 위치 다시 확인";
      const place = activePlace();
      const distance = distanceInKm(position.coords.latitude, position.coords.longitude, place.lat, place.lng);
      if (distance <= 2) markMethodVerified(`${place.name}에서 약 ${distance.toFixed(1)}킬로미터 안에 있어요.`, "#locationStatus");
      else $("#locationStatus").textContent = `선택한 장소에서 약 ${Math.round(distance)}킬로미터 떨어져 있어요. 발표용 위치 체험을 이용할 수 있어요.`;
    }, () => {
      if (requestId !== locationRequestId || activeMethod !== "location" || activePlaceId !== requestedPlaceId) return;
      button.disabled = false;
      button.textContent = "내 위치 다시 확인";
      $("#locationStatus").textContent = "위치 권한을 확인하지 못했어요. 발표용 위치 체험을 이용해 주세요.";
    }, { enableHighAccuracy: false, timeout: 6000, maximumAge: 300000 });
  });

  $("#locationDemoButton").addEventListener("click", () => {
    locationRequestId += 1;
    $("#locationButton").disabled = false;
    $("#locationButton").textContent = "내 위치 확인";
    markMethodVerified(`${activePlace().name}의 발표용 위치 인증을 완료했어요.`, "#locationStatus");
  });

  $("#photoInput").addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("이미지 파일을 선택해 주세요.", true);
      return;
    }
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(file);
    pendingPhotoFile = file;
    $("#photoPreview").src = previewUrl;
    $("#photoPreview").hidden = false;
    $("#photoRemove").hidden = false;
    $("#photoUploader").classList.add("has-photo");
    photoReady = true;
    updateVerificationButton();
  });

  $("#photoRemove").addEventListener("click", () => {
    clearSelectedPhoto();
  });

  $("#completeVerifyButton").addEventListener("click", async () => {
    if (state.verifiedPlaces.includes(activePlaceId)) {
      showToast("이미 인증한 장소예요.", true);
      return;
    }
    if (!methodVerified || !photoReady) {
      showToast("장소 인증과 사진 선택을 모두 완료해 주세요.", true);
      return;
    }
    const place = activePlace();
    const photoSaved = await saveCapturedPhoto(place.cardId, pendingPhotoFile);
    if (!photoSaved) {
      showToast("사진을 기기에 저장하지 못했어요. 브라우저 저장 공간을 확인해 주세요.", true);
      return;
    }
    state.verifiedPlaces.push(place.id);
    state.lastVerifiedPlace = place.id;
    state.coins += 35;
    state.collection[String(place.cardId)] = ownedCount(place.cardId) + 1;
    saveState();
    updateAll();
    showCardDialog(getCard(place.cardId), "현장 인증 완료 · 35코인 획득!", `${place.name}에서 만난 풍경을 앨범에 담았어요.`);
  });
}

function setupDialogs() {
  $("#dialogClose").addEventListener("click", () => $("#resultDialog").close());
  $("#dialogConfirm").addEventListener("click", () => $("#resultDialog").close());
  $("#quizClose").addEventListener("click", () => $("#quizDialog").close());
  $$("[data-answer]").forEach((button) => button.addEventListener("click", () => {
    if (button.dataset.answer === "correct") {
      $$("[data-answer]").forEach((option) => { option.disabled = true; });
      $("#quizFeedback").textContent = "정답이에요! 안전 수칙을 기억해 주세요.";
      window.setTimeout(() => {
        $("#quizDialog").close();
        completeMission("quiz");
      }, 650);
    } else {
      $("#quizFeedback").textContent = "조금 위험해 보여요. 안전요원의 안내를 떠올려 보세요.";
    }
  }));
}

function setupReset() {
  $("#resetButton").addEventListener("click", async () => {
    const accepted = window.confirm("수집한 카드와 코인, 인증 기록을 처음 상태로 되돌릴까요?");
    if (!accepted) return;
    state = structuredClone(defaultState);
    saveState();
    await clearCapturedPhotos();
    activePlaceId = places[0].id;
    methodVerified = false;
    clearSelectedPhoto();
    updateAll();
    navigate("home");
    showToast("체험 데이터를 처음 상태로 되돌렸어요.");
  });
}

async function init() {
  setupFilters();
  setupNavigation();
  setupVerification();
  setupDialogs();
  setupReset();
  await loadCapturedPhotos();
  updateAll();
}

init();
