"use client";

import { motion } from "framer-motion";

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Durrat Agency</h2>
          <div className="h-1 w-20 bg-[#d4b996] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-10"
        >
          <motion.div variants={fadeIn} className="bg-[#f5f5f5] p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At Durrat Foreign Employment Agency, our mission is to connect skilled Ethiopian workers with reputable employers worldwide, 
              ensuring safe, legal, and dignified employment opportunities while contributing to Ethiopia's economic growth
              through remittances and skills development.
            </p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="bg-[#f5f5f5] p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We aim to be the leading employment agency in Ethiopia, known for our integrity, professionalism, 
              and commitment to our candidates' success and wellbeing. We envision a future where Ethiopian talent
              is recognized and valued in the global workforce.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;