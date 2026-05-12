import { SkillCategory } from "@/lib/data";

interface SkillSectionProps {
  item: SkillCategory;
}

export const SkillSection = ({ item }: SkillSectionProps) => {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-xs font-bold text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="w-1 h-4 bg-primary rounded-full"></span>
        {item.category}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {item.items.map((skill, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-md text-sm font-medium border border-gray-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default hover:text-primary dark:hover:text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
