import React from 'react';
import { portfolioData } from '../portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, items }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-colors w-full md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)]">
      <h3 className="text-xl font-bold text-sky-400 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full border border-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <SkillCategory title="Programming" items={skills.programming} />
        <SkillCategory title="Machine Learning" items={skills.ml} />
        <SkillCategory title="Data Integration" items={skills.data} />
        <SkillCategory title="Web Development" items={skills.web} />
        <SkillCategory title="Tools & Platforms" items={skills.tools} />
      </div>

      <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">Soft Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.soft?.map((skill) => (
          <span
            key={skill}
            className="px-6 py-3 bg-slate-800/50 text-slate-300 text-lg md:text-xl rounded-full border border-slate-700 hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;