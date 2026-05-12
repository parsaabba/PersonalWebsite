import { learningData } from "@/lib/data";
import { LearningCard } from "@/components/LearningCard";

export default function LearningPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Learning Journey</h1>
      <p className="text-gray-600 dark:text-slate-400 mb-12">Tracking my progress through various technologies and concepts.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningData.map((item, i) => (
          <LearningCard key={i} item={item} />
        ))}
      </div>
    </main>
  );
}
