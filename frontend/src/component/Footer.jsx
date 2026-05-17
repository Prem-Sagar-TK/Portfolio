import { PROFILE } from "../lib/data";

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-white/10 py-10" data-testid="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                        &copy; {year} — {PROFILE.name}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                        Designed &amp; built with care.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
