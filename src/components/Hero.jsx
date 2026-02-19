import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <div className="flex flex-col items-start justify-center min-h-[80vh] px-6 md:px-0">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sky-400 font-medium tracking-wider mb-4"
      >
        Hello, I'm {hero.name}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight"
      >
        {hero.headline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
      >
        {hero.tagline}
        <br />
        Based in {hero.location}.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-sky-500 text-white font-medium rounded hover:bg-sky-600 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 bg-transparent border border-slate-700 text-slate-300 font-medium rounded hover:border-sky-500 hover:text-sky-400 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;