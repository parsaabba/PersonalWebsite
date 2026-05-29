import { 
  GraduationCap, 
  School, 
  Settings, 
  Microscope, 
  Briefcase, 
  HandHelping, 
  HeartHandshake, 
  BookOpen, 
  Users, 
  Github, 
  MapPin, 
  Sigma, 
  CarFront, 
  Eye, 
  BarChart2, 
  FileBadge, 
  Network, 
  GitBranch, 
  Box, 
  Code2, 
  Server, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  Database, 
  Rocket, 
  Cloud, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Download,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Award,
  Zap,
  Mail,
  Linkedin,
  Send,
  Coffee,
  Diamond,
  LucideProps
} from "lucide-react";

const KaggleIcon = ({ className, size, ...props }: LucideProps) => (
  <svg
    className={className}
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.117-.119.281-.18.445-.18h3.332c.164 0 .307.085.393.226.086.14.095.313.023.461l-5.32 10.717c-.06.12-.18.197-.311.197H8.847c-.234 0-.351-.117-.351-.352V13.51l6.203 7.892c.117.149.281.233.445.233h3.139c.164 0 .281.049.304.141l.07.283Z" />
  </svg>
);

export const IconMap: Record<string, React.FC<LucideProps>> = {
  "graduation-cap": GraduationCap,
  "school": School,
  "settings": Settings,
  "microscope": Microscope,
  "briefcase": Briefcase,
  "hand-helping": HandHelping,
  "heart-handshake": HeartHandshake,
  "book-open": BookOpen,
  "users": Users,
  "github": Github,
  "map-pin": MapPin,
  "sigma": Sigma,
  "car-front": CarFront,
  "eye": Eye,
  "bar-chart-2": BarChart2,
  "file-badge": FileBadge,
  "network": Network,
  "git-branch": GitBranch,
  "box": Box,
  "code-2": Code2,
  "server": Server,
  "cpu": Cpu,
  "brain-circuit": BrainCircuit,
  "layers": Layers,
  "database": Database,
  "rocket": Rocket,
  "cloud": Cloud,
  "sparkles": Sparkles,
  "external-link": ExternalLink,
  "chevron-right": ChevronRight,
  "download": Download,
  "file-text": FileText,
  "arrow-up-right": ArrowUpRight,
  "arrow-right": ArrowRight,
  "award": Award,
  "zap": Zap,
  "mail": Mail,
  "linkedin": Linkedin,
  "send": Send,
  "coffee": Coffee,
  "diamond": Diamond,
  "kaggle": KaggleIcon,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const Icon = IconMap[name] || Zap;
  return <Icon {...props} />;
};
