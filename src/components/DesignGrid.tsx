"use client";
import { useEffect, useRef } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Layered noise for organic wave displacement
function wave(bx: number, by: number, t: number): [number, number] {
  const s = Math.sin(bx * 0.013 + t) * Math.cos(by * 0.011 + t * 0.73);
  const c = Math.cos(bx * 0.009 + by * 0.013 + t * 1.2);
  return [s * 10, c * 10 + Math.sin(t * 0.6 + bx * 0.008) * 6];
}

export default function DesignGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let W = 0, H = 0;
    let COLS = 0, ROWS = 0;

    // Grid state
    type Pt = { bx: number; by: number; x: number; y: number };
    let pts: Pt[] = [];

    const build = () => {
      W = container.clientWidth;
      H = Math.min(560, Math.max(360, container.clientHeight || 420));
      canvas.width = W;
      canvas.height = H;

      // Dense enough to look like a real system, sparse enough to breathe
      COLS = Math.round(W / 52);
      ROWS = Math.round(H / 52);

      pts = [];
      const cellW = W / (COLS - 1);
      const cellH = H / (ROWS - 1);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          pts.push({ bx: c * cellW, by: r * cellH, x: c * cellW, y: r * cellH });
        }
      }
    };
    build();

    // Mouse state
    let mx = -9999, my = -9999;
    let lmx = -9999, lmy = -9999; // lerped mouse

    const onMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onMouseLeave = () => { mx = -9999; my = -9999; };
    const onTouchMove = (e: TouchEvent) => {
      const r = container.getBoundingClientRect();
      mx = e.touches[0].clientX - r.left;
      my = e.touches[0].clientY - r.top;
    };
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchmove", onTouchMove, { passive: true });

    let t = 0;
    let raf = 0;
    const PUSH = 80;       // repulsion distance
    const PUSH_STR = 65;   // repulsion force

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!prefersReduced()) t += 0.012;

      // Smooth mouse lag — makes the field feel heavy and intentional
      lmx += (mx - lmx) * 0.1;
      lmy += (my - lmy) * 0.1;

      ctx.clearRect(0, 0, W, H);

      // Update point positions
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const [wx, wy] = wave(p.bx, p.by, t);
        let nx = p.bx + wx;
        let ny = p.by + wy;

        // Repulsion from cursor
        const dx = nx - lmx;
        const dy = ny - lmy;
        const d2 = dx * dx + dy * dy;
        if (d2 < PUSH * PUSH && d2 > 0) {
          const d = Math.sqrt(d2);
          const force = (1 - d / PUSH) * PUSH_STR;
          nx += (dx / d) * force;
          ny += (dy / d) * force;
        }

        p.x = nx;
        p.y = ny;
      }

      // Draw grid edges (only to right neighbor and bottom neighbor → O(n))
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          const p = pts[i];

          // Proximity to cursor for this point
          const pxd = p.x - lmx, pyd = p.y - lmy;
          const prox = Math.max(0, 1 - Math.sqrt(pxd * pxd + pyd * pyd) / (PUSH * 2.2));

          // Right neighbor
          if (c < COLS - 1) {
            const q = pts[i + 1];
            const qxd = q.x - lmx, qyd = q.y - lmy;
            const qprox = Math.max(0, 1 - Math.sqrt(qxd * qxd + qyd * qyd) / (PUSH * 2.2));
            const lineProx = Math.max(prox, qprox);
            const alpha = 0.08 + lineProx * 0.55;
            const lum = 38 + lineProx * 38;
            const sat = 50 + lineProx * 25;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(205,${sat}%,${lum}%,${alpha})`;
            ctx.lineWidth = 0.5 + lineProx * 1.0;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }

          // Bottom neighbor
          if (r < ROWS - 1) {
            const q = pts[i + COLS];
            const qxd = q.x - lmx, qyd = q.y - lmy;
            const qprox = Math.max(0, 1 - Math.sqrt(qxd * qxd + qyd * qyd) / (PUSH * 2.2));
            const lineProx = Math.max(prox, qprox);
            const alpha = 0.08 + lineProx * 0.55;
            const lum = 38 + lineProx * 38;
            const sat = 50 + lineProx * 25;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(205,${sat}%,${lum}%,${alpha})`;
            ctx.lineWidth = 0.5 + lineProx * 1.0;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots on top of lines
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dx = p.x - lmx, dy = p.y - lmy;
        const prox = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / (PUSH * 2.2));
        const r = 1.6 + prox * 3.0;
        const lum = 35 + prox * 40;
        const alpha = 0.35 + prox * 0.65;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(205,75%,${lum}%,${alpha})`;
        ctx.fill();
      }

      // Soft cursor glow
      if (lmx > 0 && lmx < W && lmy > 0 && lmy < H) {
        const grd = ctx.createRadialGradient(lmx, lmy, 0, lmx, lmy, PUSH * 1.6);
        grd.addColorStop(0, "hsla(205,75%,65%,0.10)");
        grd.addColorStop(0.5, "hsla(205,75%,46%,0.04)");
        grd.addColorStop(1, "hsla(205,75%,46%,0)");
        ctx.beginPath();
        ctx.arc(lmx, lmy, PUSH * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
    };
    animate();

    const onResize = () => { build(); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full mobile:h-112 mobile:w-full bg-transparent">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
