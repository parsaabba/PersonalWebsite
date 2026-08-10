import { getProjectBySlug } from "@/lib/data";
import { DynamicIcon } from "@/components/DynamicIcon";
import { ExternalLink, Github, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <article className="max-w-4xl mx-auto">
        <header className="mb-10 border-b border-gray-200 dark:border-white/10 pb-10">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/#current-projects" 
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            {project.status && (
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                {project.status}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 mb-6">
             {project.customIcon ? (
              <img src={project.customIcon} alt={`${project.title} icon`} className="w-12 h-12 rounded-xl shadow-md border border-black/5 dark:border-white/10 shrink-0 object-cover" />
            ) : (
              <DynamicIcon name={project.icon || 'zap'} className={`w-12 h-12 ${project.color || 'text-yellow-500'}`} />
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-slate-400 leading-relaxed mb-8">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              View Live Project <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://github.com/parsaabbasian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all">
              Source Code <Github className="w-4 h-4" />
            </a>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted leading-loose">
          <div className="p-8 rounded-2xl bg-accent/50 border border-border text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Detailed Case Study Coming Soon</h3>
            <p className="max-w-md mx-auto">I'm currently polishing the documentation for this project. Check back soon for the full technical breakdown, architecture overview, and GitHub README integration.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
