import {
  educationData,
  experienceData,
  volunteeringData,
  highSchoolData,
  skillsData,
  currentProjectData,
  certificateData,
  blogData,
  thoughtData,
  learningData,
  learningInsightsData
} from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillSection } from "@/components/SkillSection";
import { CertificateCard } from "@/components/CertificateCard";
import { BlogCard } from "@/components/BlogCard";
import { ThoughtCard } from "@/components/ThoughtCard";
import { LearningCard } from "@/components/LearningCard";
import { LearningInsightCard } from "@/components/LearningInsightCard";
import { HighSchoolSection } from "@/components/HighSchoolSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Cpu,
  FileText,
  Download,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Layers,
  ArrowRight,
  PenTool,
  BookOpen,
  Award,
  Coffee,
  Mail,
  Linkedin,
  Github,
  Send,
  Lightbulb
} from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20 space-y-16 md:space-y-24">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="about" className="flex flex-col items-start justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Computer Engineering Student
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6 leading-[1.1]">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Parsa
          </span>
          .
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8">
          Computer Engineering student at{" "}
          <strong className="text-foreground">York University</strong>, building at the intersection of software and AI.{" "}
          <br className="hidden sm:block" />
          This is where I document the work, research, and ideas shaping who I'm becoming as an engineer.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/25 text-sm"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-foreground font-bold rounded-full hover:border-primary/50 transition-all text-sm"
          >
            Get in Touch <Mail className="w-4 h-4" />
          </a>
          <a
            href="/assets/parsa-abbasian-resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-foreground font-bold rounded-full hover:border-primary/50 transition-all text-sm"
          >
            Resume <Download className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* Left column (2/3) */}
        <div className="lg:col-span-2 space-y-16">

          {/* Experience */}
          <ScrollReveal>
            <section id="experience">
              <SectionHeading icon={Briefcase} iconColor="text-cyan-500" title="Experience" />
              <div className="border-l-2 border-border ml-3">
                {experienceData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal>
            <section id="education">
              <SectionHeading icon={GraduationCap} iconColor="text-indigo-500" title="Education" />
              <div className="border-l-2 border-border ml-3">
                {educationData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Technical Skills */}
          <ScrollReveal>
            <section id="skills">
              <SectionHeading icon={Cpu} iconColor="text-blue-500" title="Technical Skills" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData.map((category, i) => (
                  <SkillSection key={i} item={category} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Volunteering */}
          <ScrollReveal>
            <section id="volunteering">
              <SectionHeading icon={HeartHandshake} iconColor="text-rose-500" title="Volunteering & Leadership" />
              <div className="border-l-2 border-border ml-3">
                {volunteeringData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
              <HighSchoolSection items={highSchoolData} />
            </section>
          </ScrollReveal>

          {/* Resume */}
          <ScrollReveal>
            <section id="resume">
              <SectionHeading
                icon={FileText}
                iconColor="text-indigo-500"
                title="Resume"
                action={
                  <a
                    href="/assets/parsa-abbasian-resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-lg shadow-indigo-500/20"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                }
              />
              <div className="p-6 bg-surface border border-border rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-foreground mb-2">Parsa Abbasian — Resume</h3>
                  <p className="text-sm text-muted mb-6 max-w-lg">
                    Proven experience in Full-Stack Development, AI Integration, and Research. Check out my full professional background.
                  </p>
                  <a
                    href="/assets/parsa-abbasian-resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                  >
                    View Resume <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Current Projects */}
          <ScrollReveal>
            <section id="current-projects">
              <SectionHeading
                icon={Layers}
                iconColor="text-green-500"
                title="Current Projects"
                action={
                  <a href="/current-projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors">
                    View All <ArrowRight className="w-4 h-4" />
                  </a>
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProjectData.slice(0, 4).map((project, i) => (
                  <ProjectCard key={i} item={project} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Blogs */}
          <ScrollReveal>
            <section id="blogs">
              <SectionHeading
                icon={PenTool}
                iconColor="text-primary"
                title="Recent Writing"
                action={
                  <a href="/blogs" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors">
                    All Articles <ArrowRight className="w-4 h-4" />
                  </a>
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogData.map((blog, i) => (
                  <BlogCard key={i} item={blog} />
                ))}
              </div>
            </section>
          </ScrollReveal>

        </div>

        {/* Right sidebar (1/3) */}
        <div className="space-y-10">

          {/* Learning Insights */}
          <ScrollReveal delay={150}>
            <section>
              <SectionHeading
                icon={Lightbulb}
                iconColor="text-primary"
                title="Learning Insights"
                action={
                  <a href="/learning" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider">
                    All <ArrowRight className="w-3 h-3" />
                  </a>
                }
              />
              <div className="space-y-3">
                {learningInsightsData.slice(0, 1).map((item, i) => (
                  <LearningInsightCard key={i} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Currently Learning */}
          <ScrollReveal delay={150}>
            <section>
              <SectionHeading
                icon={BookOpen}
                iconColor="text-primary"
                title="Currently Learning"
                action={
                  <a href="/learning" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider">
                    All <ArrowRight className="w-3 h-3" />
                  </a>
                }
              />
              <div className="space-y-3">
                {learningData.slice(0, 3).map((item, i) => (
                  <LearningCard key={i} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Certificates */}
          <ScrollReveal delay={150}>
            <section>
              <SectionHeading
                icon={Award}
                iconColor="text-purple-500"
                title="Certificates"
                action={
                  <a href="/certificates" className="inline-flex items-center gap-1 text-xs font-bold text-muted hover:text-foreground transition-colors uppercase tracking-wider">
                    All <ArrowRight className="w-3 h-3" />
                  </a>
                }
              />
              <div className="grid grid-cols-1 gap-4">
                {certificateData.map((cert, i) => (
                  <CertificateCard key={i} item={cert} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Thoughts */}
          <ScrollReveal delay={150}>
            <section id="thoughts">
              <SectionHeading
                icon={Coffee}
                iconColor="text-green-500"
                title="Thoughts on Life"
                action={
                  <a href="/thoughts" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wider">
                    More <ArrowRight className="w-3 h-3" />
                  </a>
                }
              />
              <div className="space-y-3">
                {thoughtData.map((thought, i) => (
                  <ThoughtCard key={i} item={thought} />
                ))}
              </div>
            </section>
          </ScrollReveal>

        </div>
      </div>

      {/* ── Contact ──────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="contact">
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect!</h2>
              <p className="text-muted mb-8 max-w-lg mx-auto">
                Whether you have a question, a project idea, or just want to say hi — I'd love to hear from you.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8">
                <a href="mailto:parsa06@my.yorku.ca" className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-all text-sm">
                  <Mail className="w-4 h-4" /> parsa06@my.yorku.ca
                </a>
                <a href="https://linkedin.com/in/parsaabbasian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-foreground font-bold rounded-full hover:bg-accent transition-colors text-sm">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/parsaabbasian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-foreground font-bold rounded-full hover:bg-accent transition-colors text-sm">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://www.kaggle.com/parsaabbasian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-foreground font-bold rounded-full hover:bg-accent transition-colors text-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.117-.119.281-.18.445-.18h3.332c.164 0 .307.085.393.226.086.14.095.313.023.461l-5.32 10.717c-.06.12-.18.197-.311.197H8.847c-.234 0-.351-.117-.351-.352V13.51l6.203 7.892c.117.149.281.233.445.233h3.139c.164 0 .281.049.304.141l.07.283Z" />
                  </svg>
                  Kaggle
                </a>
              </div>

              <form action="https://api.web3forms.com/submit" method="POST" className="max-w-md mx-auto text-left space-y-3">
                <input type="hidden" name="access_key" value="8a8c7bdb-5ee1-4733-b958-e31a433577b9" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Name" required className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" name="email" placeholder="Email" required className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <textarea name="message" rows={3} placeholder="Message..." required className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20 text-sm flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}
