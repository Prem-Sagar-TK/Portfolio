import { Reveal, SectionHeader } from "./Reveal";
import { ABOUT_INTERESTS } from "../lib/data";
import { Sparkle } from "lucide-react";

export const About = () => {
    return (
        <section
            id="about"
            className="relative py-24 sm:py-32 border-b border-white/10"
            data-testid="about-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    index="02"
                    kicker="About me"
                    title="A student building things that takes risks."
                />

                <div className="grid grid-cols-12 gap-y-10 gap-x-8">
                    <div className="col-span-12 lg:col-span-7">
                        <Reveal>
                            <p className="font-display text-2xl sm:text-3xl font-normal text-white/85 leading-snug tracking-tight">
                                I&apos;m a student at{" "}
                                <span className="text-white">IIIT Dharwad</span> with a
                                practical curiosity for intelligent systems, software development, and startup eco systems.
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="mt-6 text-base text-white/60 leading-relaxed max-w-xl">
                                My work moves between research-style explorations and building things end-to-end. I enjoy sitting close to the data, the algorithm, and the user at the same time. At IIIT Dharwad, I served as the Cultural Secretary, the President of Iridescence, and the Vice President of DSAI (Data Science and Artificial Intelligence) Society. Beyond my technical focus, I am an athlete who represented the institute in Inter-IIIT Basketball and played a key role in organizing large-scale campus events. I am passionate about blending technology, leadership, and innovation to create meaningful impact.
                            </p>
                        </Reveal>
                    </div>

                    <div className="col-span-12 lg:col-span-5">
                        <Reveal delay={0.1}>
                            <div className="border border-white/10 p-6 sm:p-8 bg-[#0a0a0a]">
                                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 mb-6">
                                    <Sparkle className="w-3.5 h-3.5" strokeWidth={1.5} />
                                    Interests
                                </div>
                                <ul className="grid grid-cols-1 gap-y-3">
                                    {ABOUT_INTERESTS.map((interest, i) => (
                                        <li
                                            key={interest}
                                            className="flex items-baseline gap-4 text-white"
                                            data-testid={`about-interest-${i}`}
                                        >
                                            <span className="font-mono text-xs text-white/40">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-base">{interest}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
