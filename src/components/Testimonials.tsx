"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Abebech Bekele",
      position: "Maid in Dubai",
      quote: " Their training prepared me perfectly for the job, and their team supported me throughout the entire process.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Tigist Haile",
      position: "Nurse in Saudi Arabia",
      quote: "I'm grateful to Durrat Agency for finding me a nursing position with excellent pay and benefits. The visa process was smooth, and they ensured my contract protected my rights.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Semira Mohammed",
      position: "Maid in Jordan",
      quote: "Thanks to Durrat, I've been working in Qatar for 3 years now. They found me a reputable employer, negotiated a good salary, and checked on my wellbeing regularly.",
      image: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <div className="h-1 w-20 bg-[#d4b996] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from our candidates who have successfully started their careers abroad through Durrat Agency.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-[#d4b996]">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;