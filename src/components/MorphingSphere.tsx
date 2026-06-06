"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Layered trig noise → smooth organic displacement
function displace(nx: number, ny: number, nz: number, t: number): number {
  return (
    Math.sin(nx * 2.1 + t * 0.9) * Math.cos(ny * 2.6 + t * 0.7) +
    Math.cos(nz * 1.8 + t * 1.1) * Math.sin(nx * 1.1 + t * 0.5) +
    Math.sin(ny * 2.0 * 0.7 + nz * 1.8 * 0.5 + t * 1.3)
  ) / 3;
}

export default function MorphingSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const width = container.clientWidth;
    const height = Math.min(560, Math.max(360, container.clientHeight || 420));

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dir = new THREE.DirectionalLight(0xffffff, 0.7);
    dir.position.set(3, 5, 5);
    scene.add(dir);
    // Blue accent point for depth
    const blue = new THREE.PointLight(new THREE.Color("hsl(205,75%,46%)"), 2.5, 12);
    blue.position.set(-3, 2, 2);
    scene.add(blue);

    // High-poly sphere — shared by both solid mesh and wireframe
    const geom = new THREE.SphereGeometry(1.3, 96, 96);
    const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;

    // Store unit-sphere normals (used as stable noise inputs)
    const count = posAttr.count;
    const origins = new Float32Array(count * 3);
    const radii = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);
      const r = Math.sqrt(x * x + y * y + z * z);
      radii[i] = r;
      origins[i * 3]     = x / r;
      origins[i * 3 + 1] = y / r;
      origins[i * 3 + 2] = z / r;
    }

    // Solid mesh
    const mesh = new THREE.Mesh(
      geom,
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("hsl(222,28%,12%)"),
        roughness: 0.38,
        metalness: 0.12,
        emissive: new THREE.Color("hsl(205,60%,6%)"),
      })
    );
    scene.add(mesh);

    // Wireframe shares the same geometry — auto-updates when vertices change
    const wire = new THREE.Mesh(
      geom,
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("hsl(205,75%,46%)"),
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      })
    );
    scene.add(wire);

    // Orbital particle dust
    const PARTICLES = 480;
    const pGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(PARTICLES * 3);
    const angles  = new Float32Array(PARTICLES);
    const pRadii  = new Float32Array(PARTICLES);
    const pPhase  = new Float32Array(PARTICLES);
    for (let i = 0; i < PARTICLES; i++) {
      angles[i]  = Math.random() * Math.PI * 2;
      pRadii[i]  = 1.9 + Math.random() * 0.7;
      pPhase[i]  = Math.random() * Math.PI * 2;
    }
    pGeom.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const particles = new THREE.Points(
      pGeom,
      new THREE.PointsMaterial({
        size: 0.016,
        color: new THREE.Color("hsl(205,75%,65%)"),
        transparent: true,
        opacity: 0.45,
      })
    );
    scene.add(particles);

    let raf = 0;
    let t = 0;
    let targetX = 0, targetY = 0;
    let lerpX = 0, lerpY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width  - 0.5) * Math.PI * 0.22;
      targetY = ((e.clientY - rect.top)  / rect.height - 0.5) * Math.PI * 0.22;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];
      targetX = ((touch.clientX - rect.left) / rect.width  - 0.5) * Math.PI * 0.22;
      targetY = ((touch.clientY - rect.top)  / rect.height - 0.5) * Math.PI * 0.22;
    };
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove, { passive: true });

    const MORPH_AMP = 0.2;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const reduced = prefersReduced();

      if (!reduced) t += 0.007;

      // Morph vertices
      for (let i = 0; i < count; i++) {
        const nx = origins[i * 3];
        const ny = origins[i * 3 + 1];
        const nz = origins[i * 3 + 2];
        const d = displace(nx, ny, nz, t) * MORPH_AMP;
        const r = radii[i] + d;
        posAttr.setXYZ(i, nx * r, ny * r, nz * r);
      }
      posAttr.needsUpdate = true;
      geom.computeVertexNormals();

      // Smooth mouse tilt — both meshes share same rotation
      lerpX += (targetY - lerpX) * 0.045;
      lerpY += (targetX - lerpY) * 0.045;
      mesh.rotation.x = lerpX;
      mesh.rotation.y = lerpY;
      wire.rotation.copy(mesh.rotation);

      // Orbit particles
      const pAttr = pGeom.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLES; i++) {
        if (!reduced) angles[i] += 0.0006 + (i % 4) * 0.00015;
        pAttr.setXYZ(
          i,
          Math.cos(angles[i]) * pRadii[i],
          Math.sin(pPhase[i] + t * 0.25 + i * 0.04) * 0.55,
          Math.sin(angles[i]) * pRadii[i]
        );
      }
      pAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth;
      const h = Math.min(560, Math.max(360, container.clientHeight || 420));
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
      renderer.dispose();
      geom.dispose();
      pGeom.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full mobile:h-112 mobile:w-full bg-transparent"
    />
  );
}
