import { useEffect, useRef } from "react";
import * as THREE from "three";

const prefersReduced = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const HeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    const container = containerRef.current!;
    const width = container.clientWidth;
    // ✅ enforce a safe default height for mobile
    const height = Math.min(560, Math.max(360, container.clientHeight || 420));

    const scene = new THREE.Scene();
    scene.background = null; // transparent

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(2, 3, 4);
    scene.add(dir);

    // Torus knot
    const knotGeom = new THREE.TorusKnotGeometry(1.2, 0.32, 220, 40);
    const ink = new THREE.Color("hsl(222,28%,12%)");
    const mat = new THREE.MeshStandardMaterial({
      color: ink,
      roughness: 0.35,
      metalness: 0.1,
    });
    const mesh = new THREE.Mesh(knotGeom, mat);
    scene.add(mesh);

    // Wireframe
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(knotGeom),
      new THREE.LineBasicMaterial({
        color: new THREE.Color("hsl(205,75%,46%)"),
        transparent: true,
        opacity: 0.35,
      })
    );
    scene.add(wire);

    // Particles
    const particles = new THREE.BufferGeometry();
    const COUNT = 600;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const angle = (i / COUNT) * Math.PI * 2;
      const radius = 2.3 + Math.sin(i * 0.25) * 0.15;
      positions[i * 3 + 0] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(
      particles,
      new THREE.PointsMaterial({
        size: 0.02,
        color: new THREE.Color("hsl(222,10%,35%)"),
        transparent: true,
        opacity: 0.7,
      })
    );
    scene.add(points);

    // Interaction targets
    let raf = 0;
    let targetX = 0;
    let targetY = 0;

    const updateTarget = (x: number, y: number) => {
      targetX = x * Math.PI * 0.15;
      targetY = y * Math.PI * 0.15;
    };

    // ✅ Mouse
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      updateTarget(x, y);
    };
    container.addEventListener("mousemove", onMouseMove);

    // ✅ Touch
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];
      const x = (touch.clientX - rect.left) / rect.width - 0.5;
      const y = (touch.clientY - rect.top) / rect.height - 0.5;
      updateTarget(x, y);
    };
    container.addEventListener("touchmove", onTouchMove);

    // Animation loop
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!prefersReduced()) {
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.004;
        wire.rotation.copy(mesh.rotation);
      }
      mesh.rotation.x += (targetY - mesh.rotation.x) * 0.02;
      mesh.rotation.y += (targetX - mesh.rotation.y) * 0.02;
      points.rotation.y -= 0.0015;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
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
      container.removeChild(renderer.domElement);
      knotGeom.dispose();
      particles.dispose();
    };
  }, []);

  // ✅ Responsive Tailwind sizing
  return (
    <div
      ref={containerRef}
      className="w-full mobile:h-112 mobile:w-full bg-transparent"
    />
  );
};

export default HeroCanvas;
