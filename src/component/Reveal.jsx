import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 20, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const SectionHeader = ({ index, kicker, title, description }) => (
    <div className="flex flex-col gap-4 mb-12 sm:mb-16">
        <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs text-white/50 uppercase tracking-[0.2em]">
                <span>{index}</span>
                <span className="h-px w-8 bg-white/30" />
                <span>{kicker}</span>
            </div>
        </Reveal>
        <Reveal delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white max-w-3xl">
                {title}
            </h2>
        </Reveal>
        {description && (
            <Reveal delay={0.1}>
                <p className="text-base text-white/60 max-w-2xl leading-relaxed">
                    {description}
                </p>
            </Reveal>
        )}
    </div>
);
