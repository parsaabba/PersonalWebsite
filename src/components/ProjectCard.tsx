import { Project } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ExternalLink, BookOpen, Trophy, Star } from "lucide-react";

interface ProjectCardProps {
  item: Project;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  const projectPath = `/projects/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div className="group p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex gap-4 items-center">
          {item.customIcon ? (
            <img src={item.customIcon} alt={`${item.title} icon`} className="w-10 h-10 rounded-xl shadow-sm border border-border shrink-0 object-cover" />
          ) : (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-accent border border-border ${item.color || 'text-primary'}`}>
              <DynamicIcon name={item.icon || 'zap'} className="w-5 h-5" />
            </div>
          )}
          <div>
            <span className="font-bold text-foreground group-hover:text-primary transition-colors block leading-tight">{item.title}</span>
            {item.status && (
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary/80">{item.status}</span>
            )}
          </div>
        </div>
        {item.stars && item.stars !== 'Hackathon' && (
          <div className="flex items-center gap-1 text-muted text-xs font-medium">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            {item.stars}
          </div>
        )}
        {item.stars === 'Hackathon' && (
          <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 text-xs font-bold">
            <Trophy className="w-3.5 h-3.5" />
            Winner
          </div>
        )}
      </div>

      <p className="text-sm text-muted mb-6 line-clamp-2 leading-relaxed relative z-10">{item.desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {item.tech.map((t, i) => (
          <span key={i} className="text-[10px] font-bold text-muted bg-accent border border-border px-2 py-1 rounded-md">{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto relative z-10">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-bold rounded-xl hover:opacity-90 transition-all shadow-sm">
          Live Demo <ExternalLink className="w-3 h-3" />
        </a>
        <a href={projectPath} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-border text-foreground text-xs font-bold rounded-xl hover:bg-accent transition-all">
          Read More <BookOpen className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
