import {
  educationData,
  experienceData,
  volunteeringData,
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
  Lightbulb,
  MapPin
} from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-20 space-y-20 md:space-y-28">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-primary/25 bg-primary/8 text-primary text-xs font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Computer Engineering Student
          </div>

          <p className="text-lg text-muted max-w-xl leading-relaxed mb-8">
            I&apos;m <strong className="text-foreground font-semibold">Parsa Abbasian</strong>, a Computer Engineering student at{" "}
            <strong className="text-foreground font-semibold">York University</strong>.
            This is where I document the work, research, and ideas shaping who I&apos;m becoming as an engineer.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#experience" className="btn-primary">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch <Mail className="w-4 h-4" />
            </a>
            <a
              href="/assets/parsa-abbasian-resume.pdf"
              target="_blank"
              className="btn-secondary"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {[
            { label: "Focus", value: "Full-Stack & AI" },
            { label: "University", value: "York U" },
            { label: "Location", value: "Toronto, CA" },
          ].map((stat) => (
            <div key={stat.label} className="card p-4">
              <p className="section-label mb-1">{stat.label}</p>
              <p className="font-display font-bold text-foreground text-sm">{stat.value}</p>
            </div>
          ))}
          <div className="col-span-2 card p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent border border-border flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="section-label mb-0.5">Currently</p>
              <p className="font-display font-bold text-foreground text-sm">Lassonde School of Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 items-start">

        <div className="lg:col-span-2 space-y-20">

          <ScrollReveal>
            <section id="experience">
              <SectionHeading icon={Briefcase} iconColor="text-primary" title="Experience" index="01" />
              <div className="space-y-0">
                {experienceData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="education">
              <SectionHeading icon={GraduationCap} iconColor="text-secondary" title="Education" index="02" />
              <div className="space-y-0">
                {educationData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="skills">
              <SectionHeading icon={Cpu} iconColor="text-primary" title="Technical Skills" index="03" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((category, i) => (
                  <SkillSection key={i} item={category} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="volunteering">
              <SectionHeading icon={HeartHandshake} iconColor="text-secondary" title="Volunteering & Leadership" index="04" />
              <div className="space-y-0">
                {volunteeringData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="resume">
              <SectionHeading
                icon={FileText}
                iconColor="text-primary"
                title="Resume"
                index="05"
                action={
                  <a
                    href="/assets/parsa-abbasian-resume.pdf"
                    target="_blank"
                    className="btn-primary !py-2 !px-4 !text-xs"
                  >
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </a>
                }
              />
              <div className="card p-6 group">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Parsa Abbasian — Resume</h3>
                <p className="text-sm text-muted mb-5 max-w-lg">
                  Proven experience in Full-Stack Development, AI Integration, and Research. Check out my full professional background.
                </p>
                <a
                  href="/assets/parsa-abbasian-resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  View Resume <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="current-projects">
              <SectionHeading
                icon={Layers}
                iconColor="text-primary"
                title="Current Projects"
                index="06"
                action={
                  <a href="/current-projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors">
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

          <ScrollReveal>
            <section id="blogs">
              <SectionHeading
                icon={PenTool}
                iconColor="text-secondary"
                title="Recent Writing"
                index="07"
                action={
                  <a href="/blogs" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors">
                    All Articles <ArrowRight className="w-4 h-4" />
                  </a>
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogData.map((blog, i) => (
                  <BlogCard key={i} item={blog} />
                ))}
              </div>
            </section>
          </ScrollReveal>

        </div>

        <div className="space-y-10 lg:sticky lg:top-28 lg:self-start">

          <ScrollReveal delay={150}>
            <section>
              <SectionHeading
                icon={Lightbulb}
                iconColor="text-secondary"
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

          <ScrollReveal delay={150}>
            <section>
              <SectionHeading
                icon={Award}
                iconColor="text-secondary"
                title="Certificates"
                action={
                  <a href="/certificates" className="inline-flex items-center gap-1 text-xs font-bold text-muted hover:text-primary transition-colors uppercase tracking-wider">
                    All <ArrowRight className="w-3 h-3" />
                  </a>
                }
              />
              <div className="grid grid-cols-1 gap-3">
                {certificateData.map((cert, i) => (
                  <CertificateCard key={i} item={cert} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <section id="thoughts">
              <SectionHeading
                icon={Coffee}
                iconColor="text-primary"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 card overflow-hidden">
            <div className="p-8 md:p-10 bg-accent/50 border-b md:border-b-0 md:border-r border-border">
              <p className="section-label mb-3">Contact</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Let&apos;s Connect</h2>
              <p className="text-muted mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi — I&apos;d love to hear from you.
              </p>

              <div className="space-y-3">
                <a href="mailto:parsa06@my.yorku.ca" className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface hover:border-primary/40 transition-all group">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">parsa06@my.yorku.ca</span>
                </a>
                {[
                  { href: "https://linkedin.com/in/parsaabbasian", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com/parsaabbasian", icon: Github, label: "GitHub" },
                  { href: "https://www.kaggle.com/parsaabbasian", icon: null, label: "Kaggle" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-surface hover:border-primary/40 transition-all group"
                  >
                    {link.icon ? (
                      <link.icon className="w-4 h-4 text-primary" />
                    ) : (
                      <svg className="w-4 h-4 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.117-.119.281-.18.445-.18h3.332c.164 0 .307.085.393.226.086.14.095.313.023.461l-5.32 10.717c-.06.12-.18.197-.311.197H8.847c-.234 0-.351-.117-.351-.352V13.51l6.203 7.892c.117.149.281.233.445.233h3.139c.164 0 .281.049.304.141l.07.283Z" />
                      </svg>
                    )}
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="section-label mb-3">Send a message</p>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="8a8c7bdb-5ee1-4733-b958-e31a433577b9" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Name" required className="w-full bg-accent border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" name="email" placeholder="Email" required className="w-full bg-accent border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <textarea name="message" rows={5} placeholder="Your message..." required className="w-full bg-accent border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}
