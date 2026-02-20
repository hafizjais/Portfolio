import React from 'react';
import { portfolioData } from '../portfolioData';
import { Trophy, Image as ImageIcon, ExternalLink } from 'lucide-react';

const Achievements = () => {
    const { achievements } = portfolioData;

    return (
        <div className="relative">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-sky-500"></span>
                Awards & Achievements
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/30 transition-all group flex flex-col h-full"
                    >
                        {/* Gallery Grid Section */}
                        <div className="bg-slate-950 p-2 grid grid-cols-3 gap-2 h-48">
                            {/* Display up to 3 images, or placeholders */}
                            {(item.images && item.images.length > 0 ? item.images : ["", "", ""]).slice(0, 3).map((img, i) => (
                                <div key={i} className="relative rounded-md overflow-hidden bg-slate-800 h-full">
                                    {img ? (
                                        <img
                                            src={img}
                                            alt={`${item.title} ${i + 1}`}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-700">
                                            <ImageIcon size={20} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-lg font-bold text-slate-100 mb-1 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-sky-400 text-sm font-medium mb-4">
                                {item.award}
                            </p>

                            <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                                <span className="text-xs text-slate-500">{item.year}</span>
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold uppercase tracking-wider text-sky-500 hover:text-sky-400 transition-colors flex items-center gap-1"
                                    >
                                        View Award <ExternalLink size={12} />
                                    </a>
                                ) : (
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 cursor-default">
                                        Verified
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
