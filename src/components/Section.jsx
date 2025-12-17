import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
    children,
    id,
    variant = 'light',
    className = ''
}) => {
    const isDark = variant === 'dark';

    return (
        <section
            id={id}
            className={`
        relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden
        ${isDark ? 'bg-dark-bg text-white' : 'bg-slate-50 text-slate-900'}
        ${className}
      `}
        >
            {/* Background Decor - Subtle for both modes */}
            {isDark && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
                </div>
            )}
            {!isDark && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[80px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-sky-100/40 rounded-full blur-[80px]" />
                </div>
            )}

            <div className="relative max-w-7xl mx-auto z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
