"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]);
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  // 👉 outside click handler
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-main"
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center">

        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          Mahadin <span className="text-brand-accent">Rahman</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center ml-auto gap-10">
          <ul className="flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
            {links.map((link, i) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden ml-auto">
          <ThemeToggle />

          <button onClick={() => setOpen(!open)}>
            <svg
              className="h-6 w-6 text-brand-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu + Overlay */}
      {open && (
        <>
          {/* dark overlay */}
          <div className="fixed inset-0 bg-black/40 z-40" />

          {/* menu box */}
          <div
            ref={menuRef}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-t border-border-main px-6 py-6 z-50"
          >
            <ul className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-wider text-brand-muted">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)} // link click close
                    className="hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}