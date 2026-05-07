"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Counter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: node,
        start: "top 80%",
        onEnter: () => {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        },
        once: true
      });
    });

    return () => ctx.revert();
  }, [end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards Reveal
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
        });
      });

      // About Text Reveal
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-10" data-purpose="about-me-section" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Services/What I Do */}
        <div className="space-y-12" data-purpose="services-list">
          {/* Service items with Framer Motion Tilt */}
          {[
            { 
              title: "Website Development", 
              icon: <path d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            },
            { 
              title: "App Development", 
              icon: <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            },
            { 
              title: "Website Hosting", 
              icon: <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            }
          ].map((service, i) => (
            <div key={service.title} ref={el => cardsRef.current[i] = el} className="flex items-start space-x-6">
              <motion.div 
                whileHover={{ rotateY: 15, rotateX: -15, scale: 1.1 }}
                className="mt-1 p-3 bg-card border border-border-main rounded-lg cursor-pointer"
              >
                <svg className="h-8 w-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon.props.d}></path>
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="w-10 h-1 bg-brand-accent/30 rounded"></div>
              </div>
            </div>
          ))}
        </div>
 
        {/* About Text & Stats */}
        <div className="about-text" data-purpose="about-details">
          <h2 className="text-4xl font-bold mb-8">About me</h2>
          <p className="text-brand-muted leading-relaxed mb-12 max-w-xl">
            Started my software journey from photography. Through that, I learned to love the process of creating things from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border-main">
            {[
              { value: 120, label: 'Completed Projects', suffix: '+' },
              { value: 95, label: 'Client Satisfaction', suffix: '%' },
              { value: 10, label: 'Years of Experience', suffix: '+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-brand-muted uppercase tracking-widest font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
