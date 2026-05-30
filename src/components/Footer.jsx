"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, ArrowUp } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.13-1.347a9.96 9.96 0 004.88 1.277h.005c5.505 0 9.988-4.478 9.989-9.985C22 6.478 17.518 2 12.012 2zm5.836 14.127c-.252.712-1.462 1.393-2.014 1.48-.502.08-1.157.147-3.359-.766-2.818-1.168-4.637-4.043-4.778-4.23-.14-.187-1.144-1.523-1.144-2.906 0-1.383.722-2.062.978-2.343.256-.282.562-.352.75-.352.188 0 .376.001.538.007.169.007.397-.065.62.47.23.55.783 1.912.85 2.053.068.14.113.305.02.493-.09.188-.138.305-.274.464-.136.16-.285.358-.407.48-.136.136-.28.283-.12.56.16.275.71 1.171 1.523 1.895.848.756 1.564 1.003 1.785 1.122.22.119.349.102.477-.046.129-.148.55-.641.696-.86.147-.22.294-.184.493-.11.198.074 1.262.595 1.48.704.218.11.363.164.417.257.054.094.054.544-.198 1.256z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elementsRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, footerRef.current);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/mahadinrahman', icon: <GithubIcon /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mahadinrahman/', icon: <LinkedInIcon /> },
    { name: 'WhatsApp', href: 'https://wa.me/8801333796444', icon: <WhatsAppIcon /> },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative py-16 px-6 md:px-12 border-t border-border-main bg-card/30 overflow-hidden" data-purpose="main-footer">
      {/* Footer Ambient Background Light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border-main">
          
          {/* Brand Info */}
          <div ref={el => elementsRef.current[0] = el} className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Mahadin <span className="text-brand-accent">Rahman</span>
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              MERN Stack & Frontend Developer focused on creating beautiful, responsive, and performance-driven web applications that deliver seamless user experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-card border border-border-main text-brand-muted hover:text-brand-accent hover:border-brand-accent flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div ref={el => elementsRef.current[1] = el} className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-accent text-sm transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div ref={el => elementsRef.current[2] = el} className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-brand-muted">
                <Mail size={16} className="text-brand-accent flex-shrink-0" />
                <Link href="mailto:mahadinrahman333@gmail.com" className="hover:text-brand-accent transition-colors">
                  mahadinrahman333@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-muted">
                <Phone size={16} className="text-brand-accent flex-shrink-0" />
                <Link href="tel:+8801333796444" className="hover:text-brand-accent transition-colors">
                  +8801333796444
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div ref={el => elementsRef.current[3] = el} className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-brand-muted uppercase tracking-widest">
            © {currentYear} Mahadin Rahman. All rights reserved.
          </p>
          
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <span className="w-8 h-8 rounded-lg bg-card border border-border-main flex items-center justify-center group-hover:border-brand-accent transition-all duration-300 group-hover:-translate-y-0.5 shadow-sm">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
