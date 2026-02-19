import React from 'react';
import { portfolioData } from '../portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-sky-500"></span>
        Work Experience
      </h2>

      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-800">
            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500"></span>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-100">{exp.company}</h3>
              <span className="text-sky-400 font-mono text-sm">{exp.date}</span>
            </div>

            <h4 className="text-xl text-slate-300 mb-4">{exp.role}</h4>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-slate-400 leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;