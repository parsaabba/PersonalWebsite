import { Blog } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  item: Blog;
}

export const BlogCard = ({ item }: BlogCardProps) => {
  return (
    <a href={`/${item.link}`} className="card card-interactive p-5 cursor-pointer h-full flex flex-col group">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {item.tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-accent border border-border text-muted">{tag}</span>
        ))}
      </div>

      <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
      <p className="text-sm text-muted line-clamp-2 leading-relaxed flex-1">{item.desc}</p>

      <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all">
        Read Article <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </a>
  );
};
