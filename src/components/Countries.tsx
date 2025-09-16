"use client";

import { motion } from "framer-motion";

const Countries = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  const countries = [
    { 
      country: "Saudi Arabia", 
      flag: "/countries/saudi.png"
    },
    { 
      country: "United Arab Emirates", 
      flag: "/countries/uae.png" 
    },
    { 
      country: "Jordan", 
      flag: "/countries/jordan.png"
    },
    { 
      country: "Kuwait", 
      flag: "/countries/kuwait.png"
    },
  ];

  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Destination Countries</h2>
          <div className="h-1 w-20 bg-[#d4b996] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We connect Ethiopian talent with opportunities in these key countries, each offering unique benefits and career paths.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {countries.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#f5f5f5] rounded-lg p-5 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-3">
                <img
                  src={item.flag}
                  alt={`${item.country} flag`}
                  className="mx-auto h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">{item.country}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;