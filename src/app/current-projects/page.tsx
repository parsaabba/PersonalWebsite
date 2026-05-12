import { currentProjectData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function CurrentProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Current Projects</h1>
      <p className="text-gray-600 dark:text-slate-400 mb-12">What I'm currently building and maintaining.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjectData.map((project, i) => (
          <ProjectCard key={i} item={project} />
        ))}
      </div>
    </main>
  );
}
