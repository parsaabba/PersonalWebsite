import Image from "next/image";
import {
  experienceData,
  skillsData,
  currentProjectData,
} from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillSection } from "@/components/SkillSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Cpu,
  Download,
  ArrowUpRight,
  Briefcase,
  Layers,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* ── Hero: intro left, circular portrait right ── */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <p className="hero-rise section-label mb-4">Computer Engineering · York University</p>

            <h1 className="hero-rise hero-rise-delay-1 font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6">
              Parsa Abbasian
            </h1>

            <p className="hero-rise hero-rise-delay-2 text-lg sm:text-xl text-muted max-w-lg leading-relaxed mb-10">
              Building across full-stack, AI, and research — documenting the work that shapes how I engineer.
            </p>

            <div className="hero-rise hero-rise-delay-3 flex flex-wrap gap-3">
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

          <div className="hero-portrait flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.2)]">
              <Image
                src="/assets/images/parsa-portrait.png"
                alt="Parsa Abbasian"
                fill
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Content: single-column narrative flow ── */}
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 space-y-24 md:space-y-32">

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
          <section id="projects">
            <SectionHeading
              icon={Layers}
              iconColor="text-primary"
              title="Current Projects"
              index="02"
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
          <section id="resume" className="border-y border-border py-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="section-label mb-2">Resume</p>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Parsa Abbasian — Resume
                </h2>
                <p className="text-muted max-w-lg text-sm leading-relaxed">
                  Full-stack development, AI integration, and research — the full professional background.
                </p>
              </div>
              <a
                href="/assets/parsa-abbasian-resume.pdf"
                target="_blank"
                className="btn-primary shrink-0"
              >
                Download PDF <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <p className="section-label mb-3">Contact</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Let&apos;s Connect
                </h2>
                <p className="text-muted mb-8 leading-relaxed max-w-sm">
                  Whether you have a question, a project idea, or just want to say hi — I&apos;d love to hear from you.
                </p>

                <div className="space-y-3">
                  <a href="mailto:parsa06@my.yorku.ca" className="flex items-center gap-3 group">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      parsa06@my.yorku.ca
                    </span>
                  </a>
                  {[
                    { href: "https://linkedin.com/in/parsaabbasian", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/parsaabbasian", icon: Github, label: "GitHub" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <link.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="8a8c7bdb-5ee1-4733-b958-e31a433577b9" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Name" required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" name="email" placeholder="Email" required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <textarea name="message" rows={5} placeholder="Your message..." required className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
