import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { motion } from 'framer-motion';

const Leadership = () => (
  <div className="w-full">
    <div className="mb-12 text-center md:text-left">
      <h2 className="font-heading text-4xl font-bold text-slate-900 mb-2">
        Leadership <span className="text-teal-500">Involvement</span>
      </h2>
      <div className="h-1 w-20 bg-teal-500 rounded-full md:hidden mx-auto"></div>
      <div className="h-1 w-20 bg-teal-500 rounded-full hidden md:block"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {portfolioData.leadership.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-teal-200 transition-all group"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{item.role}</h3>
              <p className="text-teal-600 font-medium text-sm font-body">{item.organization}</p>
            </div>
            <div className="p-2 bg-teal-50 text-teal-600 rounded-lg group-hover:bg-teal-500 group-hover:text-white transition-colors">
              <Users size={20} />
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wide mb-4 font-mono">
            <Calendar size={14} />
            <span>{item.date}</span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed font-body">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Leadership;