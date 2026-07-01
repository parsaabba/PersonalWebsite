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
  const hasContent = details.length > 0;

  return (
    <div className="group mb-4 last:mb-0">
      <div className="card p-5 card-interactive">
        <div className="flex items-start gap-4 mb-3">
          {item.logo ? (
            <div className="shrink-0 w-10 h-10 rounded-lg bg-accent border border-border p-1.5 flex items-center justify-center">
              <img src={item.logo} alt={`${item.subtitle} logo`} className="w-full h-full object-contain rounded" />
            </div>
          ) : (
            <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border border-border ${item.bg || "bg-accent"} ${item.color || "text-primary"}`}>
              <DynamicIcon name={item.icon} className="w-4 h-4" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
            <p className="text-sm text-primary font-semibold">{item.subtitle}</p>
            <p className="text-[10px] text-muted font-mono uppercase tracking-widest mt-0.5">{item.date}</p>
          </div>
        </div>

        {(item as any).grade && (
          <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-md bg-primary/8 border border-primary/20">
            <Award className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-foreground/80">{(item as any).grade}</span>
          </div>
        )}

        {hasContent && (
          <div>
            {isCollapsible && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-1.5 bg-accent text-foreground/80 rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary border border-border transition-all select-none mb-2"
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
                  <ul className={isCollapsible ? "pt-2 space-y-1.5" : "space-y-1.5"}>
                    {details.map((det, i) => (
                      <li key={i} className="text-sm text-muted flex items-center gap-3 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="truncate" title={det}>{det}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};
