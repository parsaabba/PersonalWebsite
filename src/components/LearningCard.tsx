import { LearningItem } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ArrowRight } from "lucide-react";

interface LearningCardProps {
  item: LearningItem;
}

export const LearningCard = ({ item }: LearningCardProps) => {
  return (
    <a href={`/${item.link}`} className="card card-interactive block p-4 group">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg bg-accent ${item.color} border border-border`}>
          <DynamicIcon name={item.icon} className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-display text-base text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
          <span className={`text-[10px] font-bold uppercase tracking-wider text-[10px] uppercase tracking-wider ${item.status === 'Completed' ? 'text-primary' : 'text-secondary'}`}>
            {item.status}
          </span>
        </div>
      </div>
      <p className="text-xs text-muted line-clamp-1 mb-3">{item.desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-medium text-primary group-hover:gap-2.5 transition-all uppercase tracking-wider">
        View Journey <ArrowRight className="w-3 h-3" />
      </div>
    </a>
  );
};
