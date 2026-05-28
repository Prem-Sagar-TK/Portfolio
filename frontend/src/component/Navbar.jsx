import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../lib/data";
import avatarUrl from "@/assets/avatar.png";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled
                ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
                }`}
            data-testid="navbar"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="#hero"
                        className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight text-white group"
                        data-testid="nav-logo"
                    >
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-colors duration-300">
                            <img
                                src={avatarUrl}
                                alt="Prem Sagar T.K"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <span>
                            Prem Sagar<span className="text-white/60"> TK</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                            >
                                {l.label}
                            </a>
                        ))}
                        {/*<a
                            href={`mailto:${PROFILE.email}`}
                            className="text-xs font-mono uppercase tracking-wider px-4 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                            data-testid="nav-cta-email"
                        >
                            Get in touch
                        </a>*/}
                    </nav>

                    <button
                        type="button"
                        className="md:hidden p-2 text-white"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        data-testid="nav-mobile-toggle"
                    >
                        {open ? <X className="w-5 h-5" /> : < Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden overflow-hidden border-t border-white/10 bg-[#050505]"
                        data-testid="nav-mobile-panel"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {NAV_LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-base text-white/80 hover:text-white"
                                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
