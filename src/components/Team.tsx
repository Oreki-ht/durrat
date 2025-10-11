"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembersTop = [
  {
    name: "Benjedid Michael",
    role: "CEO",
    image: "/team/benjedid-michael.jpg",
  },
  {
    name: "Meron Michael",
    role: "Deputy Manager",
    image: "/team/meron-michael.jpg",
  },
];

const teamMembersBottom = [
  {
    name: "Eman Feki",
    role: "IT Manager",
    image: "/team/eman-feki.jpg",
  },
  {
    name: "Seada Jemal",
    role: "Secretary",
    image: "/team/seada-jemal.jpg",
  },
  {
    name: "Derartu",
    role: "Operations Manager",
    image: "/team/derartu.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
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

const Team = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="h-1 w-20 bg-[#d4b996] mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          The dedicated team behind our success that works tirelessly to connect Ethiopian talent with global opportunities.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col gap-12 items-center"
      >
        {/* Top row: CEO & Deputy Manager */}
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
          {teamMembersTop.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center w-full md:w-1/2"
            >
              <div className="w-full h-64 mb-4 relative rounded-lg overflow-hidden flex justify-center items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-[#d4b996] font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
        {/* Bottom row: Other team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {teamMembersBottom.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
            >
              <div className="w-full h-64 mb-4 relative rounded-lg overflow-hidden flex justify-center items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-[#d4b996] font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Team;