import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-border/50 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white font-bold text-[10px] tracking-tighter">
                        O
                    </div>
                    <span className="font-bold tracking-widest text-xs">ORIGIN AI</span>
                </div>

                <div className="flex gap-6 text-sm text-muted">
                    <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                    <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                </div>

                <div className="text-xs text-muted font-mono">
                    &copy; {new Date().getFullYear()} ORIGIN AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

