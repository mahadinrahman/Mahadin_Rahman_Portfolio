"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const headerRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    tl.from(navLinksRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5");
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-main" 
      data-purpose="main-navigation"
    >
      <nav className="max-w-6xl mx-auto px-10 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight" data-purpose="branding">
          Jensen <span className="text-brand-accent">Omega</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-10 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '#about' },
              { name: 'Services', href: '#services' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contacts', href: '#contacts' }
            ].map((link, i) => (
              <li key={link.name} ref={el => navLinksRef.current[i] = el}>
                <Link className="hover:text-brand-accent transition-colors link-underline" href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle & Theme toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <div className="text-brand-muted">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
