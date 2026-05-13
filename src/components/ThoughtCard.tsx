import { Thought } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface ThoughtCardProps {
  item: Thought;
}

export const ThoughtCard = ({ item }: ThoughtCardProps) => {
  return (
    <a href={`/${item.link}`} className="group block p-4 rounded-xl border border-border bg-surface hover:border-primary/30 hover:bg-accent transition-all duration-300">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
        <span className="text-[10px] text-muted/60 font-mono uppercase">{item.date}</span>
      </div>
      <p className="text-xs text-muted line-clamp-2 mb-3">{item.desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-bold text-primary group-hover:gap-3 transition-all uppercase tracking-wider">
        Read More <ArrowRight className="w-3 h-3" />
      </div>
    </a>
  );
};
