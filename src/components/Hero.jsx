import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] px-6 md:px-0 gap-8 md:gap-12">

      {/* Text Content */}
      <div className="flex-1 flex flex-col items-start text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sky-400 font-medium tracking-wider mb-2 block text-2xl pt-2"
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-100 mb-4 leading-tight"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
        >
          {hero.tagline}
          <br />
          {hero.tagline2}
          <br />
          {hero.tagline3}
          <br />
          {hero.tagline4}
          <br />
          Based in {hero.location}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="/CV_Hafiz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-sky-500 text-white font-medium rounded hover:bg-sky-600 transition-colors"
          >
            View my CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-slate-700 text-slate-300 font-medium rounded hover:border-sky-500 hover:text-sky-400 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
          {/* Decorative Ring */}
          <div className="absolute inset-0 border-2 border-dashed border-sky-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>

          <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src="/Gambar Profile.JPG"
              alt={hero.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;