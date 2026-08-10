export interface Detail {
  text: string;
}

export interface Education {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  grade?: string;
  details: string[];
  bg?: string;
  color?: string;
  icon: string;
  logo?: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  date: string;
  description: string | string[];
  details: string[];
  bg?: string;
  color?: string;
  icon: string;
  logo?: string;
  collapsible?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  status?: string;
  link: string;
  icon?: string;
  color?: string;
  customIcon?: string;
  stars?: string;
}

export interface Certificate {
  title: string;
  org: string;
  date: string;
  link: string;
  bg: string;
  color: string;
  icon: string;
}

export interface Blog {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export interface Thought {
  title: string;
  date: string;
  desc: string;
  link: string;
}

export interface LearningItem {
  id: string;
  title: string;
  desc: string;
  status: string;
  icon: string;
  color: string;
  link: string;
  checklist?: { task: string; done: boolean; date?: string; summary: string; link?: string }[];
  levels?: { title: string; desc: string; link: string }[];
}

export const educationData: Education[] = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Lassonde School of Engineering - York University",
    date: "2025 - Present | Expected 2029",
    description: "Computer Engineering Student. Awarded York International Scholarship of Distinction and the Bethune Prize for Outstanding Contribution to College Life.",
    grade: "First Class Standing With Distinction",
    details: [
      "Dean's List — Academic Excellence",
      "Bethune Prize for Outstanding Contribution to College Life",
      "Undergraduate Researcher | Space Geodesy Lab",
      "Class Rep & Note Share — MATH 1013, EECS 1028, PHYS 1801"
    ],
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    color: "text-emerald-700 dark:text-emerald-300",
    icon: "graduation-cap",
    logo: "/assets/logos/lassonde-logo.png"
  }
];

export const experienceData: Experience[] = [
  {
    title: "Undergraduate Researcher",
    subtitle: "EXINES Lab — York University",
    date: "Present",
    description: "Conducting advanced software engineering and AI research under the supervision of Prof. Maleknaz Nayebi.",
    details: [
      "SWE-bench multimodal evaluation pipelines for AI coding agents",
      "Dockerized sandboxes for safe, reproducible model testing",
      "LLM evaluation on complex software engineering tasks",
      "Scalable Python infrastructure for automated code evaluation"
    ],
    bg: "bg-orange-50 dark:bg-orange-500/10",
    color: "text-orange-600 dark:text-orange-400",
    icon: "microscope",
    logo: "/assets/logos/lassonde-logo.png"
  },
  {
    title: "Operations Lead",
    subtitle: "GDG on Campus York University",
    date: "Mar 2026 - Present",
    description: "Leading operational strategy and execution for Google Developer Groups on Campus at York University, coordinating events and community growth.",
    details: [
      "Logistics, scheduling, and resource planning for workshops",
      "Cross-functional coordination for GDG campus initiatives",
      "Partnerships to grow student engagement with dev tech",
      "Streamlined operations for consistent event delivery"
    ],
    bg: "bg-sky-50 dark:bg-sky-500/10",
    color: "text-sky-600 dark:text-sky-400",
    icon: "users",
    logo: "/assets/logos/gdg-logo.png"
  },
  {
    title: "AI Application Engineer",
    subtitle: "Diamond AI",
    date: "June 2026 - Present",
    description: "Building a high-performance AI video generation studio powered by Google's Gemini Veo and ElevenLabs.",
    details: [
      "Full-stack Next.js app for AI video synthesis and storyboarding",
      "Gemini Veo video generation and ElevenLabs voice integration",
      "Character Libraries, Quick Shots, and Usage Dashboard workflows"
    ],
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    color: "text-emerald-700 dark:text-emerald-300",
    icon: "diamond",
    logo: "/assets/logos/diamondinyou_logo.jpg"
  },
  {
    title: "Undergraduate Researcher",
    subtitle: "Space Geodesy Lab — York University",
    date: "Jan 2026 - Present",
    description: "Conducting scientific research on extreme weather events using satellite data and machine learning under Dr. Spiros Pagiatakis and Yuying (Alice) Wang.",
    details: [
      "End-to-end satellite data acquisition, preprocessing, and visualization",
      "Satellite telemetry and climate model analysis for atmospheric research",
      "ML algorithms for patterns in extreme weather system impacts",
      "Data science methods for atmospheric and climate science"
    ],
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    color: "text-emerald-600 dark:text-emerald-400",
    icon: "microscope",
    logo: "/assets/logos/stem-fellowship-logo.png"
  },
  {
    title: "Vice President",
    subtitle: "MBH&Co.",
    date: "Jan 2026 - Present",
    description: "Helping businesses grow through trusted relationships, meaningful connections, and structured collaboration.",
    details: [
      "Strategic initiatives for business growth through relationships",
      "Collaboration frameworks to improve team efficiency",
      "Meaningful connections within the business community"
    ],
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    color: "text-emerald-700 dark:text-emerald-300",
    icon: "briefcase",
    logo: "/assets/logos/mbh-logo.png"
  }
];

export const volunteeringData: Experience[] = [
  {
    title: "Class Rep & Note Share Volunteer",
    subtitle: "MATH 1013, EECS 1028 & PHYS 1801 — York University",
    date: "Sep 2025 - April 2026",
    description: "Representing student interests and supporting academic accessibility through structured technical note sharing.",
    details: [
      "Liaised between students and faculty on academic feedback",
      "Structured technical notes for accessibility-focused students"
    ],
    bg: "bg-purple-50 dark:bg-purple-500/10",
    color: "text-purple-600 dark:text-purple-400",
    icon: "hand-helping",
    logo: "/assets/logos/lassonde-logo.png"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "Python", "Go (Golang)", "C++", "HTML5", "CSS3", "MATLAB"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Mapbox", "Vite", "Framer Motion", "Supabase Auth"]
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Express", "WebSocket", "Supabase", "PostgreSQL", "Firebase"]
  },
  {
    category: "Tools & AI",
    items: ["Git & GitHub", "Docker", "Linux", "Vercel", "Render", "OpenCV"]
  }
];

export const currentProjectData: Project[] = [
  {
    title: "UniSpot",
    desc: "High-performance, real-time event discovery platform for York U. Features a Live Map, GPS Verification, and instant sync via WebSockets.",
    tech: ["React", "Go", "Mapbox", "PostgreSQL"],
    status: "Active",
    link: "https://yorkunispot.vercel.app/",
    icon: "map-pin",
    color: "text-red-500",
    customIcon: "/assets/icons/unispot-logo.svg"
  },
  {
    title: "MBH&Co.",
    desc: "A premium platform for business growth, built with a custom React 19 + Vite frontend and Wix Headless backend.",
    tech: ["React 19", "TypeScript", "Wix Headless", "Framer Motion"],
    status: "Beta",
    link: "https://www.mbhandco.com/",
    icon: "briefcase",
    color: "text-emerald-600"
  },
  {
    title: "Undercut",
    desc: "A full-stack AI platform for finding underpriced cars. Developed high-performance scrapers in Go to extract real-time data for thousands of GTA car listings.",
    tech: ["Next.js", "FastAPI", "Go", "Gemini AI"],
    status: "Hackathon",
    link: "https://undercut-seven.vercel.app/",
    icon: "car-front",
    color: "text-red-500"
  },
  {
    title: "HawkEye",
    desc: "Object detection web app built during a 48-hour hackathon sprint.",
    tech: ["Python", "OpenCV", "HTML/CSS"],
    status: "Hackathon",
    link: "https://hawkeyedemo.onrender.com/",
    icon: "eye",
    color: "text-amber-500"
  },
  {
    title: "AlgoDrift",
    desc: "A high-performance, framework-free visualizer for algorithms and data structures.",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    status: "Active Beta",
    link: "https://algodrift.vercel.app/",
    icon: "bar-chart-2",
    color: "text-purple-500"
  },
  {
    title: "LassondeHub",
    desc: "The central repository for formulas, schematics, code snippets, and lecture notes for Engineering students.",
    tech: ["React", "Supabase", "JavaScript"],
    status: "Community",
    link: "https://lassondehub.vercel.app/",
    icon: "book-open",
    color: "text-red-500",
    customIcon: "/assets/icons/lassondehub-logo.svg"
  }
];

export const certificateData: Certificate[] = [
  {
    title: "MATLAB Onramp",
    org: "MathWorks",
    date: "Sep 2025",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=da86491c-0606-4558-8e0f-53ec6cd4842b&",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    color: "text-orange-600 dark:text-orange-400",
    icon: "file-badge"
  },
];

export const blogData: Blog[] = [
  {
    title: "My First Hackathon",
    desc: "Lessons learned building 'HawkEye' in a 48-hour coding sprint.",
    tags: ["Hackathon", "AI"],
    link: "blogs/hackathon/my-first-hackathon"
  },
  {
    title: "My Second Hackathon",
    desc: "Building Undercut: A full-stack AI platform for finding underpriced cars.",
    tags: ["Hackathon", "Full-Stack"],
    link: "blogs/hackathon/my-second-hackathon"
  },
];

export const thoughtData: Thought[] = [
  {
    title: "Lessons from Life",
    date: "Feb 2026",
    desc: "Insights on growth, discipline, and learning from both success and failure.",
    link: "thoughts/lessons-from-life"
  },
];

export const learningData: LearningItem[] = [
  {
    id: "dsa",
    title: "DSA Pattern Mastery",
    desc: "Mastering Data Structures using the Design Gurus curriculum.",
    status: "In Progress",
    icon: "network",
    color: "text-purple-600 dark:text-purple-400",
    link: "learning/dsa-pattern-mastery",
    checklist: [
      { task: "Day 1", done: true, date: "Dec 30", summary: "Big-O Notation & Array basics.", link: "learning/dsa-pattern-mastery/days/day1" },
      { task: "Day 2", done: false, summary: "Sliding Window Pattern.", link: "learning/dsa-pattern-mastery/days/day2" },
      { task: "Day 3", done: false, summary: "Two Pointers Pattern.", link: "learning/dsa-pattern-mastery/days/day3" },
      { task: "Day 4", done: false, summary: "Fast & Slow Pointers." },
      { task: "Day 5", done: false, summary: "Merge Intervals." }
    ]
  },
  {
    id: "github",
    title: "Git & GitHub Mastery",
    desc: "Version control essentials for modern software development.",
    status: "Completed",
    icon: "git-branch",
    color: "text-orange-600 dark:text-orange-400",
    link: "learning/github",
    levels: [
      {
        title: "Level 1: The Foundation",
        desc: "Config, Init, Stage, Commit, and basic local workflow.",
        link: "learning/github/levels/level1"
      },
      {
        title: "Level 2: Branching & Merging",
        desc: "Working with branches, handling merges, and conflict resolution.",
        link: "learning/github/levels/level2"
      },
      {
        title: "Level 3: Collaboration",
        desc: "Remotes, Pull Requests (PRs), Code Reviews, and Forks.",
        link: "learning/github/levels/level3"
      },
      {
        title: "Level 4: Advanced Git",
        desc: "Rebasing, Cherry-picking, Stashing, and GitHub Actions.",
        link: "learning/github/levels/level4"
      }
    ]
  },
  {
    id: "golang",
    title: "Go (Golang)",
    desc: "Mastering cloud-native development, goroutines, and backend scalability.",
    status: "In Progress",
    icon: "box",
    color: "text-cyan-500 dark:text-cyan-400",
    link: "learning/golang",
    checklist: [
      { task: "Day 1", done: true, date: "Jan 02", summary: "Go Installation", link: "learning/golang/days/day01" },
    ]
  },
  {
    id: "cpp",
    title: "C++ Programming",
    desc: "Mastering memory management, pointers, and OOP.",
    status: "In Progress",
    icon: "code-2",
    color: "text-emerald-700 dark:text-emerald-300",
    link: "learning/cpp",
    checklist: [
      { task: "Day 1", done: true, date: "Dec 24", summary: "Syntax, data types, I/O, logic, and iteration.", link: "learning/cpp/days/day1" }
    ]
  },
  {
    id: "flask",
    title: "Flask Web Development",
    desc: "Building lightweight and scalable web applications with Python.",
    status: "In Progress",
    icon: "server",
    color: "text-emerald-500 dark:text-emerald-400",
    link: "learning/flask",
    checklist: [
      { task: "Day 1", done: true, date: "Jan 04", summary: "Environment Setup & Hello World", link: "learning/flask/days/day01" },
      { task: "Day 2", done: true, summary: "Routing & Dynamic URLs", link: "learning/flask/days/day02" },
      { task: "Day 3", done: true, summary: "Jinja2 Templates & Static Files", link: "learning/flask/days/day03" },
      { task: "Day 4", done: true, summary: "Request Handling & Forms", link: "learning/flask/days/day04" },
      { task: "Day 5", done: true, summary: "SQLAlchemy & Database Integration", link: "learning/flask/days/day05" },
      { task: "Day 6", done: true, summary: "RESTful API Basics", link: "learning/flask/days/day06" },
      { task: "Day 7", done: true, summary: "Deployment & Final Mini-Project", link: "learning/flask/days/day07" }
    ]
  },
  {
    id: "rust-core-mastery",
    title: "Rust Programming",
    desc: "Mastering memory safety, concurrency, and performance with the Rust language.",
    status: "In Progress",
    icon: "cpu",
    color: "text-orange-600 dark:text-orange-500",
    link: "learning/rust",
    checklist: [
      { task: "Day 0", done: true, summary: "Toolchain, Cargo & Variables", link: "learning/rust/days/day01" },
      { task: "Day 1", done: true, summary: "Toolchain, Cargo & Variables", link: "learning/rust/days/day01" },
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning Fundamentals",
    desc: "Mastering the mathematical intuition and practical implementation of ML from foundations to Scikit-learn.",
    status: "In Progress",
    icon: "brain-circuit",
    color: "text-emerald-700 dark:text-emerald-300",
    link: "learning/machine-learning",
    levels: [
      { title: "Block 1: Foundations", desc: "ML vs traditional programming, problem framing, and real-world use cases.", link: "learning/machine-learning/blocks/block01-daya" },
      { title: "Block 2: Supervised Learning", desc: "Labeled data, features vs labels, and loss function intuition.", link: "learning/machine-learning/blocks/block02" },
    ]
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Neural Networks",
    desc: "A high-intensity dive into neural architectures, from perceptrons and backprop to Transformers and Attention mechanisms.",
    status: "In Progress",
    icon: "layers",
    color: "text-violet-600 dark:text-violet-400",
    link: "learning/deep-learning",
    levels: [
      { title: "Block 1: Foundations", desc: "Neurons, Weights, Bias, and the math of dot products.", link: "learning/deep-learning/blocks/block01" },
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Preprocessing",
    desc: "The foundation of reliable AI. Mastering the art of transforming raw, messy data into high-performance feature sets.",
    status: "In Progress",
    icon: "database",
    color: "text-teal-600 dark:text-teal-400",
    link: "learning/data-engineering",
    levels: [
      { title: "Block 1: Role of Data", desc: "Understanding why Data Engineering is the backbone of ML performance.", link: "learning/data-engineering/blocks/b01" },
    ]
  },
  {
    id: "model-deployment",
    title: "Model Deployment & MLOps",
    desc: "Closing the gap between research and production. Engineering robust, scalable, and monitored ML systems.",
    status: "In Progress",
    icon: "rocket",
    color: "text-rose-600 dark:text-rose-400",
    link: "learning/mlops",
    levels: [
      { title: "Block 1: Intro to MLOps", desc: "DevOps vs. MLOps: Understanding the ML lifecycle and system failure points.", link: "learning/mlops/blocks/b01" },
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure for AI",
    desc: "Architecting the environment for AI. Mastering GPUs, distributed training, and managed cloud services like AWS SageMaker and Vertex AI.",
    status: "In Progress",
    icon: "cloud",
    color: "text-cyan-600 dark:text-cyan-400",
    link: "learning/learning-cloud",
    levels: [
      { title: "Block 1: Cloud Basics", desc: "IaaS vs. PaaS vs. SaaS: Why the cloud is the backbone of modern AI.", link: "learning/cloud/blocks/b01" },
    ]
  },
  {
    id: "specialized-ai",
    title: "Specialized AI Domains",
    desc: "Choosing a superpower. Mastering specific niches like Computer Vision, NLP, Reinforcement Learning, and the frontier of Generative AI.",
    status: "In Progress",
    icon: "sparkles",
    color: "text-amber-600 dark:text-amber-400",
    link: "learning/specialized-ai",
    levels: [
      { title: "Block 1: Domain Overview", desc: "Mapping the AI landscape: CV vs. NLP vs. RL vs. GenAI and industry use cases.", link: "learning/specialized/blocks/b01" },
    ]
  }
];

export const getProjectBySlug = (slug: string) => {
  return [...currentProjectData].find(p => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);
};

export interface LearningInsight {
  title: string;
  date: string;
  desc: string;
  link: string;
  category?: string;
}

export const learningInsightsData: LearningInsight[] = [
  {
    title: "What I Learned Reading SWE-bench",
    date: "May 2026",
    desc: "A breakdown of the ICLR 2024 paper that tests AI on real GitHub bugs, and why the results were humbling.",
    link: "learning/swe-bench",
    category: "AI Research"
  },
  {
    title: "Understanding Model Context Protocol (MCP)",
    date: "May 2026",
    desc: "A deep dive into how MCP is standardizing the way AI models interact with local and remote data sources.",
    link: "learning/mcp-protocol",
    category: "AI Infrastructure"
  },
  {
    title: "The Power of Go Routines",
    date: "May 2026",
    desc: "How Golang's lightweight threads enable massive concurrency with minimal overhead.",
    link: "learning/golang-concurrency",
    category: "Backend"
  },
  {
    title: "Framer Motion Best Practices",
    date: "April 2026",
    desc: "Optimizing layout animations and shared element transitions for a premium feel.",
    link: "learning/framer-motion-tips",
    category: "Frontend"
  }
];
