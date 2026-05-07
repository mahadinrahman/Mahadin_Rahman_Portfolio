"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'End-to-end web applications using React, Node.js, Express, and MongoDB with clean architecture and scalable code.',
      icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    },
    {
      title: 'Frontend Development',
      description: 'Fast, responsive, and user-friendly interfaces built with React and modern UI frameworks like Tailwind CSS.',
      icon: <path d="M12 4v16m8-8H4" />
    },
    {
      title: 'Backend & API Development',
      description: 'Secure and efficient REST APIs using Node.js and Express, optimized for performance and scalability.',
      icon: <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 7V5a2 2 0 012-2h12a2 2 0 012 2v2M4 12h16" />
    },
    {
      title: 'Database Design & Management',
      description: 'Well-structured MongoDB databases with optimized queries for speed, reliability, and data integrity.',
      icon: <path d="M12 15c-4.418 0-8-1.79-8-4s3.582-4 8-4 8 1.79 8 4-3.582 4-8 4zM12 11c-4.418 0-8-1.79-8-4s3.582-4 8-4 8 1.79 8 4-3.582 4-8 4z" />
    },
    {
      title: 'Authentication & Authorization',
      description: 'Implementation of secure login systems using JWT, role-based access control, and best security practices.',
      icon: <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    },
    {
      title: 'E-Commerce Development',
      description: 'Product listings, cart systems, checkout flows, and payment gateway integrations for demo or real projects.',
      icon: <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    {
      title: 'Performance Optimization',
      description: 'Improving load times, API response speed, and overall application performance for better user experience.',
      icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    {
      title: 'Deployment & Hosting Support',
      description: 'Deploying applications on cloud platforms with proper environment setup and production-ready configuration.',
      icon: <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-10 relative overflow-hidden bg-[var(--section-alt)]" id="services">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Services I <span className="text-brand-accent">Provide</span></h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
            I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div 
              key={service.title} 
              ref={el => cardsRef.current[i] = el}
              className="relative group h-full"
            >
              {/* Animated Gradient Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-accent via-transparent to-amber-900 rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>
              
              <div className="relative h-full bg-card rounded-xl p-8 flex flex-col items-center text-center border border-border-main group-hover:bg-card/80 transition-all shadow-sm hover:shadow-xl dark:shadow-none duration-500">
                {/* Icon with glow */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg className="h-10 w-10 text-brand-accent relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {service.icon}
                  </svg>
                </div>
                
                <h3 className="text-lg font-bold mb-4 leading-tight group-hover:text-white transition-colors h-14 flex items-center">
                  {service.title}
                </h3>
                
                <p className="text-brand-muted text-xs leading-relaxed group-hover:text-stone-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
