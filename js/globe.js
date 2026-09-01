/* 
 * Exact 3D Interactive Globe matching Figma Desktop Component
 * Built using d3-geo and TopoJSON world-atlas
 * Features DAD Group MENA Teal Overlay, Animated Pulse HQ Pins, and Smooth Auto/Drag-Rotation
 */

const MENA_IDS = new Set([
  12,  // Algeria
  434, // Libya
  788, // Tunisia
  504, // Morocco
  818, // Egypt
  729, // Sudan
  760, // Syria
  422, // Lebanon
  368, // Iraq
  400, // Jordan
  682, // Saudi Arabia
  784, // UAE
  414, // Kuwait
  634, // Qatar
  48,  // Bahrain
  512, // Oman
  887, // Yemen
  376, // Israel
  275  // Palestine
]);

const OFFICES = [
  {
    id: "jordan",
    name: "Jordan (HQ)",
    label: "Primary Manufacturing & Offices",
    lat: 31.95,
    lon: 35.93
  },
  {
    id: "algeria",
    name: "Algeria Office",
    label: "Regional Production Facility",
    lat: 36.75,
    lon: 3.06
  }
];

const MARKETS = [
  { name: "Saudi Arabia", lat: 23.89, lon: 45.08 },
  { name: "Egypt", lat: 26.82, lon: 30.8 },
  { name: "Lebanon", lat: 33.89, lon: 35.5 },
  { name: "Iraq", lat: 33.22, lon: 43.68 },
  { name: "UAE", lat: 24.47, lon: 54.37 },
  { name: "Libya", lat: 26.34, lon: 17.23 },
  { name: "Morocco", lat: 31.79, lon: -7.09 },
  { name: "Tunisia", lat: 33.89, lon: 9.54 },
  { name: "Sudan", lat: 12.86, lon: 30.22 },
  { name: "Syria", lat: 34.8, lon: 38.99 },
  { name: "Kuwait", lat: 29.31, lon: 47.48 },
  { name: "Qatar", lat: 25.35, lon: 51.18 }
];

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('globeCanvas');
  const container = canvas?.parentElement;
  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d');
  
  let size = 532;
  let dpr = window.devicePixelRatio || 1;
  let radius = size * 0.42;
  let cx = size / 2;
  let cy = size / 2;

  function updateDimensions() {
    const rect = container.getBoundingClientRect();
    const availableWidth = rect.width || (window.innerWidth - 36);
    size = Math.min(532, Math.max(280, Math.floor(availableWidth)));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    radius = size * 0.42;
    cx = size / 2;
    cy = size / 2;
  }

  updateDimensions();
  window.addEventListener('resize', updateDimensions);

  canvas.style.touchAction = 'none';

  let rotation = [-28, -22, 0];
  let isDragging = false;
  let dragStart = null;
  let autoRotate = true;
  let resumeTimer = null;
  let worldData = null;

  // Create Tooltip DOM Element
  let tooltipEl = document.getElementById('globeTooltip');
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'globeTooltip';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.zIndex = '20';
    tooltipEl.style.opacity = '0';
    tooltipEl.style.transform = 'translate(-50%, calc(-100% - 14px))';
    tooltipEl.style.transition = 'opacity 0.15s ease';
    container.style.position = 'relative';
    container.appendChild(tooltipEl);
  }

  // Load World Atlas TopoJSON
  function initWorldData() {
    if (typeof topojson !== 'undefined' && typeof d3 !== 'undefined') {
      fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        .then(r => r.json())
        .then(world => {
          const countries = topojson.feature(world, world.objects.countries);
          const borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);
          worldData = { countries, borders };
        })
        .catch(() => {
          console.warn("Using offline fallback for globe vector rendering.");
        });
    }
  }

  // Check if D3 is ready
  function checkLibraries() {
    if (typeof d3 !== 'undefined' && typeof topojson !== 'undefined') {
      initWorldData();
    } else {
      setTimeout(checkLibraries, 100);
    }
  }
  checkLibraries();

  function geoDist(p1, p2) {
    const deg2rad = Math.PI / 180;
    const phi1 = p1[1] * deg2rad, lambda1 = p1[0] * deg2rad;
    const phi2 = p2[1] * deg2rad, lambda2 = p2[0] * deg2rad;
    const dlambda = lambda2 - lambda1;
    return Math.acos(Math.sin(phi1) * Math.sin(phi2) + Math.cos(phi1) * Math.cos(phi2) * Math.cos(dlambda));
  }

  function render(ts) {
    // Smooth slow rotation alone
    if (autoRotate && !isDragging) {
      rotation[0] -= 0.06;
    }

    ctx.clearRect(0, 0, size, size);

    if (typeof d3 !== 'undefined' && d3.geoOrthographic) {
      const proj = d3.geoOrthographic()
        .scale(radius)
        .translate([cx, cy])
        .clipAngle(90)
        .rotate(rotation);

      const pathGen = d3.geoPath(proj, ctx);
      const graticule = d3.geoGraticule ? d3.geoGraticule()() : null;

      // 1. Drop shadow
      ctx.save();
      ctx.shadowColor = "rgba(13, 33, 55, 0.18)";
      ctx.shadowBlur = Math.round(size * 0.075);
      ctx.shadowOffsetX = 8;
      ctx.shadowOffsetY = 14;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
      ctx.restore();

      // 2. White ocean
      ctx.beginPath();
      pathGen({ type: "Sphere" });
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();

      // 3. Countries rendering
      if (worldData) {
        const feats = worldData.countries.features;

        // Gray continents (non-MENA)
        feats.forEach(f => {
          if (!MENA_IDS.has(+f.id)) {
            ctx.beginPath();
            pathGen(f);
            ctx.fillStyle = "#E2E8F0";
            ctx.fill();
          }
        });

        // MENA base color
        feats.forEach(f => {
          if (MENA_IDS.has(+f.id)) {
            ctx.beginPath();
            pathGen(f);
            ctx.fillStyle = "#E2E8F0";
            ctx.fill();
          }
        });

        // MENA teal overlay at 30% opacity
        feats.forEach(f => {
          if (MENA_IDS.has(+f.id)) {
            ctx.beginPath();
            pathGen(f);
            ctx.fillStyle = "rgba(0, 153, 122, 0.30)";
            ctx.fill();
          }
        });

        // Graticule
        if (graticule) {
          ctx.beginPath();
          pathGen(graticule);
          ctx.strokeStyle = "rgba(203, 213, 225, 0.38)";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Internal borders
        if (worldData.borders) {
          ctx.beginPath();
          pathGen(worldData.borders);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Sphere edge border
      ctx.beginPath();
      pathGen({ type: "Sphere" });
      ctx.strokeStyle = "rgba(203, 213, 225, 0.65)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const front = [-rotation[0], -rotation[1]];

      // Market presence dots
      MARKETS.forEach(m => {
        if (geoDist([m.lon, m.lat], front) < Math.PI / 2 - 0.08) {
          const pt = proj([m.lon, m.lat]);
          if (!pt) return;
          ctx.beginPath();
          ctx.arc(pt[0], pt[1], Math.max(2.5, size * 0.0065), 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 153, 122, 0.8)";
          ctx.fill();
        }
      });

      // Office pins with pulse animation
      OFFICES.forEach(o => {
        if (geoDist([o.lon, o.lat], front) < Math.PI / 2 - 0.08) {
          const pt = proj([o.lon, o.lat]);
          if (!pt) return;
          const [px, py] = pt;
          const pulse = (Math.sin(ts / 900) + 1) / 2;

          const basePinRadius = Math.max(5, size * 0.013);

          // Outer pulse ring
          ctx.beginPath();
          ctx.arc(px, py, basePinRadius * 1.6 + pulse * 8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 153, 122, ${0.28 - pulse * 0.2})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Static inner ring
          ctx.beginPath();
          ctx.arc(px, py, basePinRadius * 1.6, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(0, 153, 122, 0.32)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // Pin body
          ctx.beginPath();
          ctx.arc(px, py, basePinRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#00997A";
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Center dot
          ctx.beginPath();
          ctx.arc(px, py, basePinRadius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
        }
      });

      // Subtle top-left sphere highlight
      const hlGrad = ctx.createRadialGradient(cx - radius * 0.38, cy - radius * 0.38, 0, cx, cy, radius);
      hlGrad.addColorStop(0, "rgba(255,255,255,0.18)");
      hlGrad.addColorStop(0.55, "rgba(255,255,255,0.04)");
      hlGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = hlGrad;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  // Unified Drag Handlers for Mouse, Stylus, and Finger Touch
  function handleDragStart(clientX, clientY) {
    dragStart = {
      x: clientX,
      y: clientY,
      startRot: [...rotation]
    };
    autoRotate = false;
    if (resumeTimer) clearTimeout(resumeTimer);
    isDragging = true;
    canvas.style.cursor = 'grabbing';

    const dragCue = document.getElementById('globeDragCue');
    if (dragCue) {
      dragCue.style.opacity = '0';
    }
  }

  function handleDragMove(clientX, clientY) {
    if (!dragStart) return;
    const dx = clientX - dragStart.x;
    const dy = clientY - dragStart.y;
    rotation = [
      dragStart.startRot[0] + dx * 0.38,
      Math.max(-85, Math.min(85, dragStart.startRot[1] - dy * 0.38)),
      dragStart.startRot[2]
    ];
  }

  function handleDragEnd() {
    dragStart = null;
    isDragging = false;
    canvas.style.cursor = 'grab';
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      autoRotate = true;
    }, 2200);
  }

  // Pointer Events (Desktop & Modern Touch Devices)
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    handleDragStart(e.clientX, e.clientY);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (dragStart) {
      handleDragMove(e.clientX, e.clientY);
      return;
    }

    // Hover detection for tooltip on desktop
    if (typeof d3 !== 'undefined' && d3.geoOrthographic) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const proj = d3.geoOrthographic()
        .scale(radius)
        .translate([cx, cy])
        .clipAngle(90)
        .rotate(rotation);

      const front = [-rotation[0], -rotation[1]];
      let found = null;

      for (const o of OFFICES) {
        if (geoDist([o.lon, o.lat], front) < Math.PI / 2 - 0.08) {
          const pt = proj([o.lon, o.lat]);
          if (!pt) continue;
          if (Math.hypot(mx - pt[0], my - pt[1]) < 22) {
            found = { x: pt[0], y: pt[1], name: o.name, label: o.label };
            break;
          }
        }
      }

      if (found) {
        tooltipEl.style.opacity = '1';
        tooltipEl.style.left = `${found.x}px`;
        tooltipEl.style.top = `${found.y}px`;
        tooltipEl.innerHTML = `
          <div style="background: #0D2137; color: #FFFFFF; border-radius: 12px; box-shadow: 0 20px 35px rgba(0,0,0,0.3); padding: 10px 16px; white-space: nowrap;">
            <div style="font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600; line-height: 1.3;">${found.name}</div>
            <div style="font-family: 'Inter', sans-serif; font-size: 11px; color: rgba(255,255,255,0.65); margin-top: 2px;">${found.label}</div>
          </div>
          <div style="position: absolute; left: 50%; transform: translateX(-50%); bottom: 0; transform: translateY(100%) translateX(-50%); width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #0D2137;"></div>
        `;
      } else {
        tooltipEl.style.opacity = '0';
      }
    }
  });

  canvas.addEventListener('pointerup', handleDragEnd);
  canvas.addEventListener('pointerleave', handleDragEnd);
  canvas.addEventListener('pointercancel', handleDragEnd);

  // Direct Mobile Touch Listeners with active preventDefault for iOS/Android Safari & Chrome
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      e.preventDefault();
      handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length === 1 && dragStart) {
      e.preventDefault();
      handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: false });

  canvas.addEventListener('touchend', (e) => {
    handleDragEnd();
  }, { passive: false });

  canvas.addEventListener('touchcancel', (e) => {
    handleDragEnd();
  }, { passive: false });
});
