import { Project } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ExternalLink, BookOpen, Trophy, Star } from "lucide-react";

interface ProjectCardProps {
  item: Project;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  const projectPath = `/projects/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div className="group p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg dark:hover:bg-slate-800 transition-all h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-3 items-center">
          {item.customIcon ? (
            <img src={item.customIcon} alt={`${item.title} icon`} className="w-8 h-8 rounded-lg shadow-sm border border-black/5 dark:border-white/10 shrink-0 object-cover" />
          ) : (
            <DynamicIcon name={item.icon || 'zap'} className={`w-5 h-5 ${item.color || 'text-yellow-500'}`} />
          )}
          <span className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</span>
        </div>
        {item.status ? (
          <span className="text-[10px] uppercase font-bold tracking-wide text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">{item.status}</span>
        ) : item.stars ? (
          <div className="flex items-center gap-1 text-gray-500 dark:text-slate-500 text-xs">
            {item.stars === 'Hackathon' ? <Trophy className="w-3 h-3 text-yellow-500" /> : <Star className="w-3 h-3" />} 
            {item.stars}
          </div>
        ) : null}
      </div>
      <p className="text-sm text-gray-600 dark:text-slate-400 mb-4 line-clamp-2">{item.desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {item.tech.map((t, i) => (
          <span key={i} className="text-xs text-gray-500 dark:text-slate-500 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-auto">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all">
          Live Demo <ExternalLink className="w-3 h-3" />
        </a>
        <a href={projectPath} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-primary/30 text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-all">
          Read More <BookOpen className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
