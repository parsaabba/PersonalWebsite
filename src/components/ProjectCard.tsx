import { Project } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ExternalLink, BookOpen, Trophy, Star } from "lucide-react";

interface ProjectCardProps {
  item: Project;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  const projectPath = `/projects/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div className="card card-interactive p-5 h-full flex flex-col group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          {item.customIcon ? (
            <img src={item.customIcon} alt={`${item.title} icon`} className="w-10 h-10 rounded-lg border border-border shrink-0 object-cover" />
          ) : (
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-accent border border-border ${item.color || 'text-primary'}`}>
              <DynamicIcon name={item.icon || 'zap'} className="w-5 h-5" />
            </div>
          )}
          <div>
            <span className="font-display text-lg text-foreground group-hover:text-primary transition-colors block leading-tight">{item.title}</span>
            {item.status && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-[10px] uppercase tracking-wider text-primary/70">{item.status}</span>
            )}
          </div>
        </div>
        {item.stars && item.stars !== 'Hackathon' && (
          <div className="flex items-center gap-1 text-muted text-xs">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            {item.stars}
          </div>
        )}
        {item.stars === 'Hackathon' && (
          <div className="flex items-center gap-1 text-secondary text-xs font-medium">
            <Trophy className="w-3.5 h-3.5" />
            Winner
          </div>
        )}
      </div>

      <p className="text-sm text-muted mb-5 line-clamp-2 leading-relaxed">{item.desc}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {item.tech.map((t, i) => (
          <span key={i} className="text-[10px] font-semibold text-muted bg-accent border border-border px-2 py-0.5 rounded-md">{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary text-background text-xs font-bold rounded-lg hover:opacity-90 transition-all">
          Live Demo <ExternalLink className="w-3 h-3" />
        </a>
        <a href={projectPath} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-border text-foreground text-xs font-bold rounded-lg hover:bg-accent transition-all">
          Read More <BookOpen className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
