import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none"
    >
      <div className="pointer-events-auto">
        <a href="#" className="text-xl font-bold tracking-tighter hover-trigger font-sans">
          GRK
        </a>
      </div>
      <nav className="flex gap-6 pointer-events-auto">
        <a href="#work" className="text-sm font-medium hover:opacity-50 transition-opacity hover-trigger">Work</a>
        <a href="#about" className="text-sm font-medium hover:opacity-50 transition-opacity hover-trigger">About</a>
        <a href="#contact" className="text-sm font-medium hover:opacity-50 transition-opacity hover-trigger">Contact</a>
      </nav>
    </motion.header>
  );
};