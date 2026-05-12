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
  const [isOpen, setIsOpen] = useState(!item.collapsible);

  const details = item.details || [];
  const description = Array.isArray(item.description) ? item.description.join(' ') : item.description;

  return (
    <div className="relative pl-8 group mb-8 last:mb-0">
      <span className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-700 border border-white dark:border-slate-950 group-hover:bg-primary transition-colors ring-4 ring-white dark:ring-slate-950"></span>

      <div className="flex items-start gap-4 mb-4">
        {item.logo ? (
          <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-2 flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors">
            <img src={item.logo} alt={`${item.subtitle} logo`} className="w-full h-full object-contain rounded-lg" />
          </div>
        ) : (
          <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all ${item.bg || 'bg-gray-100 dark:bg-slate-800'} ${item.color || 'text-primary'}`}>
            <DynamicIcon name={item.icon} className="w-6 h-6" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h3>
          <p className="text-sm text-primary font-medium mb-0.5">{item.subtitle}</p>
          <p className="text-[10px] text-gray-500 dark:text-slate-500 font-mono uppercase tracking-widest">{item.date}</p>
        </div>
      </div>

      {(item as any).grade && (
        <div className="inline-flex items-center gap-1.5 mb-3 px-2 py-1 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
          <Award className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-bold text-gray-700 dark:text-slate-300">{(item as any).grade}</span>
        </div>
      )}

      {item.collapsible ? (
        <div className="mt-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30 transition-all select-none"
          >
            <span>{isOpen ? 'Hide Details' : 'View Details'}</span>
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-slate-300 mb-2 leading-relaxed">{description}</p>
                  <ul className="text-sm space-y-1">
                    {details.map((det, i) => (
                      <li key={i} className="text-gray-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-600 shrink-0"></span>
                        {det}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <>
          <p className="text-gray-700 dark:text-slate-300 mb-2 leading-relaxed">{description}</p>
          <ul className="text-sm space-y-1">
            {details.map((det, i) => (
              <li key={i} className="text-gray-600 dark:text-slate-400 flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-600 shrink-0"></span>
                {det}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
