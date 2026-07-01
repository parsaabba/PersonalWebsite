"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-accent border border-border hover:border-primary/40 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <div className="hidden dark:block">
        <Moon className="h-4 w-4 text-primary" />
      </div>
      <div className="block dark:hidden">
        <Sun className="h-4 w-4 text-primary" />
      </div>
    </button>
  );
}
