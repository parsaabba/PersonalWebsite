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
  learningData 
} from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillSection } from "@/components/SkillSection";
import { CertificateCard } from "@/components/CertificateCard";
import { BlogCard } from "@/components/BlogCard";
import { ThoughtCard } from "@/components/ThoughtCard";
import { LearningCard } from "@/components/LearningCard";
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
  Send
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 hidden dark:block">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-20">
        {/* Hero Section */}
        <section id="about" className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Computer Engineering Student
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Parsa</span>.
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
            A first-year Computer Engineering student at <strong className="text-gray-900 dark:text-white">York University</strong>. <br />
            I document my journey here as I explore software, AI, and technology constantly learning, building, and evolving.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-16">
            {/* Experience */}
            <section id="experience">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <Briefcase className="text-cyan-500" /> Experience
              </h2>
              <div className="border-l-2 border-gray-200 dark:border-slate-800 ml-3">
                {experienceData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
            </section>

            {/* Education */}
            <section id="education">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <GraduationCap className="text-indigo-500" /> Education
              </h2>
              <div className="border-l-2 border-gray-200 dark:border-slate-800 ml-3">
                {educationData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section id="skills">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <Cpu className="text-blue-500" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData.map((category, i) => (
                  <SkillSection key={i} item={category} />
                ))}
              </div>
            </section>

            {/* Volunteering */}
            <section id="volunteering">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <HeartHandshake className="text-rose-500" /> Volunteering & Leadership
              </h2>
              <div className="border-l-2 border-gray-200 dark:border-slate-800 ml-3">
                {volunteeringData.map((item, i) => (
                  <ExperienceCard key={i} item={item} />
                ))}
              </div>

              <div className="mt-12 ml-3">
                <h3 className="text-lg font-bold text-gray-500 dark:text-slate-500 mb-8 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-400" /> High School Background
                </h3>
                <div className="border-l-2 border-gray-200 dark:border-slate-800">
                  {highSchoolData.map((item, i) => (
                    <ExperienceCard key={i} item={item} />
                  ))}
                </div>
              </div>
            </section>

            {/* Resume */}
            <section id="resume">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <FileText className="text-indigo-500" /> Resume
                </h2>
                <a href="/assets/parsa-abbasian-resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-lg shadow-indigo-500/20">
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Parsa Abbasian - Resume</h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 mb-6 max-w-lg">
                    Proven experience in Full-Stack Development, AI Integration, and Quantitative Analysis. Check out my full professional background.
                  </p>
                  <a href="/assets/parsa-abbasian-resume.pdf" target="_blank" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                    View Resume <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* Current Projects */}
            <section id="current-projects">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <Layers className="text-green-500" /> Current Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProjectData.slice(0, 4).map((project, i) => (
                  <ProjectCard key={i} item={project} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="/current-projects" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
                  View All <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>

            {/* Blogs */}
            <section id="blogs">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <PenTool className="text-primary" /> Recent Writing
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogData.map((blog, i) => (
                  <BlogCard key={i} item={blog} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
                  Read All Articles <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="text-primary w-5 h-5" /> Currently Learning
                </h2>
              </div>
              <div className="space-y-3">
                {learningData.slice(0, 3).map((item, i) => (
                  <LearningCard key={i} item={item} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="/learning" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-purple-600 dark:hover:text-white transition-colors uppercase tracking-wider">
                  See Full List <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <Award className="text-purple-500" /> Certificates
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {certificateData.map((cert, i) => (
                  <CertificateCard key={i} item={cert} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="/certificates" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
                  View All Certificates <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>

            <section id="thoughts">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Coffee className="text-green-500 w-5 h-5" /> Thoughts on Life
                </h2>
              </div>
              <div className="space-y-3">
                {thoughtData.map((thought, i) => (
                  <ThoughtCard key={i} item={thought} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="/thoughts" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-green-600 dark:hover:text-white transition-colors uppercase tracking-wider">
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="pt-10">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect!</h2>
              <p className="text-gray-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                <a href="mailto:parsa06@my.yorku.ca" className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm">
                  <Mail className="w-4 h-4" /> parsa06@my.yorku.ca
                </a>
                <a href="https://linkedin.com/in/parsaabbasian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-sm">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/parsaabbasian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-sm">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="max-w-md mx-auto text-left space-y-3">
                <input type="hidden" name="access_key" value="8a8c7bdb-5ee1-4733-b958-e31a433577b9" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Name" required className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" name="email" placeholder="Email" required className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <textarea name="message" rows={3} placeholder="Message..." required className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all text-sm flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
