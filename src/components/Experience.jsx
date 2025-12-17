import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => (
  <div className="w-full">
    <div className="mb-12">
      <h2 className="font-heading text-4xl font-bold text-slate-900 mb-2">
        Experience & <span className="text-teal-500">Education</span>
      </h2>
      <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Work Experience */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
            <Briefcase size={24} />
          </div>
          Work Experience
        </h3>
        <div className="space-y-8 border-l-2 border-slate-200 pl-8 ml-3">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-white rounded-full border-4 border-teal-500 shadow-sm group-hover:bg-teal-500 transition-colors"></span>
              <h4 className="font-heading text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{job.role}</h4>
              <p className="text-teal-600 font-medium mb-1 font-body">{job.company}</p>
              <p className="text-sm text-slate-400 mb-3 font-mono">{job.date}</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm font-body">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="pl-1">{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
            <GraduationCap size={24} />
          </div>
          Education
        </h3>
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
            >
              <h4 className="font-heading text-xl font-bold text-slate-800">{edu.degree}</h4>
              <p className="text-teal-600 font-medium font-body mt-1">{edu.institution}</p>
              <div className="flex justify-between items-center mt-3 text-sm text-slate-500 font-mono">
                <span>{edu.year}</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 font-body leading-relaxed">{edu.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Experience;