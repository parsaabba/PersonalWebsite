import { Thought } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface ThoughtCardProps {
  item: Thought;
}

export const ThoughtCard = ({ item }: ThoughtCardProps) => {
  return (
    <a href={`/${item.link}`} className="card card-interactive block p-4 group">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-display text-base text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[10px] text-muted uppercase ml-2 shrink-0">{item.date}</span>
      </div>
      <p className="text-xs text-muted line-clamp-2 mb-3">{item.desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-medium text-primary group-hover:gap-2.5 transition-all uppercase tracking-wider">
        Read More <ArrowRight className="w-3 h-3" />
      </div>
    </a>
  );
};
