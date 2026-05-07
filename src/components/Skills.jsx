"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use fromTo for explicit control
      gsap.fromTo(skillsRef.current, 
        { autoAlpha: 0, y: 30, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          force3D: true, // Force hardware acceleration for sharpness
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: 'JavaScript', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'React.js', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Node.js', icon: 'M12 2L2 7v10l10 5 10-5V7L12 2zM12 9a3 3 0 100 6 3 3 0 000-6z' },
    { name: 'PostgreSQL', icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v12M6 12h12' },
    { name: 'Tailwind', icon: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 19h4' },
    { name: 'AWS', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-10 relative overflow-hidden bg-background" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical <span className="text-brand-accent">Arsenal</span></h2>
          <div className="w-10 h-[2px] bg-brand-accent mx-auto mb-8"></div>
          <p className="text-brand-muted text-xs uppercase tracking-[0.2em] font-medium opacity-80">Technologies I master and use to build world-class products.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name} 
              ref={el => skillsRef.current[i] = el}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center w-36 h-36 lg:w-44 lg:h-44 bg-card border border-border-main rounded-xl transition-all shadow-sm hover:shadow-md dark:shadow-none duration-300 group cursor-default subpixel-antialiased transform-gpu"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-brand-accent mb-6">
                <svg className="h-10 w-10 lg:h-12 lg:w-12 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={skill.icon}></path>
                </svg>
              </div>
              <span className="text-[9px] lg:text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground/90 group-hover:text-brand-accent transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
