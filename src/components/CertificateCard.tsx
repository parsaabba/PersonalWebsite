import { Certificate } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  item: Certificate;
}

export const CertificateCard = ({ item }: CertificateCardProps) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
          <DynamicIcon name={item.icon} className="w-6 h-6" />
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 dark:text-slate-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
      </div>
      <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
      <p className="text-xs text-gray-500 dark:text-slate-500">{item.org} • {item.date}</p>
    </a>
  );
};
