import { Blog } from "@/lib/data";

interface BlogCardProps {
  item: Blog;
}

export const BlogCard = ({ item }: BlogCardProps) => {
  return (
    <a href={`/${item.link}`} className="group p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer h-full flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
      
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {item.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-accent text-muted group-hover:text-primary transition-colors">{tag}</span>
        ))}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">{item.title}</h3>
      <p className="text-sm text-muted line-clamp-2 leading-relaxed relative z-10">{item.desc}</p>
    </a>
  );
};
