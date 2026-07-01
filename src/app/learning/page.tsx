import { learningData, learningInsightsData } from "@/lib/data";
import { LearningCard } from "@/components/LearningCard";
import { LearningInsightCard } from "@/components/LearningInsightCard";
import { BookOpen, Lightbulb } from "lucide-react";

export default function LearningPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20 space-y-20">
      {/* Header */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Learning & Growth</h1>
        <p className="text-lg text-muted max-w-2xl">
          A collection of my technical deep dives, conceptual notes, and the structured paths I'm following to master new technologies.
        </p>
      </section>

      {/* Technical Insights Section */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Technical Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningInsightsData.map((item, i) => (
            <LearningInsightCard key={i} item={item} />
          ))}
        </div>
      </section>

      {/* Structured Journey Section */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Structured Journey</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningData.map((item, i) => (
            <LearningCard key={i} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
