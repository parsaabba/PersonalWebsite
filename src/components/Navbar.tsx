"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 16) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 4) {
        setVisible(false);
        setMobileMenuOpen(false);
      } else if (currentY < lastScrollY.current - 4) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/current-projects" },
    { name: "Blog", href: "/blogs" },
    { name: "Learning", href: "/learning" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-5 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between bg-surface/90 backdrop-blur-xl border border-border rounded-2xl px-5 py-3 shadow-sm">
        {!isHome ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-display">Back to Home</span>
          </Link>
        ) : (
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            PA<span className="text-primary">.</span>
          </Link>
        )}

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && visible && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-6xl mt-2 bg-surface/95 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-base font-semibold text-foreground hover:text-primary hover:bg-accent transition-colors py-3 px-4 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
