"use strict";

const PROJECTS = [
  {
    id: "simply-green-website",
    title: "Simply Green Website",
    category: "Client Website",
    subtitle: "A clean service site for lawn care programs and customer trust.",
    accent: "#33f6ff",
    status: "ONLINE",
    x: 220,
    building: { width: 190, height: 260, visualType: "service-tower" },
    rooms: createDefaultRooms("simply-green", "Simply Green Website")
  },
  {
    id: "infinite-connections",
    title: "Infinite Connections",
    category: "Game UI",
    subtitle: "A desktop word puzzle system with animated feedback and replay value.",
    accent: "#ff3fd5",
    status: "IN PROGRESS",
    x: 540,
    building: { width: 230, height: 330, visualType: "puzzle-arcade" },
    rooms: createDefaultRooms("infinite-connections", "Infinite Connections")
  },
  {
    id: "zombie-runner",
    title: "Zombie Runner",
    category: "Game Development",
    subtitle: "A runner game system with missions, obstacles, near misses, and scaling speed.",
    accent: "#ff9b3d",
    status: "EXPERIMENTAL",
    x: 900,
    building: { width: 210, height: 300, visualType: "danger-stack" },
    rooms: createDefaultRooms("zombie-runner", "Zombie Runner")
  },
  {
    id: "hawk-pilot",
    title: "Hawk Pilot",
    category: "UX Product",
    subtitle: "A degree planning concept for students managing course paths and advising.",
    accent: "#b46cff",
    status: "ARCHIVED",
    x: 1240,
    building: { width: 250, height: 370, visualType: "ux-control-center" },
    rooms: createDefaultRooms("hawk-pilot", "Hawk Pilot")
  },
  {
    id: "pixel-city-world",
    title: "Pixel City World",
    category: "Interactive System",
    subtitle: "A horizontal portfolio world with camera movement and project buildings.",
    accent: "#66ff9a",
    status: "EXPERIMENTAL",
    x: 1640,
    building: { width: 220, height: 310, visualType: "world-engine" },
    rooms: createDefaultRooms("pixel-city-world", "Pixel City World")
  },
  {
    id: "portfolio-system",
    title: "Portfolio System",
    category: "Frontend Architecture",
    subtitle: "A modular portfolio framework built with HTML, CSS, and vanilla JavaScript.",
    accent: "#ffd166",
    status: "ONLINE",
    x: 2020,
    building: { width: 240, height: 350, visualType: "system-core" },
    rooms: createDefaultRooms("portfolio-system", "Portfolio System")
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
  transition: "quest-transition",
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
  pingOpen: false
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
  transitionTitle: null,
  transitionStatusText: null,
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
  pingButton: null,
  closePingButton: null,
  pingPopup: null,
  roomModal: null,
  roomModalPanel: null
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  normalizeProjectData();
  cacheDom();
  setTimeModeFromDate();
  bindSceneControls();
  renderCity();
  renderPlayer();
  renderFastTravel();
  initCamera();
  bindRoomModalControls();
  setScene("command");
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
  dom.transitionTitle = document.querySelector("#quest-transition-title");
  dom.transitionStatusText = document.querySelector(".transition-status-text");
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
  dom.pingButton = document.querySelector("#ping-pavao-button");
  dom.closePingButton = document.querySelector("#close-ping-pavao-button");
  dom.pingPopup = document.querySelector("#ping-pavao-popup");
  dom.roomModal = document.querySelector("#room-modal");
  dom.roomModalPanel = document.querySelector(".room-modal-panel");
}

function bindSceneControls() {
  if (dom.startQuestButton) dom.startQuestButton.addEventListener("click", startQuest);
  if (dom.backToCityButton) dom.backToCityButton.addEventListener("click", backToCity);
  if (dom.fastTravelButton) dom.fastTravelButton.addEventListener("click", toggleFastTravel);
  if (dom.closeFastTravelButton) dom.closeFastTravelButton.addEventListener("click", closeFastTravel);
  if (dom.pingButton) dom.pingButton.addEventListener("click", togglePing);
  if (dom.closePingButton) dom.closePingButton.addEventListener("click", closePing);
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
  }
}

function startQuest() {
  setScene("transition");

  if (dom.transitionTitle) dom.transitionTitle.textContent = "/// QUEST MODE";
  if (dom.transitionStatusText) dom.transitionStatusText.textContent = "ENTERING PIXEL CITY";

  window.setTimeout(enterCity, prefersReducedMotion() ? 100 : 1400);
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
  const farSkylineLayer = createLayer("city-far-skyline-layer", "city-layer city-far-skyline-layer");
  const midSkylineLayer = createLayer("city-mid-skyline-layer", "city-layer city-mid-skyline-layer");
  const bridgeLayer = createLayer("city-bridge-layer", "city-layer city-bridge-layer");
  const groundLayer = createLayer("city-ground-layer", "city-layer city-ground-layer");
  const ambientLayer = createLayer("city-ambient-layer", "city-layer city-ambient-layer");
  const hudOverlay = createLayer("city-hud-overlay", "city-layer city-hud-overlay");

  renderBridgesAndSigns(bridgeLayer);
  renderHudOverlay(hudOverlay);

  dom.cityWorld.appendChild(farSkylineLayer);
  dom.cityWorld.appendChild(midSkylineLayer);
  dom.cityWorld.appendChild(bridgeLayer);
  dom.cityWorld.appendChild(groundLayer);
  dom.cityWorld.appendChild(ambientLayer);
  dom.cityWorld.appendChild(hudOverlay);
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
  building.dataset.visualType = project.building.visualType;
  building.setAttribute("aria-label", `${project.title}. ${project.status}. ${project.subtitle}`);
  building.style.left = `${project.x}px`;
  building.style.width = `${project.building.width}px`;
  building.style.height = `${project.building.height}px`;

  setProjectAccent(building, project.accent);

  const roof = document.createElement("span");
  roof.className = "building-roof";
  roof.setAttribute("aria-hidden", "true");

  const neonLineOne = document.createElement("span");
  neonLineOne.className = "building-neon-line";
  neonLineOne.setAttribute("aria-hidden", "true");

  const neonLineTwo = document.createElement("span");
  neonLineTwo.className = "building-neon-line";
  neonLineTwo.setAttribute("aria-hidden", "true");

  building.appendChild(roof);
  building.appendChild(neonLineOne);
  building.appendChild(neonLineTwo);
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

  ["status", "category"].forEach((key) => {
    const item = document.createElement("span");
    item.className = "building-label-category";
    item.textContent = project[key];
    label.appendChild(item);
  });

  const title = document.createElement("span");
  title.className = "building-label-title";
  title.textContent = project.title;

  const subtitle = document.createElement("span");
  subtitle.className = "building-label-subtitle";
  subtitle.textContent = project.subtitle;

  label.appendChild(title);
  label.appendChild(subtitle);

  return label;
}

function renderBridgesAndSigns(layer) {
  const bridges = [
    { left: 360, bottom: 120, width: 290 },
    { left: 1160, bottom: 150, width: 360 },
    { left: 1840, bottom: 130, width: 320 }
  ];

  const signs = [
    { left: 710, bottom: 210, text: "UX SECTOR" },
    { left: 1540, bottom: 235, text: "GAME DISTRICT" },
    { left: 2110, bottom: 220, text: "SYSTEM CORE" }
  ];

  bridges.forEach((bridge) => {
    const bridgeElement = document.createElement("span");
    bridgeElement.className = "city-decor-bridge";
    bridgeElement.style.left = `${bridge.left}px`;
    bridgeElement.style.bottom = `${bridge.bottom}px`;
    bridgeElement.style.width = `${bridge.width}px`;
    bridgeElement.setAttribute("aria-hidden", "true");
    layer.appendChild(bridgeElement);
  });

  signs.forEach((sign) => {
    const signElement = document.createElement("span");
    signElement.className = "city-decor-sign";
    signElement.style.left = `${sign.left}px`;
    signElement.style.bottom = `${sign.bottom}px`;
    signElement.textContent = sign.text;
    layer.appendChild(signElement);
  });
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
    dom.cityCameraFrame.classList.add("is-dragging");
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
    dom.cityCameraFrame.classList.remove("is-dragging");
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

  [project.category, project.status, project.building.visualType].forEach((item) => {
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

  const projectsByCategory = PROJECTS.reduce((groups, project) => {
    if (!groups[project.category]) groups[project.category] = [];
    groups[project.category].push(project);
    return groups;
  }, {});

  Object.entries(projectsByCategory).forEach(([category, projects]) => {
    const group = document.createElement("section");
    group.className = "fast-travel-category";

    const heading = document.createElement("h3");
    heading.className = "fast-travel-category-title";
    heading.textContent = category;

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

  if (dom.pingPopup) {
    dom.pingPopup.setAttribute("aria-hidden", String(!state.pingOpen));
  }
}

function closePing() {
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

function normalizeProjectData() {
  PROJECTS.forEach((project) => {
    project.status = project.status || "IN PROGRESS";
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