import { Certificate } from "@/lib/data";
import { DynamicIcon } from "./DynamicIcon";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  item: Certificate;
}

export const CertificateCard = ({ item }: CertificateCardProps) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="card card-interactive block p-4 group">
      <div className="flex justify-between items-start mb-3">
        <div className={`p-2 rounded-lg bg-accent ${item.color} border border-border`}>
          <DynamicIcon name={item.icon} className="w-5 h-5" />
        </div>
        <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
      </div>
      <h4 className="font-display text-base text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
      <p className="text-[10px] font-bold uppercase tracking-wider text-[10px] text-muted uppercase tracking-wider">{item.org} · {item.date}</p>
    </a>
  );
};
