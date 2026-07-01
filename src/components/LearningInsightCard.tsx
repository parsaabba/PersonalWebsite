import { LearningInsight } from "@/lib/data";
import { ArrowRight, Lightbulb } from "lucide-react";

interface LearningInsightCardProps {
  item: LearningInsight;
}

export const LearningInsightCard = ({ item }: LearningInsightCardProps) => {
  return (
    <a href={`/${item.link}`} className="card card-interactive block p-4 group">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          <Lightbulb className="w-3 h-3" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[10px] uppercase tracking-wider text-muted">{item.category || 'Learning'}</span>
      </div>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-display text-base text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[10px] text-muted uppercase ml-2 whitespace-nowrap">{item.date}</span>
      </div>
      <p className="text-xs text-muted line-clamp-2 mb-3">{item.desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-medium text-primary group-hover:gap-2.5 transition-all uppercase tracking-wider">
        Read Article <ArrowRight className="w-3 h-3" />
      </div>
    </a>
  );
};
