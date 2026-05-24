"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Floating Image Parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: 20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Magnetic Buttons
      buttonsRef.current.forEach((btn) => {
        if (!btn) return;
        const onMouseMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const onMouseLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        };

        btn.addEventListener("mousemove", onMouseMove);
        btn.addEventListener("mouseleave", onMouseLeave);
      });
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden py-20 px-10" data-purpose="hero-banner" id="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-27 items-center relative z-10">
        {/* Text Content */}
        <div data-purpose="hero-text">
          <div className="flex items-center space-x-2 mb-4 overflow-hidden">
            <h1 className="hero-title text-5xl md:text-7xl font-bold">Hello <span className="text-brand-accent">.</span></h1>
          </div>
          <div className="flex items-center mb-4 hero-subtitle">
            <span className="h-[2px] w-12 bg-brand-accent mr-4"></span>
            <span className="text-2xl md:text-3xl text-brand-muted">I&apos;m Mahadin</span>
          </div>
          <h2 className="hero-title text-4xl md:text-6xl font-extrabold mb-10 tracking-tight">Web Developer</h2>
          <div className="flex flex-wrap gap-4">
            <Link href={'#projects'}><button
              ref={el => buttonsRef.current[0] = el}
              className="magnetic-area bg-brand-accent hover:bg-amber-700 transition-all text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider accent-glow"
            >
              Get a project?
            </button></Link>
            <button
              ref={el => buttonsRef.current[1] = el}
              className="magnetic-area border border-white/20 hover:border-white/50 transition-all text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider"
            >
              My resume
            </button>
          </div>
        </div>

        {/* Profile Visual */}
        <div
          className="relative flex justify-center items-center"
          data-purpose="hero-visual"
          onMouseMove={(e) => {
            if (!imageRef.current) return;
            const rect = imageRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(imageRef.current, {
              rotateY: x * 0.05,
              rotateX: -y * 0.05,
              duration: 0.5,
              ease: "power2.out",
            });
          }}
          onMouseLeave={() => {
            gsap.to(imageRef.current, {
              rotateY: 0,
              rotateX: 0,
              duration: 1,
              ease: "elastic.out(1, 0.3)",
            });
          }}
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 text-brand-accent opacity-10 text-8xl font-mono select-none -translate-x-12 -translate-y-12">&lt;/&gt;</div>

          {/* Image Container */}
          <div
            ref={imageRef}
            className="relative w-72 h-72 md:w-96 md:h-96 -mt-12 md:-mt-20 preserve-3d"
            style={{ perspective: "1000px" }}
          >
            {/* Pulsing Aura */}
            <div className="absolute inset-0 rounded-full bg-brand-accent/30 blur-[100px] animate-pulse opacity-50"></div>

            {/* Floating Rings */}
            <div className="profile-ring absolute inset-[-20px] rounded-full border border-brand-accent/30 scale-110"></div>
            <div className="profile-ring absolute inset-[-40px] rounded-full border border-brand-accent/10 scale-125 animation-delay-1000"></div>

            <div className="absolute inset-0 rounded-full border-2 border-brand-accent/50 p-3 bg-background/50 backdrop-blur-sm shadow-[0_0_80px_rgba(217,119,6,0.15)] overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-border-main bg-brand-dark relative group">
                <img
                  alt="Mahadin Rahman"
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                  src="/profile.jpg"
                  style={{
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
                {/* Overlay shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            </div>

            {/* Tag badge */}
            <div className="absolute -bottom-4 -right-4 bg-brand-accent text-white px-4 py-2 rounded-full text-xs font-bold tracking-tighter shadow-xl">
              OPEN TO WORK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

