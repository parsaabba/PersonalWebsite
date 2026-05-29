import { LearningInsight } from "@/lib/data";
import { ArrowRight, Lightbulb } from "lucide-react";

interface LearningInsightCardProps {
  item: LearningInsight;
}

export const LearningInsightCard = ({ item }: LearningInsightCardProps) => {
  return (
    <a href={`/${item.link}`} className="group block p-4 rounded-xl border border-border bg-surface hover:border-primary/30 hover:bg-accent transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 rounded bg-primary/10 text-primary group-hover:scale-110 transition-transform">
          <Lightbulb className="w-3 h-3" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted">{item.category || 'Learning'}</span>
      </div>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
        <span className="text-[10px] text-muted/60 font-mono uppercase ml-2 whitespace-nowrap">{item.date}</span>
      </div>
      <p className="text-xs text-muted line-clamp-2 mb-3">{item.desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-bold text-primary group-hover:gap-3 transition-all uppercase tracking-wider">
        Read Article <ArrowRight className="w-3 h-3" />
      </div>
    </a>
  );
};
