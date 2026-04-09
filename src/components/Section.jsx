import { motion } from 'framer-motion';

const Section = ({
    children,
    id,
    variant = 'light', // 'light' | 'dark'
    className = '',
    bgImage = null,
    bgOverlayOpacity = 0.7 // Default overlay opacity
}) => {
    // dark = slate-950, light = slate-900 (slightly lighter) for contrast
    const bgClass = variant === 'dark' ? 'bg-slate-950' : 'bg-slate-900';

    return (
        <section
            id={id}
            className={`relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden ${!bgImage ? bgClass : 'bg-slate-950'} ${className}`}
        >
            {bgImage && (
                <>
                    {/* Background Image with requested filters (Saturation, Contrast) */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat saturate-[1.2] contrast-[1.1]"
                        style={{ backgroundImage: `url('${bgImage}')` }}
                    ></div>

                    {/* Dark Overlay for Text Readability (Transparency adjustment) */}
                    <div
                        className="absolute inset-0 z-0 bg-slate-950"
                        style={{ opacity: bgOverlayOpacity }}
                    ></div>
                </>
            )}

            {/* Background elements (only if no image, to avoid clutter) */}
            {!bgImage && (
                <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                    {/* Existing subtle patterns can go here if needed */}
                </div>
            )}

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative max-w-7xl mx-auto z-10 text-slate-300"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
