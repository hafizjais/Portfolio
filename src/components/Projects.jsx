import React from 'react';
import { portfolioData } from '../portfolioData';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-sky-500"></span>
        Featured Projects
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-800/30 border border-slate-700 hover:border-sky-500/50 p-8 rounded-xl transition-all hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-sky-500 mt-1">{project.subtitle}</p>
              </div>
              {project.award && (
                <span className="text-xs font-bold px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded border border-yellow-500/30">
                  Award Winner
                </span>
              )}
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-slate-900 text-slate-400 rounded border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;