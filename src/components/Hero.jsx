import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';
import { GraduationCap, Award, BookOpen, Briefcase, MapPin } from 'lucide-react';

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 mb-10"
        >
          <div className="flex items-center gap-3 text-white">
            <GraduationCap className="text-amber-400 shrink-0" size={24} />
            <span className="text-lg md:text-xl font-medium">{hero.tagline}</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <Award className="text-amber-400 shrink-0" size={24} />
            <span className="text-lg md:text-xl font-medium">{hero.tagline2}</span>
          </div>

          <div className="flex items-center gap-3 mt-2 px-4 py-3 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-sky-500/30 w-full md:w-fit shadow-lg">
            <Briefcase className="text-sky-400 shrink-0" size={24} />
            <span className="text-lg md:text-xl text-white font-semibold tracking-wide leading-snug">{hero.tagline3}</span>
          </div>

          <div className="flex items-center gap-3 text-white mt-2">
            <MapPin className="text-sky-400 shrink-0" size={24} />
            <span className="text-lg md:text-xl font-medium">Based in {hero.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-8 md:mb-12"
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
            className="px-8 py-3 bg-sky-500 text-white font-medium rounded hover:bg-sky-600 transition-colors"
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