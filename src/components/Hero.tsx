"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="home" className="bg-[#d4b996] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-28 flex flex-col md:flex-row items-center">
        {/* Image on top for mobile, right for desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2"
        >
          <div className="relative h-56 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/maid-pic.png"
              alt="Maid holding cleaning supplies"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
        {/* Text below image on mobile, left for desktop */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="w-full md:w-1/2 order-2 md:order-1"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Your Gateway to Foreign Employment Opportunities
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Connecting Ethiopian talent with trusted employers across the Middle East.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;