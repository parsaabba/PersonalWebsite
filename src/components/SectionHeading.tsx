import { type LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  action?: React.ReactNode;
}

export function SectionHeading({ icon: Icon, iconColor = "text-primary", title, action }: Props) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        {title}
      </h2>
      {action && <div>{action}</div>}
    </div>
  );
}
