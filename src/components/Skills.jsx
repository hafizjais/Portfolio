import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart3, Layout, Database } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Skills = () => {
  // Icons mapping
  const icons = {
    "Programming": <Code size={32} />,
    "Data & Analytics": <BarChart3 size={32} />,
    "Web & Design": <Layout size={32} />,
    "Tools & Platforms": <Database size={32} />
  };

  const categories = [
    { title: "Programming", key: "programming" },
    { title: "Data & Analytics", key: "data" },
    { title: "Web & Design", key: "web" },
    { title: "Tools & Platforms", key: "tools" },
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
          Technical <span className="text-teal-500">Expertise</span>
        </h2>
        <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-colors group"
          >
            <div className="text-teal-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              {icons[category.title]}
            </div>
            <h3 className="font-heading text-xl font-bold mb-6 text-slate-100 group-hover:text-teal-400 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills[category.key].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-slate-800 text-xs font-mono text-teal-200/80 rounded-md border border-slate-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;