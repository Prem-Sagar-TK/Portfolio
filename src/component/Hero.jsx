import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { PROFILE } from "../lib/data";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-end overflow-hidden border-b border-white/10"
            data-testid="hero-section"
        >
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />

            <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-24">

                <div className="grid grid-cols-12 gap-y-10 gap-x-8 items-end">
                    {/* Name + tagline */}
                    <div className="col-span-12 lg:col-span-9">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            custom={1}
                            className="font-mono text-m text-white/80 mb-4"
                        >
                            [Hey It's Me]
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            custom={2}
                            className="font-display text-[14vw] sm:text-6xl lg:text-[8.5rem] xl:text-[10rem] leading-[0.92] font-medium tracking-tight text-white"
                            data-testid="hero-name"
                        >
                            Prem Sagar
                            <span className="block text-white/40">
                                T.K<span className="text-white"></span>
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            custom={3}
                            className="mt-8 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed"
                            data-testid="hero-tagline"
                        >
                            {/*<span className="text-white">AI/ML Enthusiast</span>
                            <span className="text-white/30"> / </span>*/}
                            <span className="text-white">Full-Stack Developer</span>
                            <span className="text-white/30"> / </span>
                            <span className="text-white">Entrepreneur</span>
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            custom={4}
                            className="mt-6 max-w-5xl text-base text-white/55 leading-relaxed"
                        >
                            {PROFILE.intro}
                        </motion.p>
                        <br></br>
                        {/* Top meta strip */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            custom={0}
                            className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 mb-12 sm:mb-16"
                        >
                            <span className="flex items-center gap-2">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                </span>
                                Available for opportunities
                            </span>
                            <span className="h-px w-6 bg-white/20" />
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                                {PROFILE.location}
                            </span>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            custom={5}
                            className="mt-10 flex flex-wrap items-center gap-3"
                        >


                        </motion.div>
                    </div>


                    {/* Side meta */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={6}
                        className="col-span-12 lg:col-span-3 flex flex-col gap-6 lg:items-end lg:text-right"
                    >
                        <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-2">
                                Currently
                            </div>
                            <div className="text-sm text-white leading-relaxed">
                                Undergraduate student, IIIT Dharwad
                                Cultural Secretary, IIIT Dharwad

                            </div>
                        </div>
                        <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-2">
                                Focus
                            </div>
                            <div className="text-sm text-white leading-relaxed">
                                AI / ML · Full-Stack . StartUps
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
