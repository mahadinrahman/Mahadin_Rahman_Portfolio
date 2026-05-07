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
      gsap.from(skillsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: 'JavaScript', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'React.js', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Node.js', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' },
    { name: 'PostgreSQL', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' },
    { name: 'Tailwind', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    { name: 'AWS', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-10" data-purpose="technical-arsenal" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-brand-accent">Arsenal</span></h2>
          <div className="w-12 h-1 bg-brand-accent mx-auto rounded"></div>
          <p className="text-brand-muted mt-4">Technologies I master and use to build world-class products.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name} 
              ref={el => skillsRef.current[i] = el}
              whileHover={{ y: -10, boxShadow: "0 0 25px rgba(217, 119, 6, 0.2)" }}
              className="flex flex-col items-center p-6 bg-card border border-border-main rounded-lg hover:bg-stone-900 dark:hover:bg-stone-900 transition-all shadow-sm hover:shadow-lg dark:shadow-none duration-300 group cursor-default"
            >
              <div className="text-brand-accent mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={skill.icon}></path>
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
