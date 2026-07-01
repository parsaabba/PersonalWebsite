import { type LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  action?: React.ReactNode;
  index?: string;
}

export function SectionHeading({ icon: Icon, iconColor = "text-primary", title, action, index }: Props) {
  return (
    <div className="flex items-end justify-between mb-8 pb-4 border-b border-border">
      <div>
        {index && <p className="section-label mb-1.5">{index}</p>}
        <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent border border-border">
            <Icon className={`w-4 h-4 ${iconColor}`} />
          </span>
          {title}
        </h2>
      </div>
      {action && <div className="shrink-0 ml-4">{action}</div>}
    </div>
  );
}
