import { Certificate } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  item: Certificate;
}

export const CertificateCard = ({ item }: CertificateCardProps) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`p-2 rounded-xl bg-accent ${item.color} group-hover:scale-110 transition-transform duration-300 border border-border`}>
          <DynamicIcon name={item.icon} className="w-6 h-6" />
        </div>
        <ExternalLink className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
      </div>
      <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors relative z-10">{item.title}</h4>
      <p className="text-xs text-muted relative z-10">{item.org} • {item.date}</p>
    </a>
  );
};
