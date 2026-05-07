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
      title: 'Battleship',
      tags: ['HTML', 'CSS', 'Javascript', 'Node.js'],
      description: "Used components of JavaScript to implement basic data structures through the game of Battleship. Used terminal to display ships and marked where ships are hit or missed.",
      visual: (
        <div className="aspect-video bg-[#1e1c1b] rounded overflow-hidden p-6 font-mono text-xs text-amber-500/80">
          <p>&gt; RUN battleship.js</p>
          <p className="text-brand-accent">HIT!</p>
          <p className="mt-4">You sank a Cruiser.</p>
        </div>
      ),
      github: '#',
      demo: '#',
      reverse: false
    },
    {
      title: 'Movie Titles API',
      tags: ['HTML', 'CSS', 'Javascript', 'API', 'Version control'],
      description: "Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user's favorite movies into another container.",
      visual: (
        <div className="aspect-video bg-black flex overflow-hidden rounded">
          <img 
            alt="Movie UI" 
            className="w-full object-cover sepia-[0.3]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx_Mg449Tx1_QsIDYSfpvahcRlRVaRcn31fiTjprma2TsimwfEOtrWPgr2PqApTreM8XYambIxNk_xg0BDxzF33Nabwt2amql0yi9i8a1OqF4eB4mt-VI8r0ikSUCrwfbkZMtC7-QyE0us-hGaRQtR1pbfiqQd1338XaWkEvNC_7_3_1Vlsl7qvW-HeAHNRfYgrDdFkiZo2n6m1tRUGE9kTm6xQJkVbSJyPpIMbMK24QRWuVXgMckrem7U5qWy9iKWBu4zFacUQfU" 
          />
        </div>
      ),
      github: '#',
      demo: '#',
      reverse: true
    },
    {
      title: 'Javascript Calculator',
      tags: ['HTML', 'CSS', 'Javascript', 'Node.js'],
      description: "Uses simple algorithm concepts in JavaScript to produce an arithmetic result in a terminal.",
      visual: (
        <div className="aspect-video bg-[#1e1c1b] rounded overflow-hidden p-6 font-mono text-xs text-amber-500">
          <p>console.log('The result is: ' + (a + b));</p>
        </div>
      ),
      github: '#',
      demo: '#',
      reverse: false
    },
    {
      title: 'SaaS Landing Page',
      tags: ['HTML', 'CSS'],
      description: "Used HTML concepts such as creating a form and a basic skeleton. It also used components of both the grid and flexbox elements to produce a landing page.",
      visual: (
        <div className="aspect-video bg-white text-stone-900 p-8 rounded overflow-hidden flex flex-col justify-center shadow-inner">
          <div className="mb-4">
            <span className="text-amber-700 font-bold text-xl tracking-tighter">Front.</span>
          </div>
          <h4 className="text-2xl font-extrabold leading-tight mb-2">Empowering teams with the freedom</h4>
          <p className="text-stone-500 text-xs">See the performance of the web development.</p>
          <div className="mt-4">
            <span className="bg-amber-700 text-white px-4 py-2 rounded text-[10px] font-bold uppercase">Buy Now</span>
          </div>
        </div>
      ),
      github: '#',
      demo: '#',
      reverse: true
    }
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
