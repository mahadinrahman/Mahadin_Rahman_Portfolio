"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const techs = [
    'HTML5',
    'CSS3',
    'JAVASCRIPT',
    'REACT',
    'NEXT.JS',
    'NODE.JS',
    'EXPRESS',
    'MONGODB',
    'TAILWIND CSS',
    'GIT',
    'GITHUB'
  ];

  // Double the list to create a seamless infinite loop
  const doubledTechs = [...techs, ...techs];

  return (
    <section className="border-y border-border-main py-8 bg-card/30 relative overflow-hidden" data-purpose="tech-stack">
      {/* Left and Right Edge Fade Gradients for Premium Look */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center text-brand-muted font-bold tracking-[0.2em] text-xs md:text-sm uppercase space-x-12 pr-12"
        >
          {doubledTechs.map((tech, index) => (
            <div key={index} className="flex items-center space-x-12">
              <span className="hover:text-brand-accent transition-colors duration-300 cursor-default">
                {tech}
              </span>
              <span className="text-brand-accent/40 text-xs">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

