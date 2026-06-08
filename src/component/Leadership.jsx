import { Reveal, SectionHeader } from "./Reveal";
import { LEADERSHIP, ACHIEVEMENTS } from "../lib/data";
import { Trophy, Users } from "lucide-react";

export const Leadership = () => {
    return (
        <section
            id="leadership"
            className="relative py-24 sm:py-32 border-b border-white/10"
            data-testid="leadership-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    index="05"
                    kicker="Leadership & Achievements"
                    title="Roles, responsibilities, and a few proud moments."
                />

                <div className="grid grid-cols-12 gap-y-12 gap-x-8">
                    {/* Leadership timeline */}
                    <div className="col-span-12 lg:col-span-7">
                        <Reveal>
                            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 mb-6">
                                <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
                                Leadership &amp; Responsibilities
                            </div>
                        </Reveal>

                        <ul className="border-l border-white/15">
                            {LEADERSHIP.map((item, i) => (
                                <Reveal key={`${item.org}-${item.role}`} delay={i * 0.04}>
                                    <li
                                        className="group relative pl-6 sm:pl-8 py-5 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
                                        data-testid={`leadership-item-${i}`}
                                    >
                                        <span className="absolute -left-[2px] top-7 h-px w-4 bg-white/30 group-hover:bg-white group-hover:w-6 transition-all" />
                                        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1.2fr_0.8fr] sm:items-center gap-2">
                                            <div>
                                                <div className="text-base sm:text-lg text-white font-medium">
                                                    {item.role}
                                                </div>
                                                <div className="text-sm text-white/55 mt-0.5">
                                                    {item.org}
                                                </div>
                                            </div>
                                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-center">
                                                {item.type}
                                            </div>
                                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-right">
                                                {item.time}
                                            </div>
                                        </div>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div className="col-span-12 lg:col-span-5">
                        <Reveal>
                            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 mb-6">
                                <Trophy className="w-3.5 h-3.5" strokeWidth={1.5} />
                                Achievements
                            </div>
                        </Reveal>

                        <div className="flex flex-col gap-4">
                            {ACHIEVEMENTS.map((a, i) => (
                                <Reveal key={a.title} delay={i * 0.06}>
                                    <div
                                        className="border border-white/10 p-6 bg-[#0a0a0a] hover:border-white/30 transition-colors"
                                        data-testid={`achievement-${i}`}
                                    >
                                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                                            0{i + 1}
                                        </div>
                                        <div className="text-lg text-white font-medium">
                                            {a.title}
                                        </div>
                                        <div className="text-sm text-white/55 mt-2 leading-relaxed">
                                            {a.detail}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
