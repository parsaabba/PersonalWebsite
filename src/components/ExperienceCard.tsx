"use client";

import { Experience } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { useState } from "react";
import { ChevronRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceCardProps {
  item: Experience;
}

export const ExperienceCard = ({ item }: ExperienceCardProps) => {
  const isCollapsible = item.collapsible === true;
  const [isOpen, setIsOpen] = useState(!isCollapsible);

  const details = item.details || [];
  const description = Array.isArray(item.description) ? item.description.join(" ") : item.description;
  const hasContent = details.length > 0 || description;

  return (
    <div className="relative pl-8 group mb-8 last:mb-0">
      <span className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors ring-4 ring-background" />

      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        {item.logo ? (
          <div className="shrink-0 w-12 h-12 rounded-xl bg-surface border border-border p-2 flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors">
            <img src={item.logo} alt={`${item.subtitle} logo`} className="w-full h-full object-contain rounded-lg" />
          </div>
        ) : (
          <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all ${item.bg || "bg-accent"} ${item.color || "text-primary"}`}>
            <DynamicIcon name={item.icon} className="w-6 h-6" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
          <p className="text-sm text-primary font-semibold mb-0.5">{item.subtitle}</p>
          <p className="text-[10px] text-muted font-mono uppercase tracking-widest">{item.date}</p>
        </div>
      </div>

      {/* Grade badge */}
      {(item as any).grade && (
        <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-md bg-accent border border-border">
          <Award className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-bold text-foreground/80">{(item as any).grade}</span>
        </div>
      )}

      {/* Body */}
      {hasContent && (
        <div>
          {isCollapsible && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-foreground/80 rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary border border-border transition-all select-none mb-2"
            >
              {isOpen ? "Hide Details" : "View Details"}
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
            </button>
          )}

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={isCollapsible ? { height: 0, opacity: 0 } : false}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className={isCollapsible ? "pt-2 space-y-2" : "space-y-2"}>
                  {description && (
                    <p className="text-sm text-muted leading-relaxed">{description}</p>
                  )}
                  {details.length > 0 && (
                    <ul className="space-y-1.5">
                      {details.map((det, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-3">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          <span className="leading-relaxed">{det}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
