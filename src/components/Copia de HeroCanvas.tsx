import { useEffect, useRef } from "react";
import * as THREE from "three";

const prefersReduced = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const HeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    const container = containerRef.current!;
    const width = container.clientWidth;
    const height = Math.min(560, Math.max(360, container.clientHeight));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000");
    scene.background = null; // allow transparent to blend with page

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

    // Signature object: wireframe torus knot with subtle particles
    const knotGeom = new THREE.TorusKnotGeometry(1.2, 0.32, 220, 40);
    const ink = new THREE.Color("hsl(222,28%,12%)");
    const mat = new THREE.MeshStandardMaterial({
      color: ink,
      roughness: 0.35,
      metalness: 0.1,
    });
    const mesh = new THREE.Mesh(knotGeom, mat);
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    scene.add(mesh);

    // Wireframe overlay
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(knotGeom),
      new THREE.LineBasicMaterial({ color: new THREE.Color("hsl(205,75%,46%)"), transparent: true, opacity: 0.35 })
    );
    scene.add(wire);

    // Particle ring
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
      new THREE.PointsMaterial({ size: 0.02, color: new THREE.Color("hsl(222,10%,35%)"), transparent: true, opacity: 0.7 })
    );
    scene.add(points);

    let raf = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * Math.PI * 0.15;
      targetY = y * Math.PI * 0.15;
    };
    container.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!prefersReduced()) {
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.004;
        wire.rotation.copy(mesh.rotation);
      }
      // slight parallax
      mesh.rotation.x += (targetY - mesh.rotation.x) * 0.02;
      mesh.rotation.y += (targetX - mesh.rotation.y) * 0.02;
      points.rotation.y -= 0.0015;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth;
      const h = Math.min(560, Math.max(360, container.clientHeight));
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      knotGeom.dispose();
      particles.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[420px] md:h-[520px]" />;
};

export default HeroCanvas;