import { LearningItem } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ArrowRight } from "lucide-react";

interface LearningCardProps {
  item: LearningItem;
}

export const LearningCard = ({ item }: LearningCardProps) => {
  return (
    <a href={`/${item.link}`} className="group block p-4 rounded-xl border border-gray-100 dark:border-slate-800/50 hover:border-primary/30 dark:hover:border-primary/30 hover:bg-gray-50 dark:hover:bg-primary/5 transition-all">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg bg-gray-100 dark:bg-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
          <DynamicIcon name={item.icon} className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h4>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${item.status === 'Completed' ? 'text-emerald-500' : 'text-primary'}`}>
            {item.status}
          </span>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-slate-500 line-clamp-1 mb-3">{item.desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-bold text-primary group-hover:gap-3 transition-all uppercase tracking-wider">
        View Journey <ArrowRight className="w-3 h-3" />
      </div>
    </a>
  );
};
