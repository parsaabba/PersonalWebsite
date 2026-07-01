import { SkillCategory } from "@/lib/data";

interface SkillSectionProps {
  item: SkillCategory;
}

export const SkillSection = ({ item }: SkillSectionProps) => {
  return (
    <div className="card-flat p-5">
      <h3 className="text-xs font-bold uppercase tracking-wider text-muted uppercase tracking-wider mb-4">
        {item.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {item.items.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-accent text-foreground/80 rounded-lg text-sm border border-border hover:border-primary/40 hover:text-primary transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
