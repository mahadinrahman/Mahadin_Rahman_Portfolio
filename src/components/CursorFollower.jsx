"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(glow, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-brand-accent rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full pointer-events-none z-[0] blur-[100px] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
