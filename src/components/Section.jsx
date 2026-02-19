import React from 'react';

const Section = ({
    children,
    id,
    variant = 'light', // 'light' | 'dark'
    className = ''
}) => {
    // dark = slate-950, light = slate-900 (slightly lighter) for contrast
    const bgClass = variant === 'dark' ? 'bg-slate-950' : 'bg-slate-900';

    return (
        <section
            id={id}
            className={`relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden ${bgClass} ${className}`}
        >
            {/* Background elements can go here if needed */}
            <div className="relative max-w-7xl mx-auto z-10 text-slate-300">
                {children}
            </div>
        </section>
    );
};

export default Section;
