import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Briefcase, Settings, Microscope, HandHelping, 
  HeartHandshake, BookOpen, Cpu, FileText, Download, 
  Layers, PenTool, Award, Coffee, Mail, Linkedin, Github, 
  Send, ExternalLink, ChevronRight, Moon, Sun, Menu, X, ArrowUpRight, ArrowRight,
  Zap, MapPin, Sigma
} from 'lucide-react';
import { 
  educationData, experienceData, volunteeringData, highSchoolData, 
  skillsData, currentProjectData, blogData, certificateData, learningData 
} from './data';

// --- ICON MAPPER ---
const Icons = {
  GraduationCap, Briefcase, Settings, Microscope, HandHelping, 
  HeartHandshake, BookOpen, Cpu, FileText, Download, 
  Layers, PenTool, Award, Coffee, Mail, Linkedin, Github, 
  Send, ExternalLink, ChevronRight, Moon, Sun, Menu, X,
  ArrowUpRight, ArrowRight, Zap, MapPin, Sigma
};

const ExperienceItem = ({ item }) => {
  const Icon = Icons[item.icon] || Briefcase;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-8 group mb-8 last:mb-0 animate-in">
      <span className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-700 border border-white dark:border-slate-900 group-hover:bg-primary transition-colors ring-4 ring-white dark:ring-slate-950"></span>
      
      <div className="flex items-start gap-4 mb-4">
        {item.logo ? (
          <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-2 flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors">
            <img src={item.logo} alt={`${item.subtitle} logo`} className="w-full h-full object-contain rounded-lg" />
          </div>
        ) : (
          <div className={`shrink-0 w-12 h-12 rounded-xl ${item.bg || 'bg-gray-100 dark:bg-slate-800'} ${item.color || 'text-primary'} flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors`}>
            <Icon size={24} />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h3>
          <p className="text-sm text-primary font-medium mb-0.5">{item.subtitle}</p>
          <p className="text-[10px] text-gray-500 dark:text-slate-500 font-mono uppercase tracking-widest">{item.date}</p>
        </div>
      </div>

      {item.grade && (
        <div className="inline-flex items-center gap-1.5 mb-3 px-2 py-1 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
          <Award size={14} className="text-primary" />
          <span className="text-xs font-bold text-gray-700 dark:text-slate-300">{item.grade}</span>
        </div>
      )}

      {item.collapsible ? (
        <div className="mt-2">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30 transition-all focus:outline-none"
          >
            {isOpen ? 'Hide Details' : 'View Details'}
            <ChevronRight size={14} className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </button>
          {isOpen && (
            <div className="mt-4 animate-in">
              <p className="text-gray-700 dark:text-slate-300 mb-2 leading-relaxed">{item.description}</p>
              <ul className="text-sm space-y-1">
                {item.details.map((det, i) => (
                  <li key={i} className="text-gray-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-600 shrink-0"></span>
                    {det}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-2">
           <p className="text-gray-700 dark:text-slate-300 mb-2 leading-relaxed">{item.description}</p>
           <ul className="text-sm space-y-1">
             {item.details?.map((det, i) => (
               <li key={i} className="text-gray-600 dark:text-slate-400 flex items-start gap-2">
                 <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-600 shrink-0"></span>
                 {det}
               </li>
             ))}
           </ul>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ item }) => {
  const Icon = Icons[item.icon] || Zap;
  const projectPath = `/pages/projects/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.html`;

  return (
    <div className="group p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg dark:hover:bg-slate-800 transition-all animate-in">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-3 items-center">
          {item.customIcon ? (
            <img src={item.customIcon} alt={item.title} className="w-8 h-8 rounded-lg shadow-sm border border-black/5 dark:border-white/10 object-cover" />
          ) : (
            <Icon className={`w-5 h-5 ${item.color || 'text-primary'}`} />
          )}
          <span className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</span>
        </div>
        {item.status && (
          <span className="text-[10px] uppercase font-bold tracking-wide text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">{item.status}</span>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-slate-400 mb-4 line-clamp-2">{item.desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {item.tech.map((t, i) => <span key={i} className="text-xs text-gray-500 dark:text-slate-500 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md">{t}</span>)}
      </div>
      <div className="flex items-center gap-3">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all">
          Live Demo <ExternalLink size={12} />
        </a>
        <a href={projectPath} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-primary/30 text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-all">
          Read More <BookOpen size={12} />
        </a>
      </div>
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const navLinks = [
    { name: 'Overview', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Learning', href: '/pages/learning/learning.html' },
    { name: 'Projects', href: '/pages/projects/projects.html' },
    { name: 'Blogs', href: '/pages/blogs/blogs.html' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact', primary: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-slate-300 font-sans transition-colors duration-300">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 hidden dark:block">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">P</div>
            <span className="self-center text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white tracking-tight">Parsa.Dev</span>
          </a>

          <div className="flex items-center gap-4 md:order-2">
            <button onClick={() => setIsDark(!isDark)} className="p-2 text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-all focus:outline-none">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 dark:text-slate-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-white/5 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 dark:border-white/10 rounded-lg bg-white dark:bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`block py-2 px-3 transition-colors ${link.primary ? 'text-primary font-semibold hover:text-purple-500' : 'text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-20">
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
            <section id="experience">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="border-l-2 border-gray-200 dark:border-slate-800 ml-3">
                {experienceData.map((item, i) => <ExperienceItem key={i} item={item} />)}
              </div>
            </section>

            <section id="education">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="border-l-2 border-gray-200 dark:border-slate-800 ml-3">
                {educationData.map((item, i) => <ExperienceItem key={i} item={item} />)}
              </div>
            </section>

            <section id="skills">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <Cpu className="text-blue-500" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData.map((group, i) => (
                  <div key={i} className="mb-8 last:mb-0">
                    <h3 className="text-xs font-bold text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-md text-sm font-medium border border-gray-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default hover:text-primary dark:hover:text-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="volunteering">
              <h2 className="text-2xl font-bold mb-6">Volunteering & Leadership</h2>
              <div className="border-l-2 border-gray-200 dark:border-slate-800 ml-3">
                {volunteeringData.map((item, i) => <ExperienceItem key={i} item={item} />)}
              </div>
              <div className="mt-12 ml-3">
                <h3 className="text-lg font-bold text-gray-500 dark:text-slate-500 mb-8 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-gray-400" /> High School Background
                </h3>
                <div className="border-l-2 border-gray-200 dark:border-slate-800">
                  {highSchoolData.map((item, i) => <ExperienceItem key={i} item={item} />)}
                </div>
              </div>
            </section>

            <section id="resume">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <FileText className="text-indigo-500" /> Resume
                </h2>
                <a href="/assets/parsa-abbasian-resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-lg shadow-indigo-500/20">
                  <Download size={16} /> Download PDF
                </a>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Parsa Abbasian - Resume</h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 mb-6 max-w-lg">Proven experience in Full-Stack Development, AI Integration, and Quantitative Analysis. Check out my full professional background.</p>
                  <a href="/assets/parsa-abbasian-resume.pdf" target="_blank" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                    View Resume <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </section>

            <section id="current-projects">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                <Layers className="text-green-500" /> Current Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProjectData.map((item, i) => <ProjectCard key={i} item={item} />)}
              </div>
            </section>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                <BookOpen className="text-primary" /> Currently Learning
              </h2>
              <div className="space-y-3">
                {learningData.map(item => (
                  <a key={item.id} href={item.link} className="group relative flex flex-col gap-4 p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gray-50 dark:bg-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
                          {React.createElement(Icons[item.icon] || BookOpen, { size: 24 })}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h3>
                          <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wide text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 px-2 py-0.5 rounded-full bg-gray-50 dark:bg-slate-800/50">{item.status}</span>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-gray-300 dark:text-slate-600 group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                <Award className="text-purple-500" /> Certificates
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {certificateData.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" className="group block p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                        {React.createElement(Icons[item.icon] || Award, { size: 24 })}
                      </div>
                      <ExternalLink size={16} className="text-gray-400 dark:text-slate-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-slate-500">{item.org} • {item.date}</p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section id="contact" className="pt-10">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect!</h2>
              <p className="text-gray-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                <a href="mailto:parsa06@my.yorku.ca" className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm">
                  <Mail size={16} /> parsa06@my.yorku.ca
                </a>
                <a href="https://linkedin.com/in/parsaabbasian" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-sm">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/parsaabbasian" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-sm">
                  <Github size={16} /> GitHub
                </a>
              </div>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="max-w-md mx-auto text-left space-y-3">
                <input type="hidden" name="access_key" value="8a8c7bdb-5ee1-4733-b958-e31a433577b9" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" name="name" placeholder="Name" required className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" name="email" placeholder="Email" required className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <textarea name="message" rows="3" placeholder="Message..." required className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all text-sm flex items-center justify-center gap-2">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-950 py-8 text-center mt-20">
        <p className="text-gray-500 dark:text-slate-500 text-sm">© 2026 Parsa Abbasian. Built with React, Vite & Tailwind.</p>
      </footer>
    </div>
  );
}
