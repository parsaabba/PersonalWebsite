"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {!isHome ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        ) : (
          <div className="text-xl font-bold text-white">
            Parsa <span className="text-primary">Abbasian</span>
          </div>
        )}
        <div className="flex items-center gap-6">
          <Link href="/#experience" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Experience</Link>
          <Link href="/#skills" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Skills</Link>
          <Link href="/current-projects" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Projects</Link>
          <Link href="/blogs" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Blog</Link>
        </div>
      </div>
    </nav>
  );
};
