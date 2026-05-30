"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
  const sectionRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      timelineItemsRef.current.forEach((item, i) => {
        if (!item) return;

        // Timeline Dot reveal
        gsap.from(item.querySelector(".timeline-dot"), {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          scale: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });

        // Timeline Card reveal (alternate left and right slide animations)
        gsap.from(item.querySelector(".timeline-card"), {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          x: i % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const educationData = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Islamic University,Bangladesh ",
      duration: "2024 - Present",
      description: "Focusing on Software Engineering, Data Structures, Algorithms, Database Management Systems, and Web Technologies. Actively participating in programming contests and development projects.",
      icon: <GraduationCap size={20} />,
      status: "In Progress",
      result: null
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Manirampur Govt College,Jashore",
      duration: "2022 - 2023",
      description: "Completed secondary education in Science group with a focus on Mathematics, Physics, and Chemistry.",
      icon: <BookOpen size={20} />,
      status: "Completed",
      result: "GPA: 5.00 / 5.00"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Manirampur Govt High School,Jashore",
      duration: "2016 - 2021",
      description: "Science group with exceptional results, building a strong base in science, logical reasoning, and mathematics.",
      icon: <Award size={20} />,
      status: "Completed",
      result: "GPA: 5.00 / 5.00"
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-28 px-6 md:px-10 relative overflow-hidden bg-[var(--section-alt)]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 font-mono text-[13px] text-brand-accent tracking-[2px] mb-3">
            <span className="w-6 h-px bg-brand-accent" />
            MY ACADEMIC JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Education & <span className="text-brand-accent">Qualifications</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-accent mx-auto mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-border-main max-w-3xl mx-auto pl-8 md:pl-12 space-y-12 py-4">
          
          {educationData.map((edu, i) => (
            <div 
              key={edu.degree}
              ref={el => timelineItemsRef.current[i] = el}
              className="relative group animate-reveal"
            >
              {/* Timeline Dot */}
              <div className="timeline-dot absolute -left-[41px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-[var(--background)] border-4 border-brand-accent flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 shadow-sm">
              </div>

              {/* Card Container */}
              <div className="timeline-card bg-card border border-border-main hover:border-brand-accent/30 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 relative">
                {/* Status Badge */}
                <span className={`absolute top-6 right-6 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  edu.status === 'In Progress' 
                  ? 'bg-brand-accent/15 text-brand-accent border border-brand-accent/30' 
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                }`}>
                  {edu.status}
                </span>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    {edu.icon}
                  </div>

                  <div className="space-y-2 pr-12">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-xs font-mono text-brand-muted flex items-center gap-1.5">
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground/90 group-hover:text-brand-accent transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-1">
                      <p className="text-sm font-semibold text-foreground/75">
                        {edu.institution}
                      </p>
                      {edu.result && (
                        <span className="text-[11px] font-mono font-bold text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/20 w-fit">
                          {edu.result}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-brand-muted leading-relaxed pt-2">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
