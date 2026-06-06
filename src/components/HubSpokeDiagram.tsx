"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, motionValue, useReducedMotion } from "framer-motion";

/* ─── Public types ───────────────────────────────────────────────────────── */

export interface SpokeNode {
  src: string;
  label: string;
  r: number;      // spoke radius in diagram-px
  ao: number;     // angle offset in degrees (organic spread)
  shrink: number; // scale applied to this node when a sibling is hovered
}

export interface DecorationDot {
  a: number;     // math angle in degrees (0 = right, CCW positive)
  r: number;     // radius from center in diagram-px
  dot_r: number; // dot circle radius in diagram-px
}

interface HubSpokeDiagramProps {
  nodes: SpokeNode[];
  dots?: DecorationDot[];
  hubSrc: string;
  hubAlt?: string;
}

/* ─── Internal layout constants ──────────────────────────────────────────── */

const D       = 438;          // fixed canvas size — ResizeObserver scales it to fill wrapper
const CX      = D / 2;
const CY      = D / 2;
const NODE_R  = 25;           // icon node circle radius
const ICON_S  = 30;           // icon image size inside node
const HUB_R   = 35;           // center hub circle radius
const HUB_S   = 48;           // center hub image size

const ORBIT_MS    = 90_000;   // one full revolution in ms
const MAG_SPRING  = { type: "spring" as const, stiffness: 260, damping: 18 };
const MAG_FORCE   = 32;       // max magnetic displacement in diagram-px
const MAG_RADIUS  = 130;      // influence radius in diagram-px

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function magForce(mx: number, my: number, nx: number, ny: number) {
  const dx = mx - nx, dy = my - ny;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist >= MAG_RADIUS || dist < 0.5) return { x: 0, y: 0 };
  const f = MAG_FORCE * Math.pow(1 - dist / MAG_RADIUS, 2);
  return { x: (dx / dist) * f, y: (dy / dist) * f };
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export function HubSpokeDiagram({
  nodes: spokeNodes,
  dots: decorDots = [],
  hubSrc,
  hubAlt = "Hub",
}: HubSpokeDiagramProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [fieldActive, setFieldActive] = useState(false);
  const [scale, setScale]   = useState(1);

  const wrapperRef   = useRef<HTMLDivElement>(null);
  const innerRef     = useRef<HTMLDivElement>(null);
  const scaleRef     = useRef(1);
  const startTimeRef = useRef<number>(Date.now());

  const mag = useRef(
    Array.from({ length: spokeNodes.length + decorDots.length }, () => ({
      x: motionValue(0),
      y: motionValue(0),
    }))
  );

  const lineRefs    = useRef<(SVGLineElement | null)[]>(Array(spokeNodes.length).fill(null));
  const dotLineRefs = useRef<(SVGLineElement | null)[]>(Array(decorDots.length).fill(null));

  // Base positions (no orbit applied — orbit is CSS; we compute it live in RAF)
  const nodes = spokeNodes.map((n, i) => {
    const base  = (i / spokeNodes.length) * Math.PI * 2 - Math.PI / 2;
    const angle = base + (n.ao * Math.PI / 180);
    return { ...n, x: CX + n.r * Math.cos(angle), y: CY + n.r * Math.sin(angle) };
  });

  const dotNodes = decorDots.map(d => {
    const rad = d.a * Math.PI / 180;
    return { ...d, x: CX + d.r * Math.cos(rad), y: CY + d.r * Math.sin(rad) };
  });

  const dur  = shouldReduceMotion ? "0s" : `${ORBIT_MS / 1000}s`;
  const play = shouldReduceMotion ? "paused" : "running";

  // ResizeObserver — keeps CSS scale in sync with wrapper size
  useEffect(() => {
    if (!wrapperRef.current) return;
    const obs = new ResizeObserver(([entry]) => {
      const s = Math.min(entry.contentRect.width, entry.contentRect.height) / D;
      scaleRef.current = s;
      setScale(s);
    });
    obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, []);

  // RAF loop — drives SVG line endpoints (orbit + magnetic displacement, no React state)
  useEffect(() => {
    let rafId: number;
    const tick = () => {
      const orbit = ((Date.now() - startTimeRef.current) / ORBIT_MS) * Math.PI * 2;
      spokeNodes.forEach((n, i) => {
        const base = (i / spokeNodes.length) * Math.PI * 2 - Math.PI / 2;
        const a    = base + (n.ao * Math.PI / 180) + orbit;
        lineRefs.current[i]?.setAttribute("x2", (CX + n.r * Math.cos(a) + mag.current[i].x.get()).toFixed(2));
        lineRefs.current[i]?.setAttribute("y2", (CY + n.r * Math.sin(a) + mag.current[i].y.get()).toFixed(2));
      });
      decorDots.forEach((d, i) => {
        const a   = d.a * Math.PI / 180 + orbit;
        const idx = spokeNodes.length + i;
        dotLineRefs.current[i]?.setAttribute("x2", (CX + d.r * Math.cos(a) + mag.current[idx].x.get()).toFixed(2));
        dotLineRefs.current[i]?.setAttribute("y2", (CY + d.r * Math.sin(a) + mag.current[idx].y.get()).toFixed(2));
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current || shouldReduceMotion) return;
    const rect  = innerRef.current.getBoundingClientRect();
    const mx    = (e.clientX - rect.left) / scaleRef.current;
    const my    = (e.clientY - rect.top)  / scaleRef.current;
    const orbit = ((Date.now() - startTimeRef.current) / ORBIT_MS) * Math.PI * 2;

    spokeNodes.forEach((n, i) => {
      const base = (i / spokeNodes.length) * Math.PI * 2 - Math.PI / 2;
      const a    = base + (n.ao * Math.PI / 180) + orbit;
      const { x: fx, y: fy } = magForce(mx, my, CX + n.r * Math.cos(a), CY + n.r * Math.sin(a));
      animate(mag.current[i].x, fx, MAG_SPRING);
      animate(mag.current[i].y, fy, MAG_SPRING);
    });

    decorDots.forEach((d, i) => {
      const a   = d.a * Math.PI / 180 + orbit;
      const idx = spokeNodes.length + i;
      const { x: fx, y: fy } = magForce(mx, my, CX + d.r * Math.cos(a), CY + d.r * Math.sin(a));
      animate(mag.current[idx].x, fx, MAG_SPRING);
      animate(mag.current[idx].y, fy, MAG_SPRING);
    });
  }, [shouldReduceMotion, spokeNodes, decorDots]);

  const handleMouseLeave = useCallback(() => {
    setFieldActive(false);
    setHoveredIdx(null);
    mag.current.forEach(mv => {
      animate(mv.x, 0, MAG_SPRING);
      animate(mv.y, 0, MAG_SPRING);
    });
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      style={{ width: "100%", aspectRatio: "1 / 1", position: "relative" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      onMouseEnter={() => setFieldActive(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Fixed D×D canvas, scaled to fill wrapper */}
      <div
        ref={innerRef}
        style={{
          position: "absolute",
          left: "50%", top: "50%",
          width: D, height: D,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        <style>{`
          @keyframes hub-spin   { to { transform: rotate(360deg);  } }
          @keyframes hub-unspin { to { transform: rotate(-360deg); } }
        `}</style>

        {/* SVG: spoke lines — endpoints updated each frame by the RAF loop */}
        <svg
          viewBox={`0 0 ${D} ${D}`}
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        >
          {nodes.map((n, i) => (
            <line key={i} ref={el => { lineRefs.current[i] = el; }}
              x1={CX} y1={CY} x2={n.x} y2={n.y}
              stroke="rgba(0,0,0,0.09)" strokeWidth="1" />
          ))}
          {dotNodes.map((d, i) => (
            <line key={`dl-${i}`} ref={el => { dotLineRefs.current[i] = el; }}
              x1={CX} y1={CY} x2={d.x} y2={d.y}
              stroke="rgba(0,0,0,0.09)" strokeWidth="1" />
          ))}
        </svg>

        {/* Orbit ring: all nodes + dots rotate together */}
        <div style={{
          position: "absolute", inset: 0,
          transformOrigin: `${CX}px ${CY}px`,
          animationName: "hub-spin",
          animationDuration: dur,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: play,
        }}>
          {/* Icon nodes */}
          {nodes.map((n, i) => {
            const isHovered  = hoveredIdx === i;
            const targetScale = shouldReduceMotion ? 1
              : hoveredIdx !== null ? (isHovered ? 1.48 : n.shrink)
              : fieldActive ? 0.96 : 1;

            return (
              <div key={i} style={{
                position: "absolute",
                left: n.x - NODE_R, top: n.y - NODE_R,
                width: NODE_R * 2, height: NODE_R * 2,
                transformOrigin: `${NODE_R}px ${NODE_R}px`,
                animationName: "hub-unspin",
                animationDuration: dur,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationPlayState: play,
              }}>
                <motion.div
                  title={n.label}
                  style={{
                    width: "100%", height: "100%",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.92)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "default",
                    x: mag.current[i].x,
                    y: mag.current[i].y,
                  }}
                  animate={{
                    scale: targetScale,
                    boxShadow: isHovered
                      ? "0 6px 24px rgba(0,0,0,0.13), 0 0 0 1.5px rgba(0,0,0,0.08)"
                      : "0 1px 8px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)",
                  }}
                  transition={{ type: "spring", stiffness: 550, damping: 28 }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <img src={n.src} alt={n.label} width={ICON_S} height={ICON_S}
                    style={{ objectFit: "contain", display: "block", pointerEvents: "none" }} />
                </motion.div>
              </div>
            );
          })}

          {/* Decoration dots */}
          {dotNodes.map((d, i) => (
            <div key={`dot-${i}`} style={{
              position: "absolute",
              left: d.x - d.dot_r, top: d.y - d.dot_r,
              width: d.dot_r * 2, height: d.dot_r * 2,
              transformOrigin: `${d.dot_r}px ${d.dot_r}px`,
              animationName: "hub-unspin",
              animationDuration: dur,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: play,
            }}>
              <motion.div style={{
                width: "100%", height: "100%",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.13)",
                x: mag.current[spokeNodes.length + i].x,
                y: mag.current[spokeNodes.length + i].y,
              }} />
            </div>
          ))}
        </div>

        {/* Center hub */}
        <motion.div
          style={{
            position: "absolute",
            left: CX - HUB_R, top: CY - HUB_R,
            width: HUB_R * 2, height: HUB_R * 2,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 2px 16px rgba(0,0,0,0.1), 0 0 0 1.5px rgba(0,0,0,0.07)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={hubSrc} alt={hubAlt} width={HUB_S} height={HUB_S}
            style={{ objectFit: "contain" }} />
        </motion.div>
      </div>
    </motion.div>
  );
}
