import { Blog } from "@/lib/data";

interface BlogCardProps {
  item: Blog;
}

export const BlogCard = ({ item }: BlogCardProps) => {
  return (
    <a href={`/${item.link}`} className="group p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all cursor-pointer h-full flex flex-col">
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white">{tag}</span>
        ))}
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
      <p className="text-sm text-gray-600 dark:text-slate-400 line-clamp-2">{item.desc}</p>
    </a>
  );
};
