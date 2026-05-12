import { ArrowLeft, Coffee } from "lucide-react";
import Link from "next/link";

export default async function ThoughtDetailPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const title = slug[slug.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <article className="max-w-4xl mx-auto">
        <header className="mb-10 border-b border-gray-200 dark:border-white/10 pb-10">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/thoughts" 
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">{title}</h1>
        </header>

        <div className="prose prose-lg prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-slate-400 leading-loose">
          <div className="p-8 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-500/20 text-center">
            <Coffee className="w-12 h-12 text-green-500 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Refining this thought...</h3>
            <p className="max-w-md mx-auto">I'm currently porting my personal reflections to this new platform. Stay tuned!</p>
          </div>
        </div>
      </article>
    </main>
  );
}
