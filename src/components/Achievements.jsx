import React from 'react';
import { portfolioData } from '../portfolioData';
import { Trophy } from 'lucide-react';

const Achievements = () => {
    const { achievements } = portfolioData;

    return (
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                    <Trophy className="text-yellow-500" size={28} />
                    Awards & Achievements
                </h2>

                <div className="grid gap-4">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/50 border border-slate-800/50 hover:border-yellow-500/30 transition-colors"
                        >
                            <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                            <p className="text-slate-300 font-medium leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
