"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for each project card
      projectsRef.current.forEach((project, i) => {
        if (!project) return;
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        // 3D Tilt Effect
        const onMouseMove = (e) => {
          const { left, top, width, height } = project.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;

          gsap.to(project, {
            rotateY: x * 5,
            rotateX: -y * 5,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const onMouseLeave = () => {
          gsap.to(project, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        project.addEventListener("mousemove", onMouseMove);
        project.addEventListener("mouseleave", onMouseLeave);
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const projectData = [
    {
      title: 'IdeaVault',
      tags: ['Next.js', 'Node.js','Express.js', 'MongoDB', 'Tailwind CSS'],
      description: "IdeaVault is a web-based platform where users can share innovative startup ideas, explore ideas posted by others, and engage through comments, and discussions. The system encourages creativity, collaboration, and validation of ideas through community interaction.",
      visual: (
        <div className="aspect-video bg-black flex overflow-hidden rounded">
          <img 
            alt="IdeaVault Preview" 
            className="w-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="/p1.png" 
          />
        </div>
      ),
      github: 'https://github.com/mahadinrahman/ideavault',
      demo: 'https://ideavault-gold.vercel.app',
      reverse: false
    },
    {
      title: 'SkillSphere',
      tags: ['Next.js','MongoDB', 'Tailwind CSS','JavaScript'],
      description: "SkillSphere is a  modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.",
      visual: (
        <div className="aspect-video bg-black flex overflow-hidden rounded">
          <img 
            alt="SkillSphere Preview" 
            className="w-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="/p2.png" 
          />
        </div>
      ),
      github: 'https://github.com/mahadinrahman/skillsphere-online-learning-platform',
      demo: 'https://skillsphere-online-learning-platfor-topaz.vercel.app',
      reverse: true
    },
   
    {
      title: 'Pixgen',
      tags: ['Next.js','MongoDB', 'Tailwind CSS','JavaScript'],
      description: "Pixgen is a website where users can explore different creative ideas and inspirations for generating images. It helps people discover unique prompts, styles, and concepts for AI image creation, making the creative process faster, easier, and more enjoyable. With PixGen, users can save time and generate better visual ideas effortlessly.",
      visual: (
        <div className="aspect-video bg-black flex overflow-hidden rounded">
          <img 
            alt="Pixgen Preview" 
            className="w-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="/p3.png" 
          />
        </div>
      ),
      github: 'https://github.com/mahadinrahman/pixgen',
      demo: 'https://pixgen-lime.vercel.app',
      reverse: false
    },
   
    
  ];

  return (
    <section ref={sectionRef} className="py-24 px-10 bg-[var(--section-alt)] border-y border-border-main" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
          <div className="w-10 h-[2px] bg-brand-accent mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-40">
          {projectData.map((project, index) => (
            <div 
              key={project.title} 
              ref={el => projectsRef.current[index] = el}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
            >
              <div className={`${project.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-muted">{tag}</span>
                  ))}
                </div>
                <p className="text-brand-muted mb-10 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex items-center space-x-6">
                  <Link className="bg-brand-accent hover:bg-amber-700 transition-all px-8 py-3 rounded font-bold text-xs uppercase tracking-widest text-white shadow-lg shadow-brand-accent/20" href={project.github}>View GitHub</Link>
                  <Link className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-white transition-colors group" href={project.demo}>
                    View project 
                    <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className={`${project.reverse ? 'lg:order-1' : 'lg:order-2'} bg-card p-3 rounded-2xl border border-border-main shadow-2xl relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {project.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
