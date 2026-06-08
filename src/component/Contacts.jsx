import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, GitBranch, Briefcase, Mail, Send } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PROFILE } from "../lib/data";

export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const onChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill in all fields.");
            return;
        }
        setSubmitting(true);
        try {
            const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
            const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
            window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
            toast.success("Opening your email client…");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            toast.error("Could not open email client. Please email me directly.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative py-24 sm:py-32"
            data-testid="contact-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    index="06"
                    kicker="Connect"
                    title="Let's Connect"
                    description="Open to internships, research collaborations, and interesting problems."
                />

                <div className="grid grid-cols-12 gap-y-12 gap-x-8">
                    {/* Form 
                    <div className="col-span-12 lg:col-span-7">
                        <Reveal>
                            <form
                                onSubmit={onSubmit}
                                className="border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 flex flex-col gap-5"
                                data-testid="contact-form"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <label className="flex flex-col gap-2">
                                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                                            Name
                                        </span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={onChange}
                                            className="bg-transparent border-b border-white/15 focus:border-white text-white py-2 outline-none transition-colors"
                                            placeholder="Your name"
                                            data-testid="contact-input-name"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                                            Email
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={onChange}
                                            className="bg-transparent border-b border-white/15 focus:border-white text-white py-2 outline-none transition-colors"
                                            placeholder="you@domain.com"
                                            data-testid="contact-input-email"
                                        />
                                    </label>
                                </div>

                                <label className="flex flex-col gap-2">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                                        Message
                                    </span>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={onChange}
                                        rows={5}
                                        className="bg-transparent border border-white/15 focus:border-white text-white p-3 outline-none resize-none transition-colors"
                                        placeholder="Briefly tell me what you're working on…"
                                        data-testid="contact-input-message"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="group inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 font-medium text-sm hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed self-start"
                                    data-testid="contact-submit-btn"
                                >
                                    {submitting ? "Sending…" : "Send message"}
                                    <Send
                                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                        strokeWidth={1.5}
                                    />
                                </button>
                            </form>
                        </Reveal>
                    </div>*/}

                    {/* Direct links */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                        <Reveal delay={0.05}>
                            <a
                                href={`mailto:${PROFILE.email}`}
                                className="group flex items-center justify-between border border-white/10 hover:border-white/30 p-5 bg-[#0a0a0a] transition-colors"
                                data-testid="contact-link-email"
                            >
                                <div className="flex items-center gap-4">
                                    <Mail className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                                    <div>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                                            Email
                                        </div>
                                        <div className="text-white text-sm">{PROFILE.email}</div>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                                    strokeWidth={1.5}
                                />
                            </a>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <a
                                href={PROFILE.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-between border border-white/10 hover:border-white/30 p-5 bg-[#0a0a0a] transition-colors"
                                data-testid="contact-link-linkedin"
                            >
                                <div className="flex items-center gap-4">
                                    <Briefcase className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                                    <div>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                                            LinkedIn
                                        </div>
                                        <div className="text-white text-sm">/in/prem-sagar-tk</div>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    className="w-4 h-4 text-white/40 group-hover:text-white transition-all"
                                    strokeWidth={1.5}
                                />
                            </a>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <a
                                href={PROFILE.github}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-between border border-white/10 hover:border-white/30 p-5 bg-[#0a0a0a] transition-colors"
                                data-testid="contact-link-github"
                            >
                                <div className="flex items-center gap-4">
                                    <GitBranch className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                                    <div>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                                            GitHub
                                        </div>
                                        <div className="text-white text-sm">@premsagartk</div>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    className="w-4 h-4 text-white/40 group-hover:text-white transition-all"
                                    strokeWidth={1.5}
                                />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
