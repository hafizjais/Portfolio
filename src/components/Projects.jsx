import React from 'react';
import { motion } from 'framer-motion';
import { Database, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Projects = () => (
  <div className="w-full">
    <div className="mb-12 text-center md:text-left">
      <h2 className="font-heading text-4xl font-bold text-slate-900 mb-2">
        Featured <span className="text-teal-500">Projects</span>
      </h2>
      <div className="h-1 w-20 bg-teal-500 rounded-full md:hidden mx-auto"></div>
      <div className="h-1 w-20 bg-teal-500 rounded-full hidden md:block"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {portfolioData.projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-teal-900/5 hover:border-teal-500/30 transition-all duration-300"
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-bold tracking-wider uppercase rounded-full mb-3">
                  {project.type}
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 font-medium font-body mt-1">{project.subtitle}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                <FolderGit2 size={24} />
              </div>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed font-body">
              {project.description}
            </p>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-sm font-bold text-slate-900 mb-3 font-heading uppercase tracking-wide">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-md border border-slate-200 font-mono group-hover:border-teal-100 group-hover:bg-teal-50/50 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects;