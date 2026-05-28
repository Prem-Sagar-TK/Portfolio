import { ArrowUpRight, GitBranch } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PROJECTS } from "../lib/data";

const ProjectCard = ({ project }) => {
    return (
        <Reveal className={`group ${project.span || ""}`}>
            <article
                className="relative h-full border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/30 transition-colors duration-300"
                data-testid={`project-card-${project.id}`}
            >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-30 group-hover:scale-[1.02] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                        {project.index} / Project
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-white">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors"
                                aria-label={`${project.title} GitHub`}
                                data-testid={`project-${project.id}-github`}
                            >
                                <GitBranch className="w-4 h-4" strokeWidth={1.5} />
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors"
                                aria-label={`${project.title} demo`}
                                data-testid={`project-${project.id}-demo`}
                            >
                                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-white/60 leading-relaxed">
                        {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-1.5 mt-1">
                        {project.stack.map((s) => (
                            <li
                                key={s}
                                className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-white/15 text-white/70"
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </Reveal>
    );
};

export const Projects = () => {
    return (
        <section
            id="projects"
            className="relative py-24 sm:py-32 border-b border-white/10"
            data-testid="projects-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    index="04"
                    kicker="Selected Work"
                    title="Projects that mix research curiosity with engineering practice."
                    description="A small, honest selection — algorithms, full-stack systems, and explainable AI."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
