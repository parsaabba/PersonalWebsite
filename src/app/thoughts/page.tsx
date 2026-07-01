import { thoughtData } from "@/lib/data";
import { ThoughtCard } from "@/components/ThoughtCard";

export default function ThoughtsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Thoughts on Life</h1>
      <p className="text-gray-600 dark:text-slate-400 mb-12">Personal insights and lessons learned along the way.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {thoughtData.map((thought, i) => (
          <ThoughtCard key={i} item={thought} />
        ))}
      </div>
    </main>
  );
}
