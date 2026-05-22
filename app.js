"use strict";

const DISTRICTS = [
  { id: "arcade", name: "Arcade District", accent: "#ff4d5e", order: 0 },
  { id: "theater", name: "Theater District", accent: "#b46cff", order: 1 },
  { id: "office", name: "Office District", accent: "#ffd166", order: 2 },
  { id: "lab", name: "Lab District", accent: "#5cffae", order: 3 },
  { id: "apartment", name: "Apartment District", accent: "#33f6ff", order: 4 }
];

let PROJECTS = [];

const FALLBACK_PROJECTS = [
  {
    id: "dead-man-walking",
    title: "Dead Man Walking",
    category: "Games and Websites",
    district: "arcade",
    subtitle: "An infinite 2D runner game, where users aim for survival time and healing society.",
    status: "2026",
    building: { width: 220, height: 320, visualType: "arcade-cabinet" },
    rooms: createDefaultRooms("arcade-district", "Arcade Cabinet")
  },
    {
    id: "word-forage",
    title: "Word Forage",
    category: "Games and Websites",
    district: "arcade",
    subtitle: "A word puzzle game where players connect letters to form words and feed a growing Raccoon.",
    status: "2026",
    building: { width: 220, height: 420, visualType: "arcade-cabinet" },
    rooms: createDefaultRooms("arcade-district", "Arcade Cabinet")
  },
  {
    id: "theater-district-template",
    title: "Theater Showcase",
    category: "Media and Presentations",
    district: "theater",
    subtitle: "Posters, videos, presentation decks, and visual storytelling projects.",
    status: "TEMPLATE",
    building: { width: 230, height: 300, visualType: "media-theater" },
    rooms: createDefaultRooms("theater-district", "Theater Showcase")
  },
  {
    id: "office-district-template",
    title: "Office Project",
    category: "Work Experience",
    district: "office",
    subtitle: "Professional systems, workflow tools, dashboards, and internship-inspired work.",
    status: "TEMPLATE",
    building: { width: 240, height: 350, visualType: "office-tower" },
    rooms: createDefaultRooms("office-district", "Office Project")
  },
  {
    id: "lab-district-template",
    title: "Lab Experiment",
    category: "AI and Data",
    district: "lab",
    subtitle: "Machine learning, analytics, automation, and technical experiments.",
    status: "TEMPLATE",
    building: { width: 225, height: 330, visualType: "research-lab" },
    rooms: createDefaultRooms("lab-district", "Lab Experiment")
  },
  {
    id: "apartment-district-template",
    title: "Apartment Tool",
    category: "Personal Tools",
    district: "apartment",
    subtitle: "Personal apps, utilities, planners, and small systems built to make daily tasks easier.",
    status: "TEMPLATE",
    building: { width: 215, height: 285, visualType: "apartment-stack" },
    rooms: createDefaultRooms("apartment-district", "Apartment Tool")
  }
];

const CITY_CONFIG = {
  width: 2600,
  edgeZone: 140,
  maxEdgeSpeed: 18,
  smoothing: 0.12,
  stopThreshold: 0.25
};

const SCENE_MAP = {
  command: "command-room",
  city: "pixel-city",
  building: "building-cutaway"
};

const state = {
  scene: "command",
  cameraX: 0,
  targetCameraX: 0,
  activeProjectId: null,
  activeRoomIndex: 0,
  timeMode: "night",
  fastTravelOpen: false,
  questsOpen: false,
  pingOpen: false,
  pingOnline: false
};

const camera = {
  edgeDirection: 0,
  edgeSpeed: 0,
  isTouching: false,
  touchStartX: 0,
  touchStartCameraX: 0
};

const swipe = {
  roomStartX: 0
};

const dom = {
  app: null,
  scenes: [],
  startQuestButton: null,
  cityCameraFrame: null,
  cityWorld: null,
  player: null,
  backToCityButton: null,
  buildingTitle: null,
  buildingDescription: null,
  buildingTitleGroup: null,
  buildingRoomGrid: null,
  fastTravelButton: null,
  closeFastTravelButton: null,
  fastTravelPanel: null,
  fastTravelList: null,
  questsButton: null,
  questsPanel: null,
  questsList: null,
  pingButton: null,
  closePingButton: null,
  pingPopup: null,
  pingStatusDot: null,
  pingStatusText: null,
  pingPopupStatusDot: null,
  pingPopupStatusText: null,
  roomModal: null,
  roomModalPanel: null
};

document.addEventListener("DOMContentLoaded", initApp);

async function initApp() {
  await loadProjects();
  normalizeProjectData();
  cacheDom();
  setTimeModeFromDate();
  updatePingStatus();
  bindSceneControls();
  bindGlobalUiAudio();
  renderCity();
  renderPlayer();
  renderFastTravel();
  renderQuests();
  initCamera();
  bindRoomModalControls();
  setScene("command");
}

async function loadProjects() {
  PROJECTS = cloneProjectData(FALLBACK_PROJECTS);

  try {
    const response = await fetch("projects.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`projects.json failed to load: ${response.status}`);
    }

    const jsonProjects = await response.json();

    if (Array.isArray(jsonProjects) && jsonProjects.length > 0) {
      PROJECTS = cloneProjectData(jsonProjects);
    }
  } catch (error) {
    console.warn("Using fallback project data. Run this through Live Server or GitHub Pages if you want projects.json changes to load locally.", error);
  }
}

function cloneProjectData(projects) {
  return JSON.parse(JSON.stringify(projects));
}

function createDefaultRooms(prefix, projectTitle) {
  return [
    {
      id: `${prefix}-overview`,
      floor: 3,
      side: "left",
      title: "Overview",
      summary: `${projectTitle} project purpose, audience, and core value.`,
      content: `This room explains what ${projectTitle} is, why it exists, and how it fits into the wider portfolio system.`,
      links: []
    },
    {
      id: `${prefix}-gallery`,
      floor: 3,
      side: "right",
      title: "Gallery",
      summary: "Screens, visual references, mockups, and interface states.",
      content: "Use this room for images, interface captures, sketches, design references, and progress shots.",
      links: []
    },
    {
      id: `${prefix}-challenges`,
      floor: 2,
      side: "left",
      title: "Challenges",
      summary: "Problems solved during planning, design, and implementation.",
      content: "This room covers the main constraints, decisions, tradeoffs, and debugging moments behind the project.",
      links: []
    },
    {
      id: `${prefix}-build-systems`,
      floor: 2,
      side: "right",
      title: "Build Systems",
      summary: "Core systems, technical structure, and reusable parts.",
      content: "This room explains how the project is structured, how data flows, and which components or systems make it scalable.",
      links: []
    },
    {
      id: `${prefix}-skills-learned`,
      floor: 1,
      side: "left",
      title: "Skills Learned",
      summary: "Technical, creative, and problem-solving skills gained.",
      content: "This room tracks what the project improved, including frontend structure, interaction design, debugging, and presentation thinking.",
      links: []
    },
    {
      id: `${prefix}-links`,
      floor: 1,
      side: "right",
      title: "Links",
      summary: "GitHub, live demo, case study, and documentation.",
      content: "Use this room to connect the project to source code, deployments, case studies, and supporting documentation.",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Live Demo", url: "#" },
        { label: "Case Study", url: "#" },
        { label: "Documentation", url: "#" }
      ]
    }
  ];
}

function cacheDom() {
  dom.app = document.querySelector("#app");
  dom.scenes = Array.from(document.querySelectorAll("[data-scene]"));
  dom.startQuestButton = document.querySelector("#start-quest-button");
  dom.cityCameraFrame = document.querySelector("#city-camera-frame");
  dom.cityWorld = document.querySelector("#city-world");
  dom.player = document.querySelector("#city-player");
  dom.backToCityButton = document.querySelector("#back-to-city-button");
  dom.buildingTitle = document.querySelector("#building-cutaway-title");
  dom.buildingDescription = document.querySelector("#building-cutaway-description");
  dom.buildingTitleGroup = document.querySelector(".building-title-group");
  dom.buildingRoomGrid = document.querySelector("#building-room-grid");
  dom.fastTravelButton = document.querySelector("#fast-travel-button");
  dom.closeFastTravelButton = document.querySelector("#close-fast-travel-button");
  dom.fastTravelPanel = document.querySelector("#fast-travel-panel");
  dom.fastTravelList = document.querySelector("#fast-travel-list");
  dom.questsButton = document.querySelector("#quests-button");
  dom.questsPanel = document.querySelector("#quests-panel");
  dom.questsList = document.querySelector("#quests-list");
  dom.pingButton = document.querySelector("#ping-pavao-button");
  dom.closePingButton = document.querySelector("#close-ping-pavao-button");
  dom.pingPopup = document.querySelector("#ping-pavao-popup");
  dom.pingStatusDot = document.querySelector("#ping-status-dot");
  dom.pingStatusText = document.querySelector("#ping-status-text");
  dom.pingPopupStatusDot = document.querySelector("#ping-popup-status-dot");
  dom.pingPopupStatusText = document.querySelector("#ping-popup-status-text");
  dom.roomModal = document.querySelector("#room-modal");
  dom.roomModalPanel = document.querySelector(".room-modal-panel");
}

function bindSceneControls() {
  if (dom.startQuestButton) dom.startQuestButton.addEventListener("click", startQuest);
  if (dom.backToCityButton) dom.backToCityButton.addEventListener("click", backToCity);
  if (dom.fastTravelButton) dom.fastTravelButton.addEventListener("click", toggleFastTravel);
  if (dom.closeFastTravelButton) dom.closeFastTravelButton.addEventListener("click", closeFastTravel);
  if (dom.questsButton) dom.questsButton.addEventListener("click", toggleQuests);
  if (dom.pingButton) dom.pingButton.addEventListener("click", togglePing);
  if (dom.closePingButton) dom.closePingButton.addEventListener("click", closePing);

  document.querySelectorAll("#ping-pavao-popup a").forEach((link) => {
    link.addEventListener("click", stopAlarmAudio);
  });
}

function setScene(sceneName) {
  const targetSceneId = SCENE_MAP[sceneName];

  if (!targetSceneId) return;

  state.scene = sceneName;

  dom.scenes.forEach((sceneElement) => {
    const isTargetScene = sceneElement.id === targetSceneId;
    sceneElement.classList.toggle("is-active", isTargetScene);
    sceneElement.setAttribute("aria-hidden", String(!isTargetScene));
  });

  if (sceneName === "city") {
    updateCameraWorldPosition();
    renderQuests();
  }

  syncElevatorMusic();
}

function startQuest() {
  enterCity();
}

function enterCity() {
  setScene("city");
}

function enterProject(projectId) {
  const project = getProjectById(projectId);

  if (!project) return;

  const building = document.querySelector(`[data-project-id="${project.id}"]`);

  state.activeProjectId = project.id;
  state.activeRoomIndex = 0;

  trackDistrictVisit(project.district);
  trackBuildingVisit(project.id);
  playElevatorMusic();

  if (building) building.classList.add("is-zooming");
  if (dom.app && !prefersReducedMotion()) dom.app.classList.add("is-glitching");

  window.setTimeout(() => {
    renderBuildingCutaway(project);
    setScene("building");

    if (building) building.classList.remove("is-zooming");
    if (dom.app) dom.app.classList.remove("is-glitching");
  }, prefersReducedMotion() ? 0 : 420);
}

function backToCity() {
  closeRoom();
  stopElevatorMusic();
  setScene("city");
  updateCameraWorldPosition();
}

function renderCity() {
  if (!dom.cityWorld) return;

  dom.cityWorld.style.width = `${CITY_CONFIG.width}px`;
  dom.cityWorld.innerHTML = "";

  renderCityDecor();
  renderProjectBuildings();
}

function renderCityDecor() {
  const skyLayer = createLayer("city-background-layer", "city-layer city-background-layer");
  const farSkylineLayer = createLayer("city-far-skyline-layer", "city-layer city-far-skyline-layer");
  const nearSkylineLayer = createLayer("city-mid-skyline-layer", "city-layer city-mid-skyline-layer");
  const bridgeLayer = createLayer("city-bridge-layer", "city-layer city-bridge-layer");
  const groundLayer = createLayer("city-ground-layer", "city-layer city-ground-layer");
  const ambientLayer = createLayer("city-ambient-layer", "city-layer city-ambient-layer");

  dom.cityWorld.appendChild(skyLayer);
  dom.cityWorld.appendChild(farSkylineLayer);
  dom.cityWorld.appendChild(nearSkylineLayer);
  dom.cityWorld.appendChild(bridgeLayer);
  dom.cityWorld.appendChild(groundLayer);
  dom.cityWorld.appendChild(ambientLayer);
}

function renderProjectBuildings() {
  const buildingLayer = createLayer("city-building-layer", "city-layer city-building-layer");

  PROJECTS.forEach((project) => {
    buildingLayer.appendChild(createBuildingElement(project));
  });

  dom.cityWorld.appendChild(buildingLayer);
}

function createBuildingElement(project) {
  const building = document.createElement("button");
  building.type = "button";
  building.className = "project-building";
  building.dataset.projectId = project.id;
  building.dataset.projectStatus = project.status;
  building.dataset.projectCategory = project.category;
  building.dataset.projectDistrict = project.district;
  building.dataset.visualType = project.building.visualType;
  building.setAttribute("aria-label", `${project.title}. ${project.category}. ${project.subtitle}`);
  building.style.left = `${project.x}px`;
  building.style.width = `${project.building.width}px`;
  building.style.height = `${project.building.height}px`;

  setProjectAccent(building, project.accent);

  const roof = document.createElement("span");
  roof.className = "building-roof";
  roof.setAttribute("aria-hidden", "true");

  building.appendChild(roof);
  building.appendChild(createWindowGrid(project));
  building.appendChild(createBuildingLabel(project));

  building.addEventListener("click", () => enterProject(project.id));

  return building;
}

function createWindowGrid(project) {
  const windowGrid = document.createElement("span");
  const windowCount = getWindowCount(project.building.height);

  windowGrid.className = "building-window-grid";
  windowGrid.setAttribute("aria-hidden", "true");

  for (let index = 0; index < windowCount; index += 1) {
    const windowTile = document.createElement("span");
    const shouldLightWindow = (index + project.id.length) % 3 === 0;
    windowTile.className = shouldLightWindow ? "building-window is-lit" : "building-window";
    windowGrid.appendChild(windowTile);
  }

  return windowGrid;
}

function createBuildingLabel(project) {
  const label = document.createElement("span");
  label.className = "building-label";

  const title = document.createElement("span");
  title.className = "building-label-title";
  title.textContent = project.title;

  const category = document.createElement("span");
  category.className = "building-label-category";
  category.textContent = project.category;

  const subtitle = document.createElement("span");
  subtitle.className = "building-label-subtitle";
  subtitle.textContent = project.subtitle;

  label.appendChild(title);
  label.appendChild(category);
  label.appendChild(subtitle);

  return label;
}

function renderHudOverlay(layer) {
  const hudLines = [
    ["Mode", state.timeMode],
    ["Buildings", String(PROJECTS.length)],
    ["Input", "Edge / Drag"],
    ["Status", "Finite City"]
  ];

  hudLines.forEach(([label, value]) => {
    const line = document.createElement("span");
    line.className = "city-hud-line";

    const labelText = document.createElement("span");
    labelText.textContent = label;

    const valueText = document.createElement("strong");
    valueText.textContent = value;

    line.appendChild(labelText);
    line.appendChild(valueText);
    layer.appendChild(line);
  });
}

function createLayer(id, className) {
  const layer = document.createElement("div");
  layer.id = id;
  layer.className = className;
  return layer;
}

function renderPlayer() {
  if (!dom.cityCameraFrame) return;

  if (!dom.player) {
    dom.player = document.createElement("span");
    dom.player.id = "city-player";
    dom.player.className = "city-player";
    dom.player.setAttribute("aria-hidden", "true");
    dom.cityCameraFrame.appendChild(dom.player);
  }

  updatePlayerPosition(getViewportWidth() / 2);
}

function updatePlayerPosition(x) {
  if (!dom.cityCameraFrame) return;

  const clampedX = Math.max(12, Math.min(x, getViewportWidth() - 12));
  dom.cityCameraFrame.style.setProperty("--player-x", `${clampedX}px`);
}

function initCamera() {
  if (!dom.cityCameraFrame || !dom.cityWorld) return;

  setCameraTarget(0);
  updateCameraWorldPosition();

  dom.cityCameraFrame.addEventListener("mousemove", handleMouseEdgeMovement);

  dom.cityCameraFrame.addEventListener("mouseleave", () => {
    camera.edgeDirection = 0;
    camera.edgeSpeed = 0;
  });

  dom.cityCameraFrame.addEventListener("touchstart", handleTouchCamera, { passive: true });
  dom.cityCameraFrame.addEventListener("touchmove", handleTouchCamera, { passive: false });
  dom.cityCameraFrame.addEventListener("touchend", handleTouchCamera, { passive: true });
  dom.cityCameraFrame.addEventListener("touchcancel", handleTouchCamera, { passive: true });

  window.addEventListener("resize", () => {
    setCameraTarget(state.targetCameraX);
    state.cameraX = clampCameraX(state.cameraX);
    updateCameraWorldPosition();
    updatePlayerPosition(getViewportWidth() / 2);
  });

  const leftButton = document.querySelector("#city-camera-left");
  const rightButton = document.querySelector("#city-camera-right");

  if (leftButton) {
    leftButton.addEventListener("click", () => setCameraTarget(state.targetCameraX - getViewportWidth() * 0.75));
  }

  if (rightButton) {
    rightButton.addEventListener("click", () => setCameraTarget(state.targetCameraX + getViewportWidth() * 0.75));
  }

  updateCamera();
}

function updateCamera() {
  if (camera.edgeDirection !== 0 && !camera.isTouching && state.scene === "city") {
    setCameraTarget(state.targetCameraX + camera.edgeSpeed * camera.edgeDirection);
  }

  const distance = state.targetCameraX - state.cameraX;

  if (Math.abs(distance) > CITY_CONFIG.stopThreshold) {
    state.cameraX += distance * CITY_CONFIG.smoothing;
  } else {
    state.cameraX = state.targetCameraX;
  }

  state.cameraX = clampCameraX(state.cameraX);
  updateCameraWorldPosition();

  requestAnimationFrame(updateCamera);
}

function handleMouseEdgeMovement(event) {
  if (!dom.cityCameraFrame || camera.isTouching || state.scene !== "city") return;

  const bounds = dom.cityCameraFrame.getBoundingClientRect();
  const localX = event.clientX - bounds.left;
  const leftDistance = localX;
  const rightDistance = bounds.width - localX;

  updatePlayerPosition(localX);

  camera.edgeDirection = 0;
  camera.edgeSpeed = 0;

  if (leftDistance < CITY_CONFIG.edgeZone) {
    camera.edgeDirection = -1;
    camera.edgeSpeed = getEdgeSpeed(leftDistance);
  } else if (rightDistance < CITY_CONFIG.edgeZone) {
    camera.edgeDirection = 1;
    camera.edgeSpeed = getEdgeSpeed(rightDistance);
  }
}

function handleTouchCamera(event) {
  if (!dom.cityCameraFrame || state.scene !== "city") return;

  if (event.type === "touchstart") {
    camera.isTouching = true;
    camera.edgeDirection = 0;
    camera.edgeSpeed = 0;
    camera.touchStartX = event.touches[0].clientX;
    camera.touchStartCameraX = state.targetCameraX;
  }

  if (event.type === "touchmove" && camera.isTouching) {
    event.preventDefault();

    const currentX = event.touches[0].clientX;
    const bounds = dom.cityCameraFrame.getBoundingClientRect();

    updatePlayerPosition(currentX - bounds.left);
    setCameraTarget(camera.touchStartCameraX + camera.touchStartX - currentX);
  }

  if (event.type === "touchend" || event.type === "touchcancel") {
    camera.isTouching = false;
  }
}

function setCameraTarget(x) {
  state.targetCameraX = clampCameraX(x);
}

function clampCameraX(x) {
  const maxCameraX = getMaxCameraX();
  let clampedX = x;

  if (clampedX < 0) clampedX = 0;
  if (clampedX > maxCameraX) clampedX = maxCameraX;

  return clampedX;
}

function updateCameraWorldPosition() {
  if (!dom.cityWorld) return;

  dom.cityWorld.style.transform = `translate3d(${-state.cameraX}px, 0, 0)`;
  dom.cityWorld.style.setProperty("--camera-x", `${state.cameraX}px`);
}

function getEdgeSpeed(distanceFromEdge) {
  const edgePercent = 1 - distanceFromEdge / CITY_CONFIG.edgeZone;
  return Math.max(0, CITY_CONFIG.maxEdgeSpeed * edgePercent);
}

function getMaxCameraX() {
  return Math.max(0, CITY_CONFIG.width - getViewportWidth());
}

function getViewportWidth() {
  return dom.cityCameraFrame ? dom.cityCameraFrame.clientWidth : 0;
}

function renderBuildingCutaway(project) {
  if (!project || !dom.buildingRoomGrid) return;

  setActiveProjectTheme(project);

  if (dom.buildingTitle) dom.buildingTitle.textContent = project.title;
  if (dom.buildingDescription) dom.buildingDescription.textContent = project.subtitle;

  renderBuildingMeta(project);

  dom.buildingRoomGrid.innerHTML = "";

  [3, 2, 1].forEach((floor) => {
    const floorElement = document.createElement("section");
    floorElement.className = "cutaway-floor";
    floorElement.setAttribute("aria-label", `Floor ${floor}`);

    const floorLabel = document.createElement("div");
    floorLabel.className = "floor-label";
    floorLabel.textContent = `Floor ${floor}`;

    floorElement.appendChild(floorLabel);

    project.rooms
      .filter((room) => room.floor === floor)
      .forEach((room) => {
        const roomIndex = project.rooms.findIndex((projectRoom) => projectRoom.id === room.id);
        floorElement.appendChild(createRoomCard(room, roomIndex, project));
      });

    dom.buildingRoomGrid.appendChild(floorElement);
  });
}

function renderBuildingMeta(project) {
  if (!dom.buildingTitleGroup) return;

  const existingMeta = dom.buildingTitleGroup.querySelector(".building-meta-row");
  if (existingMeta) existingMeta.remove();

  const metaRow = document.createElement("div");
  metaRow.className = "building-meta-row";

  [project.districtName, project.category].forEach((item) => {
    const pill = document.createElement("span");
    pill.className = "building-meta-pill";
    pill.textContent = item;
    metaRow.appendChild(pill);
  });

  dom.buildingTitleGroup.insertBefore(metaRow, dom.buildingTitle);
}

function createRoomCard(room, index, project) {
  const roomCard = document.createElement("button");
  roomCard.type = "button";
  roomCard.className = "room-card";
  roomCard.dataset.roomId = room.id;
  roomCard.dataset.roomIndex = String(index);
  roomCard.dataset.floor = String(room.floor);
  roomCard.dataset.side = room.side;
  roomCard.setAttribute("aria-label", `${project.title}, ${room.title}. ${room.summary}`);

  const marker = document.createElement("span");
  marker.className = "room-marker";
  marker.textContent = getRoomMarker(room);

  const content = document.createElement("span");
  content.className = "room-card-content";

  const title = document.createElement("span");
  title.className = "room-card-title";
  title.textContent = room.title;

  const summary = document.createElement("span");
  summary.className = "room-card-summary";
  summary.textContent = room.summary;

  const meta = document.createElement("span");
  meta.className = "room-card-meta";
  meta.textContent = `${room.side} bay // ${room.floor}F`;

  content.appendChild(title);
  content.appendChild(summary);
  content.appendChild(meta);
  roomCard.appendChild(marker);
  roomCard.appendChild(content);

  roomCard.addEventListener("click", () => openRoom(index));

  return roomCard;
}

function openRoom(index) {
  const room = getRoomByIndex(index);
  if (!room) return;

  state.activeRoomIndex = index;
  renderRoomModal();

  const buildingScene = document.querySelector("#building-cutaway");
  if (buildingScene) buildingScene.classList.add("has-room-open");
  if (dom.roomModal) dom.roomModal.setAttribute("aria-hidden", "false");
}

function closeRoom() {
  const buildingScene = document.querySelector("#building-cutaway");
  if (buildingScene) buildingScene.classList.remove("has-room-open");
  if (dom.roomModal) dom.roomModal.setAttribute("aria-hidden", "true");
}

function renderRoomModal(direction = "left") {
  const project = getActiveProject();
  const room = getRoomByIndex(state.activeRoomIndex);

  if (!project || !room) return;

  const title = document.querySelector("#room-modal-title");
  const media = document.querySelector("#room-modal-media");
  const projectTitle = document.querySelector("#room-modal-project-title");
  const summary = document.querySelector("#room-modal-project-summary");
  const list = document.querySelector("#room-modal-project-list");
  const copy = document.querySelector(".room-modal-copy");

  if (dom.roomModalPanel) {
    dom.roomModalPanel.classList.remove("is-sliding-left", "is-sliding-right");
    void dom.roomModalPanel.offsetWidth;
    dom.roomModalPanel.classList.add(direction === "right" ? "is-sliding-right" : "is-sliding-left");
  }

  if (title) title.textContent = room.title;

  if (media) {
    media.innerHTML = "";
    const marker = document.createElement("div");
    marker.className = "room-modal-visual-marker";
    marker.textContent = getRoomMarker(room);
    media.appendChild(marker);
  }

  if (projectTitle) projectTitle.textContent = project.title;
  if (summary) summary.textContent = room.summary;

  if (copy) {
    const oldKicker = copy.querySelector(".room-modal-kicker");
    const oldFull = copy.querySelector(".room-modal-full-content");

    if (oldKicker) oldKicker.remove();
    if (oldFull) oldFull.remove();

    const kicker = document.createElement("p");
    kicker.className = "room-modal-kicker";
    kicker.textContent = `Floor ${room.floor} // ${room.side} bay`;

    const fullContent = document.createElement("p");
    fullContent.className = "room-modal-full-content";
    fullContent.textContent = room.content;

    copy.insertBefore(kicker, projectTitle);
    copy.insertBefore(fullContent, list);
  }

  if (list) {
    list.innerHTML = "";

    const links = room.title === "Links" ? getDefaultProjectLinks(room.links) : room.links;

    links.forEach((link) => {
      const item = document.createElement("li");
      const anchor = document.createElement("a");

      anchor.href = link.url || "#";
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.addEventListener("click", () => trackProjectLinkOpen(project.id));

      item.appendChild(anchor);
      list.appendChild(item);
    });
  }
}

function goToPreviousRoom() {
  const project = getActiveProject();
  if (!project) return;

  state.activeRoomIndex = (state.activeRoomIndex - 1 + project.rooms.length) % project.rooms.length;
  renderRoomModal("right");
}

function goToNextRoom() {
  const project = getActiveProject();
  if (!project) return;

  state.activeRoomIndex = (state.activeRoomIndex + 1) % project.rooms.length;
  renderRoomModal("left");
}

function bindRoomModalControls() {
  const closeButton = document.querySelector("#close-room-modal-button");
  const backdrop = document.querySelector("[data-close-room-modal]");
  const previousButton = document.querySelector("#previous-room-button");
  const nextButton = document.querySelector("#next-room-button");

  if (closeButton) closeButton.addEventListener("click", closeRoom);
  if (backdrop) backdrop.addEventListener("click", closeRoom);
  if (previousButton) previousButton.addEventListener("click", goToPreviousRoom);
  if (nextButton) nextButton.addEventListener("click", goToNextRoom);

  handleRoomSwipe();
}

function handleRoomSwipe() {
  if (!dom.roomModalPanel) return;

  dom.roomModalPanel.addEventListener("touchstart", (event) => {
    swipe.roomStartX = event.touches[0].clientX;
  }, { passive: true });

  dom.roomModalPanel.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - swipe.roomStartX;

    if (Math.abs(deltaX) < 50) return;

    if (deltaX > 0) {
      goToPreviousRoom();
    } else {
      goToNextRoom();
    }
  }, { passive: true });
}

function renderFastTravel() {
  if (!dom.fastTravelList) return;

  dom.fastTravelList.innerHTML = "";

  getDistrictsWithProjects().forEach(({ district, projects }) => {
    const group = document.createElement("section");
    group.className = "fast-travel-category";

    const heading = document.createElement("h3");
    heading.className = "fast-travel-category-title";
    heading.textContent = district.name;

    group.appendChild(heading);

    projects.forEach((project) => {
      const item = document.createElement("button");

      item.type = "button";
      item.className = "fast-travel-item";
      item.dataset.projectId = project.id;

      setProjectAccent(item, project.accent);

      item.innerHTML = `
        <span class="fast-travel-item-meta">
          <span class="fast-travel-pill">${project.category}</span>
          <span class="fast-travel-pill">${project.status}</span>
        </span>
        <span class="fast-travel-item-title">${project.title}</span>
        <span class="fast-travel-item-subtitle">${project.subtitle}</span>
      `;

      item.addEventListener("click", () => travelToProject(project.id));
      group.appendChild(item);
    });

    dom.fastTravelList.appendChild(group);
  });
}

function toggleFastTravel() {
  state.fastTravelOpen = !state.fastTravelOpen;

  if (dom.fastTravelPanel) {
    dom.fastTravelPanel.setAttribute("aria-hidden", String(!state.fastTravelOpen));
  }

  if (state.fastTravelOpen) renderFastTravel();
}

function closeFastTravel() {
  state.fastTravelOpen = false;

  if (dom.fastTravelPanel) {
    dom.fastTravelPanel.setAttribute("aria-hidden", "true");
  }
}

function travelToProject(projectId) {
  const project = getProjectById(projectId);
  if (!project) return;

  closeFastTravel();
  closeRoom();

  if (state.scene !== "city") setScene("city");

  const targetX = project.x - getViewportWidth() / 2 + project.building.width / 2;

  setCameraTarget(targetX);

  window.setTimeout(() => {
    pulseBuilding(project.id);
  }, prefersReducedMotion() ? 0 : 650);
}

function pulseBuilding(projectId) {
  const building = document.querySelector(`[data-project-id="${projectId}"]`);
  if (!building) return;

  building.classList.remove("is-pulsing");
  void building.offsetWidth;
  building.classList.add("is-pulsing");

  window.setTimeout(() => {
    building.classList.remove("is-pulsing");
  }, 1900);
}

function togglePing() {
  state.pingOpen = !state.pingOpen;

  if (!state.pingOpen) {
    stopAlarmAudio();
  }

  if (dom.pingPopup) {
    dom.pingPopup.setAttribute("aria-hidden", String(!state.pingOpen));
  }
}

function closePing() {
  stopAlarmAudio();
  state.pingOpen = false;

  if (dom.pingPopup) {
    dom.pingPopup.setAttribute("aria-hidden", "true");
  }
}

function setTimeModeFromDate() {
  const hour = new Date().getHours();
  let mode = "night";

  if (hour >= 5 && hour < 7) {
    mode = "sunrise";
  } else if (hour >= 7 && hour < 17) {
    mode = "daytime";
  } else if (hour >= 17 && hour < 20) {
    mode = "sunset";
  }

  state.timeMode = mode;

  if (dom.app) {
    dom.app.dataset.timeMode = mode;
  }
}

function updatePingStatus() {
  const torontoHour = getTorontoHour();
  const isOnline = torontoHour >= 9 && torontoHour < 17;
  const label = isOnline ? "ONLINE" : "OFFLINE";

  state.pingOnline = isOnline;

  [dom.pingStatusDot, dom.pingPopupStatusDot].forEach((dot) => {
    if (dot) dot.classList.toggle("is-online", isOnline);
  });

  [dom.pingStatusText, dom.pingPopupStatusText].forEach((text) => {
    if (text) text.textContent = label;
  });
}

function getTorontoHour() {
  const torontoTime = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    hour12: false
  }).format(new Date());

  return Number(torontoTime);
}

function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id) || null;
}

function getActiveProject() {
  return getProjectById(state.activeProjectId);
}

function getRoomByIndex(index) {
  const activeProject = getActiveProject();
  let room = null;

  if (activeProject && activeProject.rooms[index]) {
    room = activeProject.rooms[index];
  }

  return room;
}

function getCategoryRoomContent(project, roomTitle, fallbackContent) {
  const categoryContent = PROJECT_CATEGORY_CONTENT[project.category];

  if (categoryContent && categoryContent[roomTitle]) {
    return categoryContent[roomTitle];
  }

  return fallbackContent;
}

function normalizeProjectData() {
  PROJECTS.forEach((project, index) => {
    const district = getDistrictById(project.district) || DISTRICTS[index % DISTRICTS.length];

    project.id = project.id || `project-${index + 1}`;
    project.district = district.id;
    project.districtName = district.name;
    project.category = project.category || district.name;
    project.status = project.status || "IN PROGRESS";
    project.accent = project.accent || district.accent;
    project.rooms = Array.isArray(project.rooms) ? project.rooms : [];

    project.rooms.sort((roomA, roomB) => {
      let order = 0;

      if (roomA.floor !== roomB.floor) {
        order = roomB.floor - roomA.floor;
      } else if (roomA.side === "right" && roomB.side === "left") {
        order = 1;
      } else if (roomA.side === "left" && roomB.side === "right") {
        order = -1;
      }

      return order;
    });
  });

  PROJECTS.sort((projectA, projectB) => {
    const districtA = getDistrictById(projectA.district);
    const districtB = getDistrictById(projectB.district);
    const orderA = districtA ? districtA.order : 999;
    const orderB = districtB ? districtB.order : 999;
    let result = orderA - orderB;

    if (result === 0) {
      result = projectA.title.localeCompare(projectB.title);
    }

    return result;
  });

  PROJECTS.forEach((project, index) => {
    const baseX = 240;
    const gap = 340;
    project.x = baseX + index * gap;
  });

  CITY_CONFIG.width = Math.max(1800, PROJECTS.length * 340 + 620);
}


function toggleQuests() {
  state.questsOpen = !state.questsOpen;

  if (dom.questsPanel) {
    dom.questsPanel.setAttribute("aria-hidden", String(!state.questsOpen));
  }

  if (dom.questsButton) {
    dom.questsButton.setAttribute("aria-expanded", String(state.questsOpen));
  }

  renderQuests();
}

function renderQuests() {
  if (!dom.questsList) return;

  dom.questsList.innerHTML = "";

  getDistrictsWithProjects().forEach(({ district, projects }) => {
    const quest = getQuestForDistrict(district, projects);
    const item = document.createElement("li");

    item.className = quest.complete ? "quest-list-item is-complete" : "quest-list-item";
    item.style.setProperty("--quest-accent", district.accent);

    const status = document.createElement("span");
    status.className = "quest-status";
    status.textContent = quest.complete ? "✓" : "";

    const content = document.createElement("span");
    content.className = "quest-content";

    const title = document.createElement("span");
    title.className = "quest-title";
    title.textContent = quest.title;

    const progress = document.createElement("span");
    progress.className = "quest-progress";
    progress.textContent = quest.progress;

    content.appendChild(title);
    content.appendChild(progress);
    item.appendChild(status);
    item.appendChild(content);
    dom.questsList.appendChild(item);
  });
}

function getQuestForDistrict(district, projects) {
  const progress = getQuestProgress();
  const projectIds = projects.map((project) => project.id);
  const visitedBuildings = projectIds.filter((projectId) => progress.buildings.includes(projectId)).length;
  const openedProjects = projectIds.filter((projectId) => progress.links.includes(projectId)).length;
  const districtVisited = progress.districts.includes(district.id);
  let title = `Visit the ${district.name}`;
  let detail = districtVisited ? "Complete" : "0 / 1";
  let complete = districtVisited;

  if (districtVisited) {
    title = `Visit all buildings in the ${district.name}`;
    detail = `${visitedBuildings} / ${projects.length}`;
    complete = visitedBuildings === projects.length;
  }

  if (districtVisited && visitedBuildings === projects.length) {
    title = `Open each project in the ${district.name}`;
    detail = `${openedProjects} / ${projects.length}`;
    complete = openedProjects === projects.length;
  }

  return { title, progress: detail, complete };
}

function trackDistrictVisit(districtId) {
  const progress = getQuestProgress();

  if (districtId && !progress.districts.includes(districtId)) {
    progress.districts.push(districtId);
    saveQuestProgress(progress);
  }

  renderQuests();
}

function trackBuildingVisit(projectId) {
  const progress = getQuestProgress();

  if (projectId && !progress.buildings.includes(projectId)) {
    progress.buildings.push(projectId);
    saveQuestProgress(progress);
  }

  renderQuests();
}

function trackProjectLinkOpen(projectId) {
  const progress = getQuestProgress();

  if (projectId && !progress.links.includes(projectId)) {
    progress.links.push(projectId);
    saveQuestProgress(progress);
  }

  renderQuests();
}

function getQuestProgress() {
  const fallback = { districts: [], buildings: [], links: [] };
  let progress = fallback;

  try {
    const savedProgress = window.sessionStorage.getItem("pavaoQuestProgress");
    progress = savedProgress ? JSON.parse(savedProgress) : fallback;
  } catch (error) {
    progress = fallback;
  }

  progress.districts = Array.isArray(progress.districts) ? progress.districts : [];
  progress.buildings = Array.isArray(progress.buildings) ? progress.buildings : [];
  progress.links = Array.isArray(progress.links) ? progress.links : [];

  return progress;
}

function saveQuestProgress(progress) {
  try {
    window.sessionStorage.setItem("pavaoQuestProgress", JSON.stringify(progress));
  } catch (error) {
    return;
  }
}

function getDistrictById(id) {
  return DISTRICTS.find((district) => district.id === id) || null;
}

function getDistrictsWithProjects() {
  return DISTRICTS.map((district) => {
    const projects = PROJECTS.filter((project) => project.district === district.id);
    return { district, projects };
  }).filter(({ projects }) => projects.length > 0);
}

function getDefaultProjectLinks(existingLinks) {
  const baseLinks = [
    { label: "GitHub", url: "#" },
    { label: "Live Demo", url: "#" },
    { label: "Case Study", url: "#" },
    { label: "Documentation", url: "#" }
  ];

  if (!existingLinks || existingLinks.length === 0) {
    return baseLinks;
  }

  return baseLinks.map((baseLink) => {
    const match = existingLinks.find((link) => link.label === baseLink.label);
    return match || baseLink;
  });
}

function getRoomMarker(room) {
  const markers = {
    Overview: "OV",
    Gallery: "GA",
    Challenges: "CH",
    "Build Systems": "BS",
    "Skills Learned": "SK",
    Links: "LN"
  };

  return markers[room.title] || "RM";
}

function setActiveProjectTheme(project) {
  const target = dom.app || document.documentElement;
  target.style.setProperty("--active-project-accent", project.accent);
  target.style.setProperty("--active-project-soft", hexToRgba(project.accent, 0.1));
  target.style.setProperty("--active-project-glow", hexToRgba(project.accent, 0.34));
}

function setProjectAccent(element, accent) {
  element.style.setProperty("--project-accent", accent);
  element.style.setProperty("--project-accent-soft", hexToRgba(accent, 0.08));
  element.style.setProperty("--project-accent-glow", hexToRgba(accent, 0.42));
}

function getWindowCount(height) {
  let windowCount = 24;

  if (height >= 340) {
    windowCount = 40;
  } else if (height >= 300) {
    windowCount = 32;
  }

  return windowCount;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hexToRgba(hex, alpha) {
  const cleanHex = hex.replace("#", "");
  const red = parseInt(cleanHex.substring(0, 2), 16);
  const green = parseInt(cleanHex.substring(2, 4), 16);
  const blue = parseInt(cleanHex.substring(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/* --------------------------------------------------
   Elevator project room implementation
-------------------------------------------------- */

/* --------------------------------------------------
   Site audio controls
-------------------------------------------------- */

const SITE_AUDIO = {
  uiClick: createSiteAudio("soundeffects/ui-click.mp3", 0.55, false),
  elevatorDing: createSiteAudio("soundeffects/elevator-ding.mp3", 0.7, false),
  alarm: createSiteAudio("soundeffects/alarm.mp3", 0.75, true),
  elevatorMusic: createSiteAudio("soundeffects/elevator-music.mp3", 0.1, true)
};

function createSiteAudio(src, volume, loop) {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.loop = loop;
  audio.preload = "auto";
  return audio;
}

function playSiteAudio(audio) {
  if (!audio) return;

  audio.currentTime = 0;

  const playPromise = audio.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function stopSiteAudio(audio) {
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
}

function playUiClick() {
  playSiteAudio(SITE_AUDIO.uiClick);
}

function playElevatorDing() {
  playSiteAudio(SITE_AUDIO.elevatorDing);
}

function playAlarmAudio() {
  playSiteAudio(SITE_AUDIO.alarm);
}

function stopAlarmAudio() {
  stopSiteAudio(SITE_AUDIO.alarm);
}

function playElevatorMusic() {
  if (!SITE_AUDIO.elevatorMusic) return;

  const playPromise = SITE_AUDIO.elevatorMusic.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function stopElevatorMusic() {
  stopSiteAudio(SITE_AUDIO.elevatorMusic);
}

function syncElevatorMusic() {
  if (state.scene === "building") {
    playElevatorMusic();
  } else {
    stopElevatorMusic();
  }
}

function bindGlobalUiAudio() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) return;
    if (button.classList.contains("elevator-floor-hitbox")) return;

    playUiClick();
  });
}

const ELEVATOR_FLOORS = [
  { key: "links", label: "LK", button: "4", roomTitle: "Links", percent: { left: 72.35, top: 30, width: 2.25, height: 2.85 } },
  { key: "challenges", label: "CH", button: "3", roomTitle: "Challenges", percent: { left: 72.35, top: 36, width: 2.25, height: 2.85 } },
  { key: "gallery", label: "GA", button: "2", roomTitle: "Gallery", percent: { left: 72.35, top: 41, width: 2.25, height: 2.85 } },
  { key: "overview", label: "OV", button: "1", roomTitle: "Overview", percent: { left: 72.35, top: 46.5, width: 2.25, height: 2.85 } },
  { key: "ground", label: "GR", button: "G", roomTitle: "Ground", percent: { left: 72.35, top: 52, width: 2.25, height: 2.85 } }
];

const ELEVATOR_INACTIVE_CONTROLS = [
  { key: "door-open", label: "Open Door", percent: { left: 69.7, top: 57.85, width: 2.55, height: 3.05 } },
  { key: "door-close", label: "Close Door", percent: { left: 73.4, top: 57.85, width: 2.55, height: 3.05 } },
  { key: "alarm", label: "Alarm", percent: { left: 71.45, top: 63.15, width: 2.55, height: 3.05 } }
];

const PROJECT_CATEGORY_CONTENT = {
  "Games and Websites": {
    Overview: "A playable web and game project focused on interaction, feedback, and replay value. This section explains the concept, audience, and main loop.",
    Gallery: "Placeholder gallery notes for interface states, sprites, animations, menus, and visual progress shots. Replace this with final captures as the project grows.",
    Challenges: "Key challenges include pacing, feedback clarity, responsive layout, game feel, and keeping the project simple enough to finish while still feeling polished.",
    Links: "External links for the live build, source code, case study, and supporting documentation will sit here."
  },
  "Media and Presentations": {
    Overview: "A visual showcase project for posters, decks, video work, and presentation assets. This section explains the story, audience, and purpose.",
    Gallery: "Placeholder gallery notes for poster frames, slide samples, video stills, layout studies, and final visual exports.",
    Challenges: "Key challenges include visual hierarchy, pacing, export quality, consistent branding, and turning static content into a clear portfolio story.",
    Links: "External links for hosted media, presentation files, process notes, and supporting documentation will sit here."
  },
  "Work Experience": {
    Overview: "A professional systems project based on workplace learning, product thinking, UX decisions, and internal workflow design.",
    Gallery: "Placeholder gallery notes for dashboards, wireframes, workflow screens, process diagrams, and system snapshots.",
    Challenges: "Key challenges include translating business needs into clear flows, balancing speed with usability, and communicating decisions across teams.",
    Links: "External links for safe demos, case study pages, design notes, and supporting documentation will sit here."
  },
  "AI and Data": {
    Overview: "A technical project focused on data, automation, machine learning, or AI-assisted workflows. This section explains the question and result.",
    Gallery: "Placeholder gallery notes for charts, model outputs, notebooks, dashboards, screenshots, and experiment visuals.",
    Challenges: "Key challenges include data cleaning, model evaluation, clear reporting, avoiding overfitting, and explaining results in plain language.",
    Links: "External links for notebooks, repositories, demos, reports, and supporting documentation will sit here."
  },
  "Personal Tools": {
    Overview: "A personal utility project built to make a repeated task faster, clearer, or easier to manage.",
    Gallery: "Placeholder gallery notes for screens, forms, trackers, export views, settings panels, and before-after workflow examples.",
    Challenges: "Key challenges include keeping the tool simple, handling edge cases, preserving data, and making the interface useful during real use.",
    Links: "External links for live tools, source code, setup notes, and supporting documentation will sit here."
  }
};

function createDefaultRooms(prefix, projectTitle) {
  return [
    {
      id: `${prefix}-links`,
      floor: 4,
      side: "center",
      title: "Links",
      summary: "GitHub, live demo, case study, and documentation.",
      content: "Use this room to connect the project to source code, deployments, case studies, and supporting documentation.",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Live Demo", url: "#" },
        { label: "Case Study", url: "#" },
        { label: "Documentation", url: "#" }
      ]
    },
    {
      id: `${prefix}-challenges`,
      floor: 3,
      side: "center",
      title: "Challenges",
      summary: "Problems solved during planning, design, and implementation.",
      content: "This room covers the main constraints, decisions, tradeoffs, and debugging moments behind the project.",
      links: []
    },
    {
      id: `${prefix}-gallery`,
      floor: 2,
      side: "center",
      title: "Gallery",
      summary: "Screens, visual references, mockups, and interface states.",
      content: "Use this room for images, interface captures, sketches, design references, and progress shots.",
      links: []
    },
    {
      id: `${prefix}-overview`,
      floor: 1,
      side: "center",
      title: "Overview",
      summary: `${projectTitle} project purpose, audience, and core value.`,
      content: `This room explains what ${projectTitle} is, why it exists, and how it fits into the wider portfolio system.`,
      links: []
    }
  ];
}

function getCategoryRoomContent(project, roomTitle, fallbackContent) {
  const categoryContent = PROJECT_CATEGORY_CONTENT[project.category];

  if (categoryContent && categoryContent[roomTitle]) {
    return categoryContent[roomTitle];
  }

  return fallbackContent;
}

function normalizeProjectData() {
  PROJECTS.forEach((project, index) => {
    const district = getDistrictById(project.district) || DISTRICTS[index % DISTRICTS.length];

    project.id = project.id || `project-${index + 1}`;
    project.district = district.id;
    project.districtName = district.name;
    project.category = project.category || district.name;
    project.status = project.status || "IN PROGRESS";
    project.accent = project.accent || district.accent;
    project.rooms = Array.isArray(project.rooms) ? project.rooms : [];

    const preferredRoomOrder = ["Links", "Challenges", "Gallery", "Overview"];
    const filteredRooms = [];

    preferredRoomOrder.forEach((title) => {
      const existingRoom = project.rooms.find((room) => room.title === title);
      const fallbackRoom = createDefaultRooms(project.id, project.title).find((room) => room.title === title);

      if (existingRoom || fallbackRoom) {
        filteredRooms.push(existingRoom || fallbackRoom);
      }
    });

    project.rooms = filteredRooms.map((room) => {
      const floorConfig = ELEVATOR_FLOORS.find((floor) => floor.roomTitle === room.title);

      return {
        ...room,
        content: getCategoryRoomContent(project, room.title, room.content),
        floor: floorConfig ? Number(floorConfig.button) || room.floor : room.floor,
        side: "center"
      };
    });
  });

  PROJECTS.sort((projectA, projectB) => {
    const districtA = getDistrictById(projectA.district);
    const districtB = getDistrictById(projectB.district);
    const orderA = districtA ? districtA.order : 999;
    const orderB = districtB ? districtB.order : 999;
    let result = orderA - orderB;

    if (result === 0) {
      result = projectA.title.localeCompare(projectB.title);
    }

    return result;
  });

  PROJECTS.forEach((project, index) => {
    const baseX = 240;
    const gap = 340;
    project.x = baseX + index * gap;
  });

  CITY_CONFIG.width = Math.max(1800, PROJECTS.length * 340 + 620);
}

function renderBuildingCutaway(project) {
  if (!project || !dom.buildingRoomGrid) return;

  setActiveProjectTheme(project);

  state.activeRoomIndex = -1;
  state.elevatorSelectedFloor = null;
  state.elevatorHoveredFloor = null;
  state.elevatorDoorState = "closed";
  clearElevatorTimer();

  if (dom.buildingTitle) dom.buildingTitle.textContent = project.title;
  if (dom.buildingDescription) dom.buildingDescription.textContent = project.subtitle;

  renderBuildingMeta(project);
  renderElevatorExperience(project);
}

function renderElevatorExperience(project) {
  if (!dom.buildingRoomGrid) return;

  dom.buildingRoomGrid.innerHTML = "";

  const shell = document.createElement("div");
  shell.className = "elevator-experience";
  shell.dataset.elevatorState = state.elevatorDoorState || "closed";

  const stage = document.createElement("div");
  stage.className = "elevator-stage";

  const roomWindow = document.createElement("div");
  roomWindow.className = "elevator-room-window";
  roomWindow.innerHTML = `
    <div id="elevator-room-content" class="elevator-room-content"></div>
  `;

  const closedImage = document.createElement("img");
  closedImage.src = "sprites/elevator-closed.png";
  closedImage.alt = "Closed elevator";
  closedImage.className = "elevator-image elevator-image-closed";

  const openImage = document.createElement("img");
  openImage.src = "sprites/elevator-open.png";
  openImage.alt = "Open elevator";
  openImage.className = "elevator-image elevator-image-open";

  const hoverCard = document.createElement("article");
  hoverCard.id = "elevator-hover-card";
  hoverCard.className = "elevator-hover-card";
  hoverCard.setAttribute("aria-hidden", "true");
  hoverCard.innerHTML = `
    <p class="elevator-hover-kicker">Floor preview</p>
    <h3 id="elevator-hover-title"></h3>
    <p id="elevator-hover-summary"></p>
  `;

  stage.appendChild(roomWindow);
  stage.appendChild(openImage);
  stage.appendChild(closedImage);
  stage.appendChild(hoverCard);

  ELEVATOR_FLOORS.forEach((floor) => {
    const button = createElevatorButton(floor, project);
    stage.appendChild(button);
  });

  ELEVATOR_INACTIVE_CONTROLS.forEach((control) => {
    const button = createInactiveElevatorControl(control);
    stage.appendChild(button);
  });

  shell.appendChild(stage);
  dom.buildingRoomGrid.appendChild(shell);

  updateElevatorVisualState();
}

function createElevatorButton(floor, project) {
  const button = document.createElement("button");
  const isGround = floor.key === "ground";

  button.type = "button";
  button.className = "elevator-floor-hitbox";
  button.dataset.floorKey = floor.key;
  button.dataset.roomTitle = floor.roomTitle;
  button.setAttribute("aria-label", isGround ? "Return to city" : `${floor.roomTitle}. ${getElevatorRoom(project, floor.roomTitle)?.summary || ""}`);
  button.style.left = `${floor.percent.left}%`;
  button.style.top = `${floor.percent.top}%`;
  button.style.width = `${floor.percent.width}%`;
  button.style.height = `${floor.percent.height}%`;

  button.addEventListener("mouseenter", () => previewElevatorFloor(floor.key));
  button.addEventListener("focus", () => previewElevatorFloor(floor.key));
  button.addEventListener("mouseleave", clearElevatorPreview);
  button.addEventListener("blur", clearElevatorPreview);
  button.addEventListener("click", () => handleElevatorFloorPress(floor.key));

  return button;
}

function createInactiveElevatorControl(control) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = control.key === "alarm"
    ? "elevator-floor-hitbox elevator-alarm-hitbox"
    : "elevator-floor-hitbox elevator-inactive-hitbox";
  button.dataset.floorKey = control.key;
  button.setAttribute("aria-label", control.key === "alarm" ? "Ping Pavao" : `${control.label}. Not active yet.`);
  button.style.left = `${control.percent.left}%`;
  button.style.top = `${control.percent.top}%`;
  button.style.width = `${control.percent.width}%`;
  button.style.height = `${control.percent.height}%`;

  if (control.key === "alarm") {
    button.addEventListener("click", handleElevatorAlarmPress);
  }

  return button;
}

function handleElevatorAlarmPress() {
  playAlarmAudio();
  state.pingOpen = true;

  if (dom.pingPopup) {
    dom.pingPopup.setAttribute("aria-hidden", "false");
  }
}

function handleElevatorFloorPress(floorKey) {
  const project = getActiveProject();
  const floor = ELEVATOR_FLOORS.find((item) => item.key === floorKey);

  if (!project || !floor) return;

  if (floor.key === "ground") {
    clearElevatorTimer();
    state.elevatorSelectedFloor = floor.key;
    state.elevatorDoorState = "closed";
    clearElevatorRoomContent();
    updateElevatorVisualState();

    window.setTimeout(() => {
      backToCity();
    }, 420);

    return;
  }

  const room = getElevatorRoom(project, floor);

  if (!room) return;

  playElevatorDing();

  const roomIndex = project.rooms.findIndex((projectRoom) => projectRoom.title === room.title);

  clearElevatorTimer();
  clearElevatorRoomContent();

  state.elevatorSelectedFloor = floor.key;
  state.elevatorDoorState = "closing";
  state.activeRoomIndex = roomIndex;

  updateElevatorVisualState();

  state.elevatorTimer = window.setTimeout(() => {
    renderElevatorRoomContent(project, room);
    state.elevatorDoorState = "open";
    updateElevatorVisualState();
  }, 2000);
}

function previewElevatorFloor(floorKey) {
  const project = getActiveProject();
  const floor = ELEVATOR_FLOORS.find((item) => item.key === floorKey);

  if (!project || !floor) return;

  state.elevatorHoveredFloor = floor.key;

  if (floor.key === "ground") {
    setElevatorHoverCard("Ground", "Return to the city.");
  } else {
    const room = getElevatorRoom(project, floor);
    if (room) setElevatorHoverCard(room.title, room.summary);
  }

  updateElevatorVisualState();
}

function clearElevatorPreview() {
  state.elevatorHoveredFloor = null;
  const card = document.querySelector("#elevator-hover-card");

  if (card) {
    card.setAttribute("aria-hidden", "true");
  }

  updateElevatorVisualState();
}

function setElevatorHoverCard(title, summary) {
  const card = document.querySelector("#elevator-hover-card");
  const titleElement = document.querySelector("#elevator-hover-title");
  const summaryElement = document.querySelector("#elevator-hover-summary");

  if (titleElement) titleElement.textContent = title;
  if (summaryElement) summaryElement.textContent = summary;
  if (card) card.setAttribute("aria-hidden", "false");
}

function updateElevatorVisualState() {
  const shell = document.querySelector(".elevator-experience");

  if (!shell) return;

  shell.dataset.elevatorState = state.elevatorDoorState || "closed";

  const buttons = Array.from(shell.querySelectorAll(".elevator-floor-hitbox"));

  buttons.forEach((button) => {
    const key = button.dataset.floorKey;
    const selected = key === state.elevatorSelectedFloor;
    const hovered = key === state.elevatorHoveredFloor;

    button.classList.toggle("is-selected", selected);
    button.classList.toggle("is-hovered", hovered);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function clearElevatorRoomContent() {
  const content = document.querySelector("#elevator-room-content");

  if (content) {
    content.innerHTML = "";
  }
}

function renderElevatorRoomContent(project, room) {
  const content = document.querySelector("#elevator-room-content");

  if (!content) return;

  const links = room.title === "Links" ? getDefaultProjectLinks(room.links) : room.links;
  const linkMarkup = links.length > 0
    ? `<ul class="elevator-room-links">${links.map((link) => `<li><a href="${link.url || "#"}" target="_blank" rel="noopener" data-elevator-project-link="${project.id}">${link.label}</a></li>`).join("")}</ul>`
    : "";

  content.innerHTML = `
    <p class="elevator-room-kicker">&gt; project: ${project.title}</p>
    <p class="elevator-room-kicker">&gt; category: ${project.category}</p>
    <h3>&gt; ${room.title}</h3>
    <p class="elevator-room-summary">// ${room.summary}</p>
    <p class="elevator-room-body">&gt; ${room.content}</p>
    ${linkMarkup}
  `;

  Array.from(content.querySelectorAll("[data-elevator-project-link]")).forEach((link) => {
    link.addEventListener("click", () => trackProjectLinkOpen(project.id));
  });
}

function resetElevatorToClosed() {
  clearElevatorTimer();
  state.elevatorDoorState = "closed";
  state.elevatorSelectedFloor = null;
  state.activeRoomIndex = -1;

  clearElevatorRoomContent();

  updateElevatorVisualState();
}

function clearElevatorTimer() {
  if (state.elevatorTimer) {
    window.clearTimeout(state.elevatorTimer);
    state.elevatorTimer = null;
  }
}

function getElevatorRoom(project, floorConfig) {
  if (!project || !Array.isArray(project.rooms)) return null;

  if (typeof floorConfig === "object" && floorConfig !== null) {
    return project.rooms.find((room) => String(room.floor) === String(floorConfig.button))
      || project.rooms.find((room) => room.title === floorConfig.roomTitle)
      || null;
  }

  return project.rooms.find((room) => room.title === floorConfig) || null;
}

function renderBuildingMeta(project) {
  if (!dom.buildingTitleGroup) return;

  const existingMeta = dom.buildingTitleGroup.querySelector(".building-meta-row");
  if (existingMeta) existingMeta.remove();

  const metaRow = document.createElement("div");
  metaRow.className = "building-meta-row";

  [project.districtName, project.category].forEach((item) => {
    const pill = document.createElement("span");
    pill.className = "building-meta-pill";
    pill.textContent = item;
    metaRow.appendChild(pill);
  });

  dom.buildingTitleGroup.insertBefore(metaRow, dom.buildingTitle);
}
