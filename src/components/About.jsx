import React from 'react';
import { portfolioData } from '../portfolioData';

const About = () => {
    const { about } = portfolioData;

    return (
        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-sky-500"></span>
                    About Me
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg mb-6 text-justify whitespace-pre-line">
                    {about.bio}
                </p>
            </div>

            {/* Education */}
            <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-sky-500"></span>
                    Education
                </h2>
                <div className="space-y-8">
                    {about.education.map((edu, index) => (
                        <div key={index} className="relative pl-6 border-l border-slate-700">
                            <span className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-sky-500"></span>
                            <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                            <p className="text-sky-400 font-medium">{edu.institution}</p>
                            <div className="flex justify-between items-center mt-2 text-sm text-slate-500 font-mono">
                                <span>{edu.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
