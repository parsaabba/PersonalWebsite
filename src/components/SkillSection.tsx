import { SkillCategory } from "@/lib/data";

interface SkillSectionProps {
  item: SkillCategory;
}

export const SkillSection = ({ item }: SkillSectionProps) => {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="w-1 h-4 bg-primary rounded-full"></span>
        {item.category}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {item.items.map((skill, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 bg-surface text-foreground/80 rounded-lg text-sm font-semibold border border-border hover:border-primary/50 transition-all cursor-default hover:text-primary hover:shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
