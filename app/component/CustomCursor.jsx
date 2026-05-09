"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Track actual mouse position
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);

    // Smooth motion
    let raf;
    const smooth = 0.1;
    const follow = () => {
      setPos((prev) => ({
        x: prev.x + (mouse.x - prev.x) * smooth,
        y: prev.y + (mouse.y - prev.y) * smooth,
      }));
      raf = requestAnimationFrame(follow);
    };
    follow();

    const els = document.querySelectorAll(".cursor-hover");
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    const click = () => setHovered(false);

    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      el.addEventListener("click", click);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouse]);

  return (
    <>
      {/* SMALL FOLLOWER CURSOR (always visible) */}
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
        className={`
          fixed z-[9998] pointer-events-none
          -translate-x-1/2 -translate-y-1/2
          w-4 h-4 rounded-full
          bg-white/80 backdrop-blur
          transition-all duration-80
        `}
      />

      {/* BIG VIEW NOW CURSOR (only on hover) */}
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
        className={`
          fixed pointer-events-none z-[9999]
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-100 ease-out
          ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        `}
      >
        <div className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-xl">
          View Now
        </div>
      </div>
    </>
  );
}
