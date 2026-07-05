import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SweBenchPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <article className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 p-2 rounded-full bg-accent text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

        {/* Hero */}
        <div className="border-l-[3px] border-foreground pl-6 mb-10">
          <p className="text-[11px] tracking-widest uppercase text-muted/60 mb-2">
            Paper breakdown &nbsp;·&nbsp; AI &amp; Software Engineering
          </p>
          <h1 className="text-[28px] font-semibold text-foreground leading-tight mb-2">
            What I learned reading SWE-bench
          </h1>
          <p className="text-[15px] text-muted leading-relaxed">
            Can AI actually fix real bugs? Researchers put language models to the test — and the results were humbling.
          </p>
        </div>

        <p className="text-xs text-muted/60 mb-10">
          Published on my learning blog &nbsp;·&nbsp; ICLR 2024 paper by Jimenez et al., Princeton
        </p>

        <div className="space-y-6 text-[15px] text-muted leading-[1.85]">

          <p>
            Most AI coding benchmarks give models <strong className="text-foreground font-medium">self-contained puzzle problems</strong> — write a function that reverses a list, solve this algorithm challenge. But real software engineering is nothing like that. A real bug might be hiding across a dozen files in a 400,000-line codebase, and fixing it requires understanding how everything fits together.
          </p>

          <p>
            This paper introduces <strong className="text-foreground font-medium">SWE-bench</strong> — a benchmark built from <strong className="text-foreground font-medium">2,294 real GitHub issues</strong> across 12 popular Python projects like Django, scikit-learn, and matplotlib. Instead of toy problems, models get an actual bug report and the full codebase, and are scored by whether their fix passes real unit tests.
          </p>

          <blockquote className="italic text-[18px] text-foreground border-t border-b border-border py-5 my-2 leading-relaxed">
            "The best-performing model, Claude 2, was only able to resolve 1.96% of the issues."
          </blockquote>

          <p>
            The researchers didn't create problems by hand — they scraped GitHub automatically using a 3-stage pipeline: first collecting around 90,000 pull requests, then filtering down to only those that closed a real issue <em>and</em> added tests, and finally running those tests to confirm each fix actually worked. After all that filtering, <strong className="text-foreground font-medium">90,000 PRs became 2,294 high-quality tasks.</strong>
          </p>

          <p>
            These aren't small codebases either. A typical task involves a codebase with around <strong className="text-foreground font-medium">3,010 files</strong> and <strong className="text-foreground font-medium">438,000 lines of code</strong>. The model is expected to find the right files, understand how they interact, and produce a correctly formatted <code className="text-sm bg-accent px-1.5 py-0.5 rounded">patch</code> — all without being told where to look. The gold-standard fixes touch an average of 1.7 files across about 3 functions.
          </p>

          <p className="text-[11px] tracking-widest uppercase text-muted/60 pt-2">Model performance</p>

          <div className="space-y-2.5">
            {[
              { model: "Claude 2", pct: "1.96%", width: "100%" },
              { model: "SWE-Llama 13b", pct: "0.70%", width: "36%" },
              { model: "SWE-Llama 7b", pct: "0.70%", width: "36%" },
              { model: "ChatGPT-3.5", pct: "0.17%", width: "9%" },
              { model: "GPT-4", pct: "0.00%", width: "2%" },
            ].map(({ model, pct, width }) => (
              <div key={model} className="flex items-center gap-2.5">
                <span className="text-[13px] text-muted w-[110px] shrink-0">{model}</span>
                <div className="flex-1 h-1.5 bg-accent rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-foreground" style={{ width }} />
                </div>
                <span className="text-[13px] font-medium text-foreground w-[38px] text-right shrink-0">{pct}</span>
              </div>
            ))}
          </div>

          <p>
            These numbers are low — intentionally so. That's the whole point: to expose the real gap between what AI can do on toy problems versus real engineering. Using BM25 retrieval to feed relevant files as context, the best model resolved fewer than 2% of issues.
          </p>

          <p>
            A few findings surprised me. First, <strong className="text-foreground font-medium">more context didn't help</strong> — models actually did <em>worse</em> with larger context windows. Extra code distracted them rather than helping them localize the bug. Second, <strong className="text-foreground font-medium">generated patches were consistently simpler</strong> than the gold fixes, adding and removing far fewer lines. Models solved the surface problem but missed edge cases and style consistency. Third, performance on older versus newer bugs was nearly identical, which rules out the theory that models are just "remembering" solutions from training data. And finally, bugs that relied on screenshots to explain were simply out of reach for text-only models — a real gap in multimodal reasoning.
          </p>

          <p>
            Reading this paper changed how I think about AI coding tools. Tools like GitHub Copilot are great at completing functions or writing boilerplate, but SWE-bench shows they're nowhere near being able to autonomously navigate and fix a production codebase.
          </p>

          <p>
            The researchers also built <strong className="text-foreground font-medium">SWE-Llama</strong>, a fine-tuned open-source model for this specific task. It's competitive with Claude 2 despite being much smaller — showing that fine-tuning on the right data matters enormously. And the benchmark is <strong className="text-foreground font-medium">self-updating</strong>: you can always pull fresh GitHub issues that postdate any model's training cutoff, so it won't go stale the way most benchmarks do.
          </p>

        </div>

        <p className="text-[13px] text-muted/60 italic border-t border-border pt-4 mt-10">
          Paper: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" — Jimenez et al., ICLR 2024. Dataset and leaderboard at swebench.com.
        </p>
      </article>
    </main>
  );
}
