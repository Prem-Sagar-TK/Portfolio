import { PROFILE } from "../lib/data";
import avatarUrl from "@/assets/avatar.png";

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-white/10 py-10" data-testid="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10">
                            <img
                                src={avatarUrl}
                                alt="Prem Sagar T.K"
                                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                            &copy; {year} — {PROFILE.name}
                        </div>
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
