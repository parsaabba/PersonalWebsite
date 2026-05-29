"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        // We use a helper to toggle since we can't rely on the 'theme' state instantly
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-border shadow-sm hover:border-primary/50 transition-all duration-300 overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="flex items-center justify-center">
        {/* Dark mode icon (visible when .dark class is on html) */}
        <div className="hidden dark:block">
          <Moon className="h-5 w-5 text-primary fill-primary/10" />
        </div>
        {/* Light mode icon (visible when .dark class is NOT on html) */}
        <div className="block dark:hidden">
          <Sun className="h-5 w-5 text-primary fill-yellow-400/20" />
        </div>
      </div>
      
      {/* Premium hover effect: subtle inner glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </button>
  );
}
