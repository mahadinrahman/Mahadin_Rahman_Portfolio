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
    { name: 'JavaScript', icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6' },
    { name: 'React.js', icon: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z M12 7v10 M7 12h10 M8.5 8.5l7 7 M15.5 8.5l-7 7' },
    { name: 'Next.js', icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M9 17V7l7 10V7' },
    { name: 'Node.js', icon: 'M12 2L2 7v10l10 5 10-5V7L12 2zM12 9a3 3 0 100 6 3 3 0 000-6z' },
    { name: 'Express.js', icon: 'M12 2L2 7v10l10 5 10-5V7L12 2zM7 12h10' },
    { name: 'MongoDB', icon: 'M12 2c0 10 7 13 7 13s-7 2-7 7c0-10-7-13-7-13s7-2 7-7z' },
    { name: 'HTML5', icon: 'M3 2l1.5 18L12 22l7.5-2L21 2H3zm13.5 13l-4.5 1.5-4.5-1.5-.5-5h10l-.5 5z' },
    { name: 'Tailwind', icon: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 19h4' },
    { name: 'Git', icon: 'M4 9l5 5 5-5-5-5L4 9zm4.7 5.1c-.1.1-.3.1-.4 0l-1.4-1.4c-.1-.1-.1-.3 0-.4.1-.1.3-.1.4 0l1.4 1.4c.1.1.1.3 0 .4zm.8-.8c-.1.1-.3.1-.4 0l-1.4-1.4c-.1-.1-.1-.3 0-.4.1-.1.3-.1.4 0l1.4 1.4c.1.1.1.3 0 .4z' },
    { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
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
