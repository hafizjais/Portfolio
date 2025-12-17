import React from 'react';
import { Award } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { motion } from 'framer-motion';

const Certifications = () => (
  <div className="w-full">
    <div className="mb-12 text-center md:text-left">
      <h2 className="font-heading text-4xl font-bold text-slate-900 mb-2">
        Certifications & <span className="text-teal-500">Awards</span>
      </h2>
      <div className="h-1 w-20 bg-teal-500 rounded-full md:hidden mx-auto"></div>
      <div className="h-1 w-20 bg-teal-500 rounded-full hidden md:block"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioData.certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-teal-200 transition-all group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-teal-50 text-teal-600 rounded-lg group-hover:bg-teal-500 group-hover:text-white transition-colors">
              <Award size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded-full bg-slate-50 font-mono">
              {cert.date}
            </span>
          </div>

          <h3 className="font-heading text-lg font-bold text-slate-900 mb-1 leading-tight group-hover:text-teal-600 transition-colors">
            {cert.name}
          </h3>
          <p className="text-sm text-slate-500 font-medium font-body">
            {cert.issuer}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Certifications;