"use client";

import { motion } from "framer-motion";

const Navbar = () => {
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
        
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;