"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div data-purpose="hero-text">
          <div className="flex items-center space-x-2 mb-4 overflow-hidden">
            <h1 className="hero-title text-5xl md:text-7xl font-bold">Hello <span className="text-brand-accent">.</span></h1>
          </div>
          <div className="flex items-center mb-4 hero-subtitle">
            <span className="h-[2px] w-12 bg-brand-accent mr-4"></span>
            <span className="text-2xl md:text-3xl text-brand-muted">I&apos;m Jensen</span>
          </div>
          <h2 className="hero-title text-4xl md:text-6xl font-extrabold mb-10 tracking-tight">Software Developer</h2>
          <div className="flex flex-wrap gap-4">
            <button 
              ref={el => buttonsRef.current[0] = el}
              className="magnetic-area bg-brand-accent hover:bg-amber-700 transition-all text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider accent-glow"
            >
              Get a project?
            </button>
            <button 
              ref={el => buttonsRef.current[1] = el}
              className="magnetic-area border border-white/20 hover:border-white/50 transition-all text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider"
            >
              My resume
            </button>
          </div>
        </div>

        {/* Profile Visual */}
        <div className="relative flex justify-center items-center" data-purpose="hero-visual">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 text-brand-accent opacity-20 text-6xl font-mono select-none">&lt;</div>
          <div className="absolute bottom-0 right-0 text-brand-accent opacity-20 text-6xl font-mono select-none">&gt;</div>
          
          {/* Image Container */}
          <div ref={imageRef} className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="profile-ring absolute inset-0 rounded-full border-2 border-brand-accent/30 scale-110"></div>
            <div className="absolute inset-0 rounded-full border border-brand-accent p-2">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-brand-dark">
                <img 
                  alt="Jensen Omega" 
                  className="w-full h-full object-cover sepia-[0.3] hover:sepia-0 transition-all duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcgMIsZ6hY2Y_DDTQMGQDy6n_LoqAlyQV71KKkesWcPZjy2RlgjKd-uSz8qTT8bHVLA3ndk6LHwFE3MjWEJWTZ0TIgM1rbJfOKehKStTlVmD-gphaRnEqHcYCcq4D6CdixwHcXyjHLqBJkDEI8aEhjIc_ATsZauILlAVkUXVkPNlJOk8qegutaitjPSoLufHmOHP8GfR6l3UGf84IXR98b7HWsITabOYBCyXW09ATC22L7U634C-N0QrGB6XrvdUZmbfzCBY4Hb8Y" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
