import { Reveal, SectionHeader } from "./Reveal";
import { SKILLS } from "../lib/data";
import { motion } from "framer-motion";

/* ── Category accent colours ────────────────────────────── */
const CATEGORY_META = {
    "Programming": { accent: "#7c3aed", glyph: "</>" },
    "Technologies & Tools": { accent: "#0ea5e9", glyph: "⚙" },
    "AI/ML & Data": { accent: "#10b981", glyph: "◈" },
    "Soft Skills": { accent: "#f59e0b", glyph: "✦" },
};

/* ── Pill component for each skill ──────────────────────── */
const SkillPill = ({ item, accent }) => (
    <motion.li
        whileHover={{ scale: 1.06, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative font-mono text-xs px-3 py-1.5 text-white/80 border border-white/10
                   hover:text-white transition-colors cursor-default select-none overflow-hidden group/pill"
        data-testid={`skill-${item.toLowerCase().replace(/\s+/g, "-")}`}
        style={{ borderColor: `${accent}30` }}
    >
        {/* hover fill */}
        <span
            className="absolute inset-0 opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300"
            style={{ background: `${accent}18` }}
        />
        <span className="relative z-10">{item}</span>
    </motion.li>
);

/* ── Single category card ────────────────────────────────── */
const SkillCard = ({ group, idx }) => {
    const meta = CATEGORY_META[group.category] ?? { accent: "#ffffff", glyph: "·" };

    return (
        <Reveal delay={idx * 0.07}>
            <div
                className="relative border border-white/10 p-6 sm:p-8 min-h-[240px]
                           hover:border-white/20 transition-all duration-300 group overflow-hidden"
                data-testid={`skills-category-${idx}`}
            >
                {/* Corner glow */}
                <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0
                               group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: meta.accent }}
                />

                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        {/* Glyph badge */}
                        <span
                            className="flex items-center justify-center w-9 h-9 rounded-sm text-sm font-bold"
                            style={{
                                background: `${meta.accent}20`,
                                color: meta.accent,
                                border: `1px solid ${meta.accent}40`,
                            }}
                        >
                            {meta.glyph}
                        </span>

                        <div>

                            <p className="font-display text-sm font-semibold text-white leading-none">
                                {group.category}
                            </p>
                        </div>
                    </div>

                    {/* Item count badge 
                    <span
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                            background: `${meta.accent}15`,
                            color: meta.accent,
                            border: `1px solid ${meta.accent}30`,
                        }}
                    >
                        {group.items.length}
                    </span>*/}
                </div>

                {/* Accent divider */}
                <div
                    className="w-full h-px mb-5 opacity-30"
                    style={{ background: `linear-gradient(to right, ${meta.accent}, transparent)` }}
                />

                {/* Skill pills */}
                <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                        <SkillPill key={item} item={item} accent={meta.accent} />
                    ))}
                </ul>
            </div>
        </Reveal>
    );
};

/* ── Marquee strip with all skills ──────────────────────── */
const allSkills = SKILLS.flatMap((g) => g.items);

const MarqueeStrip = () => (
    <div className="overflow-hidden mt-16 border-y border-white/8 py-3 relative">
        <div className="flex animate-marquee gap-8 whitespace-nowrap w-max">
            {[...allSkills, ...allSkills].map((skill, i) => (
                <span key={i} className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/25 flex items-center gap-4">
                    {skill}
                    <span className="text-white/15">·</span>
                </span>
            ))}
        </div>
    </div>
);

/* ── Main export ─────────────────────────────────────────── */
export const Skills = () => {
    return (
        <section
            id="skills"
            className="relative py-24 sm:py-32 border-b border-white/10"
            data-testid="skills-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    index="03"
                    kicker="Skills"
                    title="A working toolkit across code, data, and people."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SKILLS.map((group, idx) => (
                        <SkillCard key={group.category} group={group} idx={idx} />
                    ))}
                </div>

                <MarqueeStrip />
            </div>
        </section>
    );
};

export default Skills;
