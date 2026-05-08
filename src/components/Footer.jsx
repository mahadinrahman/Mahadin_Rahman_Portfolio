"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const socialRef = useRef([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(socialRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, footerRef.current);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mahadinrahman/' },
    { name: 'GitHub', href: 'https://github.com/mahadinrahman' },
    { name: 'Email', href: 'mailto:mahadinrahman333@gmail.com' },
  ];

  return (
    <footer ref={footerRef} className="py-20 px-10 border-t border-stone-800 text-center" data-purpose="main-footer" id="contacts">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Let&apos;s connect</h2>
          <p className="text-brand-muted">Available for freelance or full-time roles</p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-12">
          {socialLinks.map((link, i) => (
            <Link 
              key={link.name} 
              ref={el => socialRef.current[i] = el}
              className="text-brand-muted hover:text-brand-accent transition-colors link-underline" 
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="text-xs text-brand-muted opacity-50 uppercase tracking-widest">
          © {currentYear} Mahadin Rahman. Built with precision.
        </div>
      </div>
    </footer>
  );
}
