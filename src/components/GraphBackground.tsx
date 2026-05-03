"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const NODE_COUNT = 55;
const MAX_NODES = 85;
const MAX_SPEED = 0.35;
const LINK_DISTANCE = 160;
const MOUSE_INFLUENCE = 180;

export default function GraphBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    const initNodes = () => {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * MAX_SPEED,
        vy: (Math.random() - 0.5) * MAX_SPEED,
        radius: 1.6 + Math.random() * 1.8
      }));
    };

    const handleResize = () => {
      resize();
      initNodes();
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
        active: true
      };
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    const handlePointerDown = (event: PointerEvent) => {
      const nodes = nodesRef.current;
      const newNode: Node = {
        x: event.clientX,
        y: event.clientY,
        vx: (Math.random() - 0.5) * MAX_SPEED * 2,
        vy: (Math.random() - 0.5) * MAX_SPEED * 2,
        radius: 2 + Math.random() * 2.4
      };
      nodes.push(newNode);
      if (nodes.length > MAX_NODES) {
        nodes.shift();
      }
    };

    resize();
    initNodes();

    window.addEventListener("resize", handleResize);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    let animationFrameId: number;

    const step = () => {
      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);

      context.fillStyle = "rgba(15, 23, 42, 0.85)";
      context.fillRect(0, 0, width, height);

      const nodes = nodesRef.current;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        if (mouseRef.current.active) {
          const dx = node.x - mouseRef.current.x;
          const dy = node.y - mouseRef.current.y;
          const distance = Math.hypot(dx, dy);
          if (distance < MOUSE_INFLUENCE && distance > 0.1) {
            const force = (MOUSE_INFLUENCE - distance) / MOUSE_INFLUENCE;
            node.vx += (dx / distance) * force * 0.08;
            node.vy += (dy / distance) * force * 0.08;
          }
        }

        const speed = Math.hypot(node.vx, node.vy);
        if (speed > MAX_SPEED) {
          node.vx = (node.vx / speed) * MAX_SPEED;
          node.vy = (node.vy / speed) * MAX_SPEED;
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const opacity = 1 - dist / LINK_DISTANCE;
            context.strokeStyle = `rgba(96, 165, 250, ${opacity * 0.5})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        let glow = 0;
        if (mouseRef.current.active) {
          const dx = node.x - mouseRef.current.x;
          const dy = node.y - mouseRef.current.y;
          const distance = Math.hypot(dx, dy);
          glow = Math.max(0, (MOUSE_INFLUENCE - distance) / MOUSE_INFLUENCE);
        }
        context.fillStyle = `rgba(148, 163, 184, ${0.75 + glow * 0.25})`;
        context.beginPath();
        context.arc(node.x, node.y, node.radius + glow * 1.6, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = window.requestAnimationFrame(step);
    };

    step();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </div>
  );
}
