"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {!isHome ? (
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        ) : (
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Parsa <span className="text-primary">Abbasian</span>
          </div>
        )}
        <div className="flex items-center gap-6">
          <Link href="/#experience" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">Experience</Link>
          <Link href="/#skills" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">Skills</Link>
          <Link href="/current-projects" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">Projects</Link>
          <Link href="/blogs" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
