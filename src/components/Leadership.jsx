import React from 'react';
import { portfolioData } from '../portfolioData';

const Leadership = () => {
    const { leadership } = portfolioData;

    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-sky-500"></span>
                Leadership Involvements
            </h2>

            <p className="text-slate-400 leading-relaxed mb-12">
                Beyond technical development, I actively participate in leadership and student organizations to strengthen teamwork, communication, and coordination skills. These experiences have shaped my ability to work collaboratively in structured and fast-paced environments.
            </p>

            <div className="space-y-12">
                {leadership.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-slate-800">
                        {/* Adjusted top position to visually center the circle with the job title text */}
                        <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500"></span>

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-slate-100">{item.organization}</h3>
                            <span className="text-sky-400 font-mono text-sm">{item.date}</span>
                        </div>

                        <h4 className="text-xl text-slate-300 mb-4">{item.role}</h4>

                        <ul className="space-y-2">
                            {item.description.map((desc, i) => (
                                <li key={i} className="text-slate-400 leading-relaxed flex items-start gap-2">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
