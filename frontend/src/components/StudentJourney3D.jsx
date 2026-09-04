import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Brain, Award, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StudentJourney3D = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeGate, setActiveGate] = useState(0); // 0: Start, 1: Science, 2: Business, 3: Arts, 4: Success

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#111111");
    scene.fog = new THREE.FogExp2("#111111", 0.015);

    // Camera
    const initialWidth = canvasRef.current.clientWidth;
    const camera = new THREE.PerspectiveCamera(
      initialWidth < 768 ? 75 : 60,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 12);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.shadowMap.enabled = true;

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight("#ffffff", 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("#ffffff", 0.8);
    directionalLight.position.set(5, 15, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Student spotlight
    const spotLight = new THREE.SpotLight("var(--coral)", 8, 30, Math.PI / 4, 0.5, 1);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // --- PROCEDURAL 3D ROAD ---
    const roadWidth = 8;
    const roadLength = 200;
    const roadGeo = new THREE.PlaneGeometry(roadWidth, roadLength, 1, 100);
    const roadMat = new THREE.MeshStandardMaterial({
      color: "#1c1c1c",
      roughness: 0.8,
    });
    const road = new THREE.Mesh(roadGeo, roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, -1, -roadLength / 2 + 10);
    road.receiveShadow = true;
    scene.add(road);

    // Grid Overlay on Road
    const gridHelper = new THREE.GridHelper(200, 50, "#ff5b45", "#333333");
    gridHelper.position.set(0, -0.98, -90);
    scene.add(gridHelper);

    // Side pillars with interactive glowing street lamps
    const pillarGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.5, 8);
    const pillarMat = new THREE.MeshStandardMaterial({ color: "#1a1a1a", metalness: 0.8, roughness: 0.2 });
    const lampGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const lamps = [];

    for (let i = 0; i < 40; i++) {
      const zPos = -i * 5;
      
      // Left pillar group
      const leftGroup = new THREE.Group();
      leftGroup.position.set(-roadWidth / 2 - 0.5, 0.25, zPos);
      const pillarL = new THREE.Mesh(pillarGeo, pillarMat);
      pillarL.position.y = 1.25;
      leftGroup.add(pillarL);
      const lampLMat = new THREE.MeshBasicMaterial({ color: "#222222" });
      const lampL = new THREE.Mesh(lampGeo, lampLMat);
      lampL.position.y = 2.5;
      leftGroup.add(lampL);
      scene.add(leftGroup);
      lamps.push({ mesh: lampL, mat: lampLMat, z: zPos });

      // Right pillar group
      const rightGroup = new THREE.Group();
      rightGroup.position.set(roadWidth / 2 + 0.5, 0.25, zPos);
      const pillarR = new THREE.Mesh(pillarGeo, pillarMat);
      pillarR.position.y = 1.25;
      rightGroup.add(pillarR);
      const lampRMat = new THREE.MeshBasicMaterial({ color: "#222222" });
      const lampR = new THREE.Mesh(lampGeo, lampRMat);
      lampR.position.y = 2.5;
      rightGroup.add(lampR);
      scene.add(rightGroup);
      lamps.push({ mesh: lampR, mat: lampRMat, z: zPos });
    }

    // Side Neon Rails
    const leftNeonGeo = new THREE.BoxGeometry(0.04, 0.04, roadLength);
    const leftNeonMat = new THREE.MeshBasicMaterial({ color: "#ff5b45" });
    const leftNeon = new THREE.Mesh(leftNeonGeo, leftNeonMat);
    leftNeon.position.set(-roadWidth / 2, -0.95, -roadLength / 2 + 10);
    scene.add(leftNeon);

    const rightNeonGeo = new THREE.BoxGeometry(0.04, 0.04, roadLength);
    const rightNeonMat = new THREE.MeshBasicMaterial({ color: "#ff5b45" });
    const rightNeon = new THREE.Mesh(rightNeonGeo, rightNeonMat);
    rightNeon.position.set(roadWidth / 2, -0.95, -roadLength / 2 + 10);
    scene.add(rightNeon);

    // --- ENHANCED HOLOGRAPHIC PORTAL GATES ---
    const createPortalGate = (colorHex, zPos) => {
      const gateGroup = new THREE.Group();
      gateGroup.position.set(0, 1.2, zPos);
      const portalColor = new THREE.Color(colorHex);

      // Outer Torus
      const outerGeo = new THREE.TorusGeometry(2.3, 0.08, 16, 80);
      const outerMat = new THREE.MeshStandardMaterial({
        color: portalColor,
        emissive: portalColor,
        emissiveIntensity: 1.5,
        roughness: 0.1,
        metalness: 0.8
      });
      const outerRing = new THREE.Mesh(outerGeo, outerMat);
      gateGroup.add(outerRing);

      // Inner Torus
      const innerGeo = new THREE.TorusGeometry(1.9, 0.04, 16, 80);
      const innerMat = new THREE.MeshStandardMaterial({
        color: portalColor,
        emissive: portalColor,
        emissiveIntensity: 2.0,
        roughness: 0.1,
        metalness: 0.8
      });
      const innerRing = new THREE.Mesh(innerGeo, innerMat);
      gateGroup.add(innerRing);

      // Shimmering Portal Face
      const faceGeo = new THREE.CircleGeometry(1.85, 32);
      const faceMat = new THREE.MeshBasicMaterial({
        color: portalColor,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const face = new THREE.Mesh(faceGeo, faceMat);
      gateGroup.add(face);

      // Wireframe digital overlay
      const wireMat = new THREE.MeshBasicMaterial({
        color: portalColor,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const wireFace = new THREE.Mesh(faceGeo, wireMat);
      gateGroup.add(wireFace);

      gateGroup.userData = { outerRing, innerRing, face, wireFace, color: portalColor };
      scene.add(gateGroup);
      return gateGroup;
    };

    const portal1 = createPortalGate("#00d2ff", -30);
    const portal2 = createPortalGate("#ff5b45", -70);
    const portal3 = createPortalGate("#c56cf0", -110);
    const portal4 = createPortalGate("#ffb800", -150);

    // --- TEXTURE LOADER FOR REAL PORTRAITURE ---
    const textureLoader = new THREE.TextureLoader();
    const texSchool = textureLoader.load("/school.png");
    const texScience = textureLoader.load("/science.png");
    const texBusiness = textureLoader.load("/business.png");
    const texArts = textureLoader.load("/arts.png");
    const texSuccess = textureLoader.load("/success.png");

    // --- REAL PHOTO BILLBOARDS (SIDEWAYS MILESTONES) ---
    const billboards = [];
    const createImageBillboard = (type, side, zPos, texture, glowColorHex) => {
      const billboardGroup = new THREE.Group();
      const xPos = side * 5.5;
      billboardGroup.position.set(xPos, 0.6, zPos);

      // Pole stand
      const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 8);
      const poleMat = new THREE.MeshStandardMaterial({ color: "#222222", roughness: 0.7, metalness: 0.5 });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = -0.8;
      pole.castShadow = true;
      billboardGroup.add(pole);

      // Frame backing
      const backGeo = new THREE.BoxGeometry(3.0, 2.0, 0.08);
      const backMat = new THREE.MeshStandardMaterial({ color: "#151515", roughness: 0.5, metalness: 0.8 });
      const backMesh = new THREE.Mesh(backGeo, backMat);
      backMesh.castShadow = true;
      backMesh.receiveShadow = true;
      billboardGroup.add(backMesh);

      // Image Plane (real photo)
      const imgGeo = new THREE.PlaneGeometry(2.88, 1.88);
      const imgMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
      const imgMesh = new THREE.Mesh(imgGeo, imgMat);
      imgMesh.position.z = 0.045; // Face forward
      billboardGroup.rotation.y = -side * 0.5; // Rotate slightly towards path center
      billboardGroup.add(imgMesh);

      // Neon glowing outline border
      const borderGeo = new THREE.BoxGeometry(3.06, 2.06, 0.02);
      const glowColor = new THREE.Color(glowColorHex);
      const borderMat = new THREE.MeshBasicMaterial({
        color: glowColor,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      const borderMesh = new THREE.Mesh(borderGeo, borderMat);
      billboardGroup.add(borderMesh);

      scene.add(billboardGroup);
      billboards.push(billboardGroup);
      return billboardGroup;
    };

    // Instantiate billboards along the road (representing actual schools & colleges)
    createImageBillboard("school", -1, 0, texSchool, "#ff5b45");
    createImageBillboard("school", 1, -12, texSchool, "#ff5b45");
    createImageBillboard("science", 1, -22, texScience, "#00d2ff");
    createImageBillboard("science", -1, -42, texScience, "#00d2ff");
    createImageBillboard("business", -1, -58, texBusiness, "#ff5b45");
    createImageBillboard("business", 1, -80, texBusiness, "#ff5b45");
    createImageBillboard("arts", 1, -98, texArts, "#c56cf0");
    createImageBillboard("arts", -1, -120, texArts, "#c56cf0");
    createImageBillboard("success", -1, -142, texSuccess, "#ffb800");
    createImageBillboard("success", 1, -162, texSuccess, "#ffb800");

    // --- FLOATING 3D CAREER CRYSTAL ---
    const studentGroup = new THREE.Group();
    studentGroup.position.set(0, -0.2, 8);
    scene.add(studentGroup);

    const crystalGeo = new THREE.OctahedronGeometry(0.65, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#ff5b45"),
      roughness: 0.05,
      metalness: 0.95,
      emissive: new THREE.Color("#ff5b45"),
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.9
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    crystalMesh.position.y = 1.25;
    studentGroup.add(crystalMesh);

    // Outer orbiting neon ring around the crystal
    const ringGeo = new THREE.TorusGeometry(1.0, 0.03, 8, 36);
    const ringMat = new THREE.MeshBasicMaterial({ color: "#ff5b45", transparent: true, opacity: 0.8 });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.position.y = 1.25;
    orbitRing.rotation.x = Math.PI / 2;
    studentGroup.add(orbitRing);

    studentGroup.userData = { crystalMat, crystalMesh, orbitRing };

    spotLight.target = studentGroup;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 0.5;
    spotLight.shadow.camera.far = 30;
    spotLight.shadow.bias = -0.001;

    // --- GLOBAL DRIFTING DUST PARTICLES ---
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;     // X: -7.5 to 7.5
      positions[i * 3 + 1] = Math.random() * 6 - 0.5;     // Y: -0.5 to 5.5
      positions[i * 3 + 2] = -Math.random() * 200 + 10;   // Z: -190 to 10
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
    // Programmatic soft circle particle texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext("2d");
    const pGrad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    pGrad.addColorStop(0, "rgba(255, 255, 255, 1)");
    pGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 16, 16);
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: "#ff8a7a",
    });
    const starParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(starParticles);

    // --- SCROLL INTERACTION (Z-AXIS FLOW) ---
    const progressObj = { z: 8 };
    let currentCamX = 0;
    let currentCamY = 2.2;
    let currentLookX = 0;
    let currentLookY = 1.2;

    // GSAP ScrollTrigger to pin the section and drive character depth
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=350%", // Long scroll journey
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        // Map 0 -> 1 scroll fraction to depth 8 -> -160 Z
        const targetZ = 8 - self.progress * 168;
        gsap.to(progressObj, {
          z: targetZ,
          duration: 0.1,
          overwrite: "auto",
        });

        // Determine active gate overlay card
        const currentZ = progressObj.z;
        if (currentZ > -15) {
          setActiveGate(0); // Intro
        } else if (currentZ <= -15 && currentZ > -50) {
          setActiveGate(1); // Science
        } else if (currentZ <= -50 && currentZ > -90) {
          setActiveGate(2); // Business
        } else if (currentZ <= -90 && currentZ > -130) {
          setActiveGate(3); // Arts
        } else {
          setActiveGate(4); // Success Destination
        }
      }
    });

    // --- ANIMATION LOOP ---
    let clock = new THREE.Clock();
    let reqId;
    let walkPhase = 0;
    let walkWeight = 0;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Lerp character Z position for visual fluidity
      const prevZ = studentGroup.position.z;
      studentGroup.position.z += (progressObj.z - studentGroup.position.z) * 0.08;
      
      const deltaZ = studentGroup.position.z - prevZ;
      const speed = Math.abs(deltaZ);

      // Lock walk cycle phase to actual movement speed and direction
      if (speed > 0.0001) {
        walkPhase -= deltaZ * 4.5;
      }

      // Smoothly interpolate walking weight (blend pose between idle and walking)
      const targetWeight = speed > 0.002 ? 1.0 : 0.0;
      walkWeight += (targetWeight - walkWeight) * 0.15;

      const elapsed = clock.getElapsedTime();

      // Color lerping based on student position (declared once per frame)
      const currentZ = studentGroup.position.z;
      const targetColor = new THREE.Color("#ff5b45");
      if (currentZ > -15) {
        targetColor.set("#ff5b45"); // Intro
      } else if (currentZ <= -15 && currentZ > -50) {
        targetColor.set("#00d2ff"); // Science
      } else if (currentZ <= -50 && currentZ > -90) {
        targetColor.set("#ff5b45"); // Business
      } else if (currentZ <= -90 && currentZ > -130) {
        targetColor.set("#c56cf0"); // Arts
      } else {
        targetColor.set("#ffb800"); // Success
      }

      // 1. Crystal Bobbing, Orbiting Ring Rotation & Emissive Intensity Pulse
      if (studentGroup.userData.crystalMesh) {
        studentGroup.userData.crystalMesh.rotation.y += 0.015;
        studentGroup.userData.crystalMesh.rotation.x += 0.008;
        studentGroup.userData.crystalMesh.position.y = 1.25 + Math.sin(elapsed * 2.5) * 0.08;
      }
      if (studentGroup.userData.orbitRing) {
        studentGroup.userData.orbitRing.rotation.z -= 0.01;
        studentGroup.userData.orbitRing.rotation.y = Math.sin(elapsed * 0.5) * 0.2;
        studentGroup.userData.orbitRing.position.y = 1.25 + Math.sin(elapsed * 2.5) * 0.08;
      }
      if (studentGroup.userData.crystalMat) {
        studentGroup.userData.crystalMat.color.lerp(targetColor, 0.08);
        studentGroup.userData.crystalMat.emissive.lerp(targetColor, 0.08);
        studentGroup.userData.crystalMat.emissiveIntensity = 0.5 + Math.sin(elapsed * 3) * 0.15;
      }

      // Rotate portal hologram rings
      [portal1, portal2, portal3, portal4].forEach((portal) => {
        const { outerRing, innerRing, face, wireFace } = portal.userData;
        outerRing.rotation.z += 0.005;
        innerRing.rotation.z -= 0.012;
        innerRing.rotation.y = Math.sin(elapsed * 0.5) * 0.15;
        const pulse = 1 + Math.sin(elapsed * 4) * 0.03;
        face.scale.set(pulse, pulse, pulse);
        wireFace.scale.set(pulse, pulse, pulse);
        wireFace.rotation.z -= 0.003;
      });

      // Animate star particles to drift backwards
      const posArr = starParticles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 2] += 0.03 + speed * 0.35;
        if (posArr[i * 3 + 2] > camera.position.z) {
          posArr[i * 3 + 2] = camera.position.z - 200;
          posArr[i * 3] = (Math.random() - 0.5) * 15;
          posArr[i * 3 + 1] = Math.random() * 6 - 0.5;
        }
      }
      starParticles.geometry.attributes.position.needsUpdate = true;

      // Smoothly lerp lights, fog, particles, and neon lines
      spotLight.color.lerp(targetColor, 0.05);
      leftNeonMat.color.lerp(targetColor, 0.05);
      rightNeonMat.color.lerp(targetColor, 0.05);
      particleMat.color.lerp(targetColor, 0.05);
      scene.fog.color.lerp(new THREE.Color("#111111"), 0.05);
      renderer.setClearColor(scene.fog.color);

      // Light up street lamps dynamically as student approaches/passes them
      lamps.forEach((lamp) => {
        if (studentGroup.position.z <= lamp.z + 15) {
          let lampColor = new THREE.Color();
          if (lamp.z > -20) lampColor.set("#ff5b45");
          else if (lamp.z <= -20 && lamp.z > -50) lampColor.set("#00d2ff");
          else if (lamp.z <= -50 && lamp.z > -90) lampColor.set("#ff5b45");
          else if (lamp.z <= -90 && lamp.z > -130) lampColor.set("#c56cf0");
          else lampColor.set("#ffb800");
          
          lamp.mat.color.lerp(lampColor, 0.08);
        } else {
          lamp.mat.color.lerp(new THREE.Color("#222222"), 0.08);
        }
      });

      // Animate billboards bobbing
      billboards.forEach((b, index) => {
        b.position.y = 0.6 + Math.sin(elapsed * 2 + index) * 0.08;
      });

      // Dynamic camera panning and look-at based on current Z position
      const isMobile = window.innerWidth < 768;
      let targetCameraX = 0;
      let targetCameraY = isMobile ? 2.8 : 2.2;
      let targetLookAtX = 0;
      let targetLookAtY = 1.2;

      if (currentZ > -10) {
        // Intro
        targetCameraX = 0;
        targetCameraY = isMobile ? 2.8 : 2.2;
        targetLookAtX = 0;
      } else if (currentZ <= -10 && currentZ > -30) {
        // High School (-15, left)
        targetCameraX = isMobile ? 1.0 : 1.8;
        targetCameraY = isMobile ? 2.6 : 2.0;
        targetLookAtX = -1.5;
      } else if (currentZ <= -30 && currentZ > -65) {
        // Science College (-45, right)
        targetCameraX = isMobile ? -1.0 : -1.8;
        targetCameraY = isMobile ? 2.6 : 2.0;
        targetLookAtX = 1.5;
      } else if (currentZ <= -65 && currentZ > -100) {
        // Business School (-80, left)
        targetCameraX = isMobile ? 1.0 : 1.8;
        targetCameraY = isMobile ? 2.6 : 2.0;
        targetLookAtX = -1.5;
      } else if (currentZ <= -100 && currentZ > -140) {
        // Arts Academy (-120, right)
        targetCameraX = isMobile ? -1.0 : -1.8;
        targetCameraY = isMobile ? 2.6 : 2.0;
        targetLookAtX = 1.5;
      } else {
        // Success Office (-160, center)
        targetCameraX = 0;
        targetCameraY = isMobile ? 3.2 : 2.6;
        targetLookAtX = 0;
        targetLookAtY = 1.8;
      }

      currentCamX += (targetCameraX - currentCamX) * 0.05;
      currentCamY += (targetCameraY - currentCamY) * 0.05;
      currentLookX += (targetLookAtX - currentLookX) * 0.05;
      currentLookY += (targetLookAtY - currentLookY) * 0.05;

      const cameraDist = isMobile ? 7.5 : 5.8;
      camera.position.x = currentCamX;
      camera.position.y = studentGroup.position.y + currentCamY;
      camera.position.z = studentGroup.position.z + cameraDist;
      camera.lookAt(currentLookX, studentGroup.position.y + currentLookY, studentGroup.position.z - 3);

      // Spotlight placement
      spotLight.position.set(studentGroup.position.x, studentGroup.position.y + (isMobile ? 7 : 6), studentGroup.position.z + 2);

      renderer.render(scene, camera);
    };

    animate();

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      camera.aspect = width / height;
      camera.fov = width < 768 ? 75 : 60;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      scrollTriggerInstance.kill();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#111111] overflow-hidden select-none">
      
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Floating Holographic Narrative Overlays (HTML HUD) */}
      <div className="absolute inset-0 pointer-events-none flex items-end md:items-center justify-center md:justify-start px-4 md:px-16 lg:px-24 pb-8 md:pb-0 z-20">
        <div className="w-full max-w-[420px] bg-black/60 backdrop-blur-md border border-white/10 p-5 md:p-8 rounded-2xl text-white pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 transform translate-y-0">
          
          {activeGate === 0 && (
            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-mono tracking-[4px] text-[var(--coral)] uppercase font-semibold">
                Section 01 / The Road Begins
              </span>
              <h3 className="font-display text-3xl font-light leading-tight">
                Rohan's <span className="italic text-[var(--coral)]">Class 12</span> Graduation
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                The school year closes, and Rohan faces the open road of higher education. Scrolling forward guides him through stream selections and counselor milestones.
              </p>
              <div className="text-[10px] font-mono text-stone-500 animate-pulse mt-2">
                SCROLL DOWN TO WALK FORWARD ↓
              </div>
            </div>
          )}

          {activeGate === 1 && (
            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-mono tracking-[4px] text-[#00d2ff] uppercase font-semibold">
                Section 02 / Stream Gate A
              </span>
              <div className="w-10 h-10 bg-[#00d2ff]/10 rounded-xl flex items-center justify-center text-[#00d2ff] border border-[#00d2ff]/20">
                <Brain size={20} />
              </div>
              <h3 className="font-display text-3xl font-light leading-tight">
                Science & <span className="italic text-[#00d2ff]">Technological Alignment</span>
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Evaluating engineering targets (JEE vs SAT), biological fields, and specialized fields (Marine Engineering at TNU, Bio-tech at SRM, CSE at IEM).
              </p>
            </div>
          )}

          {activeGate === 2 && (
            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-mono tracking-[4px] text-[var(--coral)] uppercase font-semibold">
                Section 03 / Stream Gate B
              </span>
              <div className="w-10 h-10 bg-[var(--coral)]/10 rounded-xl flex items-center justify-center text-[var(--coral)] border border-[var(--coral)]/20">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display text-3xl font-light leading-tight">
                Global Business & <span className="italic text-[var(--coral)]">Commerce</span>
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Aligning placement pathways for MBA/BBA global marketing, management structures, and hospital planning (EIILM, UWSB, BP Poddar).
              </p>
            </div>
          )}

          {activeGate === 3 && (
            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-mono tracking-[4px] text-[#c56cf0] uppercase font-semibold">
                Section 04 / Stream Gate C
              </span>
              <div className="w-10 h-10 bg-[#c56cf0]/10 rounded-xl flex items-center justify-center text-[#c56cf0] border border-[#c56cf0]/20">
                <Award size={20} />
              </div>
              <h3 className="font-display text-3xl font-light leading-tight">
                Liberal Arts & <span className="italic text-[#c56cf0]">Creative Design</span>
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Harnessing media arts, film, communication design, and lateral thinking at George College, ECMT, and Adamas University.
              </p>
            </div>
          )}

          {activeGate === 4 && (
            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-mono tracking-[4px] text-[#ffb800] uppercase font-semibold">
                Section 05 / The Destination
              </span>
              <div className="w-10 h-10 bg-[#ffb800]/10 rounded-xl flex items-center justify-center text-[#ffb800] border border-[#ffb800]/20">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display text-3xl font-light leading-tight">
                Perfect <span className="italic text-[#ffb800]">Secure Admission</span>
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Rohan secures tier-one admissions under professional A & J mentorship. Scientific guidance bridges talent directly with industry requirements.
              </p>
              <a 
                href="#quiz" 
                className="mt-2 text-center py-3 bg-[#ffb800] hover:bg-white hover:text-black transition-colors duration-300 text-xs font-semibold text-black uppercase tracking-wider rounded-xl"
              >
                Map My Career Path
              </a>
            </div>
          )}

        </div>
      </div>

      {/* Side HUD Instructions */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 items-center pointer-events-none z-20">
        <div className="h-24 w-[1px] bg-white/20 relative">
          <div 
            className="absolute top-0 left-0 w-full bg-[var(--coral)] transition-all duration-200" 
            style={{ height: `${(activeGate / 4) * 100}%` }}
          />
        </div>
        <span className="text-[9px] font-mono text-white/55 uppercase tracking-widest vertical-text writing-mode-vertical">
          JOURNEY DEPTH
        </span>
      </div>

    </div>
  );
};

export default StudentJourney3D;
