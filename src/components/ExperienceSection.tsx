"use client";

import { useState } from "react";
import { Experience } from "@/lib/data";
import { ExperienceCard } from "./ExperienceCard";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceSectionProps {
  items: Experience[];
}

export const ExperienceSection = ({ items }: ExperienceSectionProps) => {
  const featured = items.filter(item => item.subtitle === "Diamond AI");
  const other = items.filter(item => item.subtitle !== "Diamond AI");
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="space-y-4">
      <div className="border-l-2 border-border ml-3 relative">
        {featured.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              {other.map((item, i) => (
                <ExperienceCard key={i} item={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="ml-3 pl-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-surface hover:bg-muted/5 text-foreground border border-border rounded-xl text-sm font-bold transition-all shadow-sm group cursor-pointer"
        >
          <span>{showAll ? "Show Less" : "Show Older Experience"}</span>
          <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${showAll ? "rotate-90" : ""}`} />
        </button>
      </div>
    </div>
  );
};
