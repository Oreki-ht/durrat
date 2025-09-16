"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <h1 className="text-[#d4b996] font-bold text-xl md:text-2xl">Durrat Agency</h1>
        </motion.div>
        
        {/* Desktop links */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="hidden md:block"
        >
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-[#d4b996] transition">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-[#d4b996] transition">About</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-[#d4b996] transition">Services</a></li>
            <li><a href="#countries" className="text-gray-700 hover:text-[#d4b996] transition">Countries</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-[#d4b996] transition">Contact</a></li>
          </ul>
        </motion.div>
        
        {/* Mobile menu button */}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </motion.button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col space-y-2 px-4 py-4">
              <li><a href="#home" className="block text-gray-700 hover:text-[#d4b996] transition" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="block text-gray-700 hover:text-[#d4b996] transition" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#services" className="block text-gray-700 hover:text-[#d4b996] transition" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#countries" className="block text-gray-700 hover:text-[#d4b996] transition" onClick={() => setMenuOpen(false)}>Countries</a></li>
              <li><a href="#contact" className="block text-gray-700 hover:text-[#d4b996] transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;