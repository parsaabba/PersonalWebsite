import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SweBenchPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
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
            Can AI actually fix real bugs? Researchers put language models to the test, and the results were humbling.
          </p>
        </div>

        <p className="text-xs text-muted/60 mb-10">
          Published on my learning blog &nbsp;·&nbsp; ICLR 2024 paper by Jimenez et al., Princeton
        </p>

        <div className="space-y-6 text-[15px] text-muted leading-[1.85]">

          <p>
            Most coding assignments in our first-year programming courses (like EECS 1011 or EECS 1021) give us self-contained, bite-sized tasks. For example, write a function that reverses a list, or solve a simple algorithm challenge.
          </p>

          <p>
            But real-world software engineering is nothing like that. A bug in a real system isn't neatly isolated. It might be hiding somewhere across a dozen files in a <strong className="text-foreground font-medium">codebase</strong> (a massive, interconnected folder structure) containing over 400,000 lines of code. To fix it, you have to understand how different modules, classes, and libraries interact.
          </p>

          <p>
            This paper introduces <strong className="text-foreground font-medium">SWE-bench</strong>, a benchmark designed to test AI models on <strong className="text-foreground font-medium">2,294 real GitHub issues</strong> pulled from popular Python open-source projects like Django, scikit-learn, and matplotlib. Instead of toy problems, the AI is given a raw, real bug report and the entire codebase. Its job is to find the bug, write a fix, and see if it passes the actual <strong className="text-foreground font-medium">unit tests</strong> (automated scripts that verify if code works, just like the grading scripts that check our university lab submissions).
          </p>

          <blockquote className="italic text-[18px] text-foreground border-t border-b border-border py-5 my-2 leading-relaxed">
            "The best-performing model at the time, Claude 2, was only able to resolve 1.96% of the issues."
          </blockquote>

          <p>
            The researchers didn't write these tasks by hand. They built an automated system that scanned GitHub for real pull requests. They only kept the ones that closed a real, reported bug, included the actual developer's fix, and added new unit tests to make sure the bug wouldn't happen again. After all that filtering, <strong className="text-foreground font-medium">90,000 PRs became 2,294 high-quality tasks</strong>, simulating a real day in the life of a software engineer.
          </p>

          <p>
            To put this into perspective, a typical first-year university coding project might have 3 or 4 files and a few hundred lines of code. On SWE-bench, the typical task has:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground font-medium">3,010 files</strong> on average in the folder.</li>
            <li><strong className="text-foreground font-medium">438,000 lines of code</strong> across the entire codebase.</li>
            <li>The AI is expected to output a correctly formatted <strong className="text-foreground font-medium">patch file</strong> (a special text file that lists exactly which lines of code to add, delete, or edit) to fix the bug, all without any human telling it where to look.</li>
            <li>The actual human developer's fix (the "gold standard" fix) usually only edits an average of 1.7 files across about 3 functions.</li>
          </ul>

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
            To give models a fighting chance, researchers used a search-engine technique called <strong className="text-foreground font-medium">BM25 retrieval</strong>, which is like a smart search tool that scans the codebase to find and feed only the most relevant files to the AI. Even with that help, the results were incredibly humbling: the best model resolved fewer than 2% of the issues.
          </p>

          <p>
            For computer engineering students, this is actually incredibly exciting news. It shows that while AI is great at autocomplete and writing simple scripts, it's nowhere near replacing real engineers who can navigate complex systems.
          </p>

          <p className="text-[11px] tracking-widest uppercase text-muted/60 pt-2">Key findings that surprised me</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground font-medium">More code actually confused the AI</strong>: You would think giving the AI the entire codebase would help it. But models actually performed <em>worse</em> with larger context windows. Too much code acted like "noise", distracting the AI from the actual bug.
            </li>
            <li>
              <strong className="text-foreground font-medium">AI fixes are too simple</strong>: Generated fixes added or removed far fewer lines than the real human fixes. The AI would solve the surface bug but miss edge cases or fail to follow the project's code style.
            </li>
            <li>
              <strong className="text-foreground font-medium">Age of the bug didn't matter</strong>: The AI did just as badly on brand new bugs as it did on older ones. This proves the models wasn't just "memorizing" solutions from their training data.
            </li>
            <li>
              <strong className="text-foreground font-medium">No vision, no fix</strong>: Many real bugs are reported using screenshots or system diagrams. Text-only AI models had zero chance of solving these because they lacked <strong className="text-foreground font-medium">multimodal reasoning</strong> (the ability to see and understand images alongside text).
            </li>
          </ul>

          <p>
            Reading this paper changed how I think about AI coding tools. Tools like GitHub Copilot or ChatGPT are amazing study buddies for explaining a concept or writing boilerplate code, but they are far from autonomous developers who can safely edit a production codebase.
          </p>

          <p>
            The researchers also built <strong className="text-foreground font-medium">SWE-Llama</strong>, a fine-tuned open-source model for this specific task. It's competitive with Claude 2 despite being much smaller, showing that fine-tuning a model on the right data is often more powerful than just making the model bigger. And the benchmark is <strong className="text-foreground font-medium">self-updating</strong>: you can always pull fresh GitHub issues that postdate any model's training cutoff, so it won't go stale the way most benchmarks do.
          </p>

          <p>
            Ultimately, SWE-bench shows us that the hard part of software engineering isn't typing out the syntax, it's understanding the architecture, finding where things go wrong, and designing clean solutions. That's exactly what we are in school to learn!
          </p>

        </div>

        <p className="text-[13px] text-muted/60 italic border-t border-border pt-4 mt-10">
          Paper: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" by Jimenez et al., ICLR 2024. Dataset and leaderboard at swebench.com.
        </p>
      </article>
    </main>
  );
}
