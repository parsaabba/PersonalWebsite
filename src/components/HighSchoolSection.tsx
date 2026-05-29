"use client";

import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "@/lib/data";

interface HighSchoolSectionProps {
  items: Experience[];
}

export const HighSchoolSection = ({ items }: HighSchoolSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-12 ml-3">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-muted flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-muted/60" /> High School Background
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/60 text-muted hover:text-primary rounded-lg text-xs font-bold hover:bg-primary/10 border border-border/80 transition-all select-none shadow-sm"
        >
          <span>{isExpanded ? "Show Less" : "Read More"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-l-2 border-border pt-2 pb-1">
              {items.map((item, i) => (
                <ExperienceCard key={i} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
