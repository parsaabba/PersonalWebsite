import { Blog } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  item: Blog;
}

export const BlogCard = ({ item }: BlogCardProps) => {
  return (
    <a href={`/${item.link}`} className="group p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer h-full flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />

      <div className="flex flex-wrap gap-2 mb-3 relative z-10">
        {item.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-accent border border-border text-muted group-hover:border-primary/30 transition-colors">{tag}</span>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10 leading-snug">{item.title}</h3>
      <p className="text-sm text-muted line-clamp-2 leading-relaxed relative z-10 flex-1">{item.desc}</p>

      <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-3 transition-all relative z-10">
        Read Article <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </a>
  );
};
