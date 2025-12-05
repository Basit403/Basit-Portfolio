"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-screen bg-[#0F1624] text-white px-6"
      id="home"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-gray-400 text-2xl mb-2"
      >
        I'm a
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,  
          ease: "easeOut",
          delay: 0.2         
        }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
      >
        Frontend Website <br /> Developer.
      </motion.h1>
    
      <div className="mt-8 flex gap-4">
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="px-8 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          See Projects
        </motion.a>

        <motion.a
          href="/resume.pdf"  
          download="Basit-Resume.pdf" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className="px-8 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-600 hover:text-white transition"
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
}
