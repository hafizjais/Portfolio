import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Linkedin, Github, Mail } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20 pb-20">

      {/* Background is handled by Section wrapper, but we can add specific hero decorative elements here */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          {/* Tagline */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-teal-500"></span>
            <span className="font-mono text-teal-400 text-sm tracking-widest uppercase">
              {portfolioData.personal.title}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2 text-white">
            Mohamad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-100">
              Hafiz
            </span>
          </motion.h1>

          {/* Bio */}
          <motion.p variants={item} className="font-body text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mb-8 border-l-2 border-teal-500/30 pl-6 mt-6">
            {portfolioData.personal.tagline} <br />
            {portfolioData.personal.bio}
          </motion.p>

          {/* Socials & CTA */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href="/cv.pdf"
              download="Mohamad_Hafiz_CV.pdf"
              className="px-8 py-3 bg-teal-500 text-slate-900 font-bold uppercase tracking-widest hover:bg-teal-400 transition-colors rounded-sm flex items-center gap-2 group"
            >
              View CV
              <ArrowDownRight className="group-hover:rotate-45 transition-transform duration-300" size={20} />
            </a>

            <div className="flex gap-4">
              {/* Placeholders for links if they exist in data, otherwise generic */}
              <a href={`mailto:${portfolioData.personal.email}`} className="p-2 text-slate-400 hover:text-teal-400 transition-colors border border-slate-700 hover:border-teal-500 rounded-full">
                <Mail size={20} />
              </a>
              {/* Add other socials if available in data, assuming standard placeholder for now */}
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-400 transition-colors border border-slate-700 hover:border-teal-500 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Graphic / Image */}
        <div className="order-1 md:order-2 flex justify-center relative">

          {/* Rotating Rings */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Ring 1 - Slow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-teal-500/20 border-dashed"
            />
            {/* Ring 2 - Medium Reverse */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-slate-700 border-dotted"
            />
            {/* Ring 3 - Fast */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute inset-12 rounded-full border-2 border-teal-500/10"
            />

            {/* Profile Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute inset-16 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 z-10"
            >
              <img
                src="/Gambar_Hafiz_New.JPG"
                alt="Mohamad Hafiz"
                className="w-full h-full object-cover opacity-90 hover:scale-110 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;