// 1. Initialize Icons immediately
lucide.createIcons();

// --- DYNAMIC PATH HELPER ---
function getRootPath() {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i].getAttribute('src');
        if (src && src.includes('script.js')) {
            return src.replace('js/script.js', '');
        }
    }
    return '';
}
const root = getRootPath();

// --- DATA DEFINITIONS ---

// 1. EDUCATION DATA
const educationData = [
    {
        title: "Bachelor of Engineering",
        subtitle: "Lassonde School of Engineering - York University",
        date: "2025 - Present | Expected 2029",
        description: "Computer Engineering Student. Awarded York International Scholarship of Distinction.",
        details: [
            "Undergraduate Researcher | Space Geodesy Lab",
            "ISAYU Event Coordinator (Sep 2025 - Jan 2026)",
            "Note Share & Class Rep @ MATH 1013 (Sep 2025 - Present)"
        ],
        bg: "bg-indigo-50 dark:bg-indigo-500/10",
        color: "text-indigo-600 dark:text-indigo-400",
        icon: "graduation-cap"
    },
    {
        title: "Ontario Secondary School Diploma",
        subtitle: "Earl Haig Secondary School",
        date: "2023 - 2025",
        description: "Graduated as Ontario Scholar (x2).",
        grade: "4.0 GPA",
        details: [
            "Library Club Member (2024 - 2025)",
            "Library Volunteer (Feb 2024 - June 2024)"
        ],
        bg: "bg-blue-50 dark:bg-blue-500/10",
        color: "text-blue-600 dark:text-blue-400",
        icon: "school"
    }
];

// 2. PROFESSIONAL & RESEARCH EXPERIENCE
const experienceData = [
    {
        title: "Undergraduate Researcher",
        subtitle: "Space Geodesy Lab — York University",
        date: "Jan 2026 - Present",
        description: "Conducting scientific research on 'A Data-Driven Exploration of Extreme Weather Events Using Satellite and Model Data' under Dr. Spiros Pagiatakis and Yuying (Alice) Wang.",
        details: [
            "Navigating the full scientific programming workflow: data acquisition, analysis, and visualization",
            "Utilizing satellite and climate model datasets to examine atmospheric research topics",
            "Developing AI-driven machine learning algorithms to discover patterns in weather system impacts",
            "Building high-level data analysis competencies for atmospheric and climate science"
        ],
        bg: "bg-emerald-50 dark:bg-emerald-500/10",
        color: "text-emerald-600 dark:text-emerald-400",
        icon: "microscope"
    },
    {
        title: "Vice President",
        subtitle: "MBH&Co.",
        date: "Jan 2026 - Present",
        description: "Helping businesses grow through trusted relationships, meaningful connections, and structured collaboration.",
        details: [
            "Leading strategic initiatives to foster business growth through relationship building",
            "Implementing structured collaboration frameworks for team efficiency",
            "Developing meaningful connections within the business community"
        ],
        bg: "bg-indigo-50 dark:bg-indigo-500/10",
        color: "text-indigo-600 dark:text-indigo-400",
        icon: "briefcase"
    }
];

// 3. VOLUNTEERING & LEADERSHIP
const volunteeringData = [
    {
        title: "Event Coordinator",
        subtitle: "Iranian Students Association at York University (ISAYU)",
        date: "Sep 2025 - Jan 2026",
        description: "Coordinating student events and supporting community engagement.",
        details: ["Collaborating with team members to organize recreational and cultural activities"],
        bg: "bg-orange-50 dark:bg-orange-500/10",
        color: "text-orange-600 dark:text-orange-400",
        icon: "users"
    },
    {
        title: "Class Rep & Note Share Volunteer",
        subtitle: "MATH 1013, 1028 & PHYS 1801 — York University",
        date: "Sep 2025 - Present",
        description: "Representing student interests and supporting academic accessibility through structured technical note sharing.",
        details: [
            "Liaised between students and faculty to communicate feedback and advocate for academic improvements",
            "Supported inclusive education by providing high-quality, structured technical notes for students with accessibility requirements"
        ],
        bg: "bg-purple-50 dark:bg-purple-500/10",
        color: "text-purple-600 dark:text-purple-400",
        icon: "hand-helping"
    }
];

// 4. TECHNICAL SKILLS
const skillsData = [
    {
        category: "Languages",
        items: ["JavaScript (ES6+)", "Python", "Go (Golang)", "C++", "HTML5", "CSS3", "MATLAB"]
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion", "Supabase Auth"]
    },
    {
        category: "Backend & Database",
        items: ["Node.js", "Express", "Supabase", "PostgreSQL", "Firebase"]
    },
    {
        category: "Tools & AI",
        items: ["Git & GitHub", "Docker", "Linux", "Vercel", "Render", "OpenCV"]
    }
];

const currentProjectData = [
    {
        title: "MBH&Co.",
        desc: "A premium platform for business growth, built with a custom React 19 + Vite frontend and Wix Headless backend.",
        tech: ["React 19", "TypeScript", "Wix Headless", "Framer Motion"],
        status: "Beta",
        link: "https://www.mbhandco.com/",
        icon: "briefcase",
        color: "text-indigo-500"
    },
    {
        title: "MATH 1014",
        desc: "An interactive platform for mastering Calculus II, featuring step-by-step practice problems for infinite sequences and series.",
        tech: ["React", "Vite", "Tailwind CSS"],
        status: "Active",
        link: "https://math1014.vercel.app/",
        icon: "sigma",
        color: "text-blue-500",
        customIcon: "assets/icons/math1014-logo.svg"
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
        color: "text-red-500"
    }
];

const projectData = [
    {
        title: "MBH&Co.",
        desc: "Premium platform for business growth with custom dashboard and Wix integration.",
        tech: ["React 19", "Wix Headless"],
        stars: "Premium",
        link: "https://www.mbhandco.com/"
    },
    {
        title: "MATH 1014",
        desc: "Interactive calculus practice platform focused on infinite sequences and series with real-time feedback and detailed solutions.",
        tech: ["React", "Vite", "Tailwind CSS"],
        stars: "Personal",
        link: "https://math1014.vercel.app/",
        customIcon: "assets/icons/math1014-logo.svg"
    },
    {
        title: "Undercut",
        desc: "A full-stack AI platform for finding underpriced cars. Developed high-performance scrapers in Go for real-time extraction of GTA car listings.",
        tech: ["FastAPI", "Go", "Gemini AI"],
        stars: "Hackathon",
        link: "https://undercut-seven.vercel.app/"
    },
    {
        title: "HawkEye",
        desc: "Built a web app for object detection during a 48-hour hackathon sprint. Integrated computer vision concepts with a frontend interface.",
        tech: ["HTML/CSS", "Python", "Computer Vision"],
        stars: "Hackathon",
        link: "https://github.com/parsaabbasian"
    }
];

const certificateData = [
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

const blogData = [
    {
        title: "My First Hackathon",
        desc: "Lessons learned building 'HawkEye' in a 48-hour coding sprint.",
        tags: ["Hackathon", "AI"],
        link: "pages/blogs/hackathon/my-first-hackathon.html"
    },
    {
        title: "My Second Hackathon",
        desc: "Building Undercut: A full-stack AI platform for finding underpriced cars.",
        tags: ["Hackathon", "Full-Stack"],
        link: "pages/blogs/hackathon/my-second-hackathon.html"
    },
];

const thoughtData = [
    {
        title: "Lessons from Life",
        date: "Dec 2025",
        desc: "Insights on growth, discipline, and learning from both success and failure.",
        link: "pages/thoughts/lessons-from-life.html"
    },
];

// --- LEARNING DATA ---
const learningData = [
    {
        id: "dsa",
        title: "DSA Pattern Mastery",
        desc: "Mastering Data Structures using the Design Gurus curriculum.",
        status: "In Progress",
        icon: "network",
        color: "text-purple-600 dark:text-purple-400",
        link: "pages/learning/dsa-pattern-mastery/learning-dsa-pattern-mastery.html",
        checklist: [
            { task: "Day 1", done: true, date: "Dec 30", summary: "Big-O Notation & Array basics.", link: "pages/learning/dsa-pattern-mastery/days/day1.html" },
            { task: "Day 2", done: false, summary: "Sliding Window Pattern.", link: "pages/learning/dsa-pattern-mastery/days/day2.html" },
            { task: "Day 3", done: false, summary: "Two Pointers Pattern.", link: "pages/learning/dsa-pattern-mastery/days/day3.html" },
            { task: "Day 4", done: false, summary: "Fast & Slow Pointers." },
            { task: "Day 5", done: false, summary: "Merge Intervals." }
        ]
    }, // Removed the extra comma that was here
    {
        id: "github",
        title: "Git & GitHub Mastery",
        desc: "Version control essentials for modern software development.",
        status: "Completed",
        icon: "git-branch",
        color: "text-orange-600 dark:text-orange-400",
        link: "pages/learning/github/learning-github.html",
        levels: [
            {
                title: "Level 1: The Foundation",
                desc: "Config, Init, Stage, Commit, and basic local workflow.",
                link: "pages/learning/github/levels/level1.html"
            },
            {
                title: "Level 2: Branching & Merging",
                desc: "Working with branches, handling merges, and conflict resolution.",
                link: "pages/learning/github/levels/level2.html"
            },
            {
                title: "Level 3: Collaboration",
                desc: "Remotes, Pull Requests (PRs), Code Reviews, and Forks.",
                link: "pages/learning/github/levels/level3.html"
            },
            {
                title: "Level 4: Advanced Git",
                desc: "Rebasing, Cherry-picking, Stashing, and GitHub Actions.",
                link: "pages/learning/github/levels/level4.html"
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
        link: "pages/learning/golang/learning-golang.html",
        checklist: [
            { task: "Day 1", done: true, date: "Jan 02", summary: "Go Installation", link: "pages/learning/golang/days/day01.html" },
            // { task: "Day 2", done: false, summary: "Variables & Types", link: "pages/learning/golang/days/day02.html" },
            // { task: "Day 3", done: false, summary: "Control Flow", link: "pages/learning/golang/days/day03.html" },
            // { task: "Day 4", done: false, summary: "Loops", link: "pages/learning/golang/days/day04.html" },
            // { task: "Day 5", done: false, summary: "Functions", link: "pages/learning/golang/days/day05.html" },
            // { task: "Day 6", done: false, summary: "Basic I/O", link: "pages/learning/golang/days/day06.html" },
            // { task: "Day 7", done: false, summary: "W1 Project", link: "pages/learning/golang/days/day07.html" },
            // { task: "Day 8", done: false, summary: "Slices & Arrays", link: "pages/learning/golang/days/day08.html" },
            // { task: "Day 9", done: false, summary: "Maps & Range", link: "pages/learning/golang/days/day09.html" },
            // { task: "Day 10", done: false, summary: "Structs", link: "pages/learning/golang/days/day10.html" },
            // { task: "Day 11", done: false, summary: "Pointers", link: "pages/learning/golang/days/day11.html" },
            // { task: "Day 12", done: false, summary: "Error Handling", link: "pages/learning/golang/days/day12.html" },
            // { task: "Day 13", done: false, summary: "Packages", link: "pages/learning/golang/days/day13.html" },
            // { task: "Day 14", done: false, summary: "W2 Project", link: "pages/learning/golang/days/day14.html" },
            // { task: "Day 15", done: false, summary: "Goroutines", link: "pages/learning/golang/days/day15.html" },
            // { task: "Day 16", done: false, summary: "Channels", link: "pages/learning/golang/days/day16.html" },
            // { task: "Day 17", done: false, summary: "Advanced Channels", link: "pages/learning/golang/days/day17.html" },
            // { task: "Day 18", done: false, summary: "Sync", link: "pages/learning/golang/days/day18.html" },
            // { task: "Day 19", done: false, summary: "Flow Control", link: "pages/learning/golang/days/day19.html" },
            // { task: "Day 20", done: false, summary: "Std Library", link: "pages/learning/golang/days/day20.html" },
            // { task: "Day 21", done: false, summary: "W3 Project", link: "pages/learning/golang/days/day21.html" },
            // { task: "Day 22", done: false, summary: "Go Modules", link: "pages/learning/golang/days/day22.html" },
            // { task: "Day 23", done: false, summary: "HTTP Servers", link: "pages/learning/golang/days/day23.html" },
            // { task: "Day 24", done: false, summary: "JSON & API", link: "pages/learning/golang/days/day24.html" },
            // { task: "Day 25", done: false, summary: "Environment", link: "pages/learning/golang/days/day25.html" },
            // { task: "Day 26", done: false, summary: "Best Practices", link: "pages/learning/golang/days/day26.html" },
            // { task: "Day 27", done: false, summary: "Final Project", link: "pages/learning/golang/days/day27.html" },
            // { task: "Day 28", done: false, summary: "Graduation", link: "pages/learning/golang/days/day28.html" }
        ]
    },
    {
        id: "cpp",
        title: "C++ Programming",
        desc: "Mastering memory management, pointers, and OOP.",
        status: "In Progress",
        icon: "code-2",
        color: "text-blue-600 dark:text-blue-400",
        link: "pages/learning/cpp/learning-cpp.html",
        checklist: [
            { task: "Day 1", done: true, date: "Dec 24", summary: "Syntax, data types, I/O, logic, and iteration.", link: "pages/learning/cpp/days/day1.html" }
        ]
    },
    {
        id: "flask",
        title: "Flask Web Development",
        desc: "Building lightweight and scalable web applications with Python.",
        status: "In Progress",
        icon: "server",
        color: "text-emerald-500 dark:text-emerald-400",
        link: "pages/learning/flask/learning-flask.html",
        checklist: [
            { task: "Day 1", done: true, date: "Jan 04", summary: "Environment Setup & Hello World", link: "pages/learning/flask/days/day01.html" },
            { task: "Day 2", done: true, summary: "Routing & Dynamic URLs", link: "pages/learning/flask/days/day02.html" },
            { task: "Day 3", done: true, summary: "Jinja2 Templates & Static Files", link: "pages/learning/flask/days/day03.html" },
            { task: "Day 4", done: true, summary: "Request Handling & Forms", link: "pages/learning/flask/days/day04.html" },
            { task: "Day 5", done: true, summary: "SQLAlchemy & Database Integration", link: "pages/learning/flask/days/day05.html" },
            { task: "Day 6", done: true, summary: "RESTful API Basics", link: "pages/learning/flask/days/day06.html" },
            { task: "Day 7", done: true, summary: "Deployment & Final Mini-Project", link: "pages/learning/flask/days/day07.html" }
        ]
    },
    {
        id: "rust-core-mastery",
        title: "Rust Programming",
        desc: "Mastering memory safety, concurrency, and performance with the Rust language.",
        status: "In Progress",
        icon: "cpu",
        color: "text-orange-600 dark:text-orange-500",
        link: "pages/learning/rust/learning-rust.html",
        checklist: [
            { task: "Day 0", done: true, summary: "Toolchain, Cargo & Variables", link: "pages/learning/rust/days/day01.html" },
            { task: "Day 1", done: true, summary: "Toolchain, Cargo & Variables", link: "pages/learning/rust/days/day01.html" },
            { task: "Day 2", done: false, summary: "The Borrow Checker: Ownership & Borrowing", link: "pages/learning/rust/days/day02.html" },
            { task: "Day 3", done: false, summary: "Structs, Enums & Pattern Matching", link: "pages/learning/rust/days/day03.html" },
            { task: "Day 4", done: false, summary: "Error Handling (Option & Result)", link: "pages/learning/rust/days/day04.html" },
            { task: "Day 5", done: false, summary: "Traits, Generics & Lifetimes", link: "pages/learning/rust/days/day05.html" },
            { task: "Day 6", done: false, summary: "Smart Pointers & Memory Management", link: "pages/learning/rust/days/day06.html" },
            { task: "Day 7", done: false, summary: "Fearless Concurrency & Threads", link: "pages/learning/rust/days/day07.html" }
        ]
    },
    {
        id: "machine-learning",
        title: "Machine Learning Fundamentals",
        desc: "Mastering the mathematical intuition and practical implementation of ML from foundations to Scikit-learn.",
        status: "In Progress",
        icon: "brain-circuit",
        color: "text-indigo-600 dark:text-indigo-400",
        link: "pages/learning/machine-learning/machine-learning.html",
        levels: [
            {
                title: "Block 1: Foundations",
                desc: "ML vs traditional programming, problem framing, and real-world use cases.",
                link: "pages/learning/machine-learning/blocks/block01-daya.html"
            },
            { title: "Block 2: Supervised Learning", desc: "Labeled data, features vs labels, and loss function intuition.", link: "pages/learning/machine-learning/blocks/block02.html" },
            { title: "Block 3: Unsupervised Learning", desc: "Clustering, similarity metrics, and exploratory data analysis.", link: "pages/learning/machine-learning/blocks/block03.html" },
            { title: "Block 4: Data Stack", desc: "Vectorization with NumPy and data manipulation with Pandas.", link: "pages/learning/machine-learning/blocks/block04.html" },
            { title: "Block 5: Regression", desc: "Linear regression, MSE/MAE, and Gradient Descent conceptualization.", link: "pages/learning/machine-learning/blocks/block05.html" },
            { title: "Block 6: Classification", desc: "Logistic regression, Decision Boundaries, and k-NN/Trees.", link: "pages/learning/machine-learning/blocks/block06.html" },
            { title: "Block 7: Evaluation Metrics", desc: "Confusion matrices, Precision, Recall, F1, and AUC/ROC.", link: "pages/learning/machine-learning/blocks/block07.html" },
            { title: "Block 8: Clustering", desc: "K-means step-by-step, distance metrics, and choosing K.", link: "pages/learning/machine-learning/blocks/block08.html" },
            { title: "Block 9: Bias-Variance", desc: "The tradeoff, learning curves, and diagnosing models.", link: "pages/learning/machine-learning/blocks/block09.html" },
            { title: "Block 10: Regularization", desc: "Overfitting, data leakage, and L1/L2 (Lasso/Ridge) intuition.", link: "pages/learning/machine-learning/blocks/block10.html" },
            { title: "Block 11: Validation", desc: "Train/Val/Test splits and threshold tuning.", link: "pages/learning/machine-learning/blocks/block11.html" },
            { title: "Block 12: Scikit-learn Mastery", desc: "Pipelines, fit/predict API, and model comparison.", link: "pages/learning/machine-learning/blocks/block12.html" },
            { title: "Block 13: Workflow", desc: "End-to-End ML projects: From dataset to deployment metrics.", link: "pages/learning/machine-learning/blocks/block13.html" }
        ]
    },
    {
        id: "deep-learning",
        title: "Deep Learning & Neural Networks",
        desc: "A high-intensity dive into neural architectures, from perceptrons and backprop to Transformers and Attention mechanisms.",
        status: "In Progress",
        icon: "layers",
        color: "text-violet-600 dark:text-violet-400",
        link: "pages/learning/deep-learning/deep-learning.html",
        levels: [
            { title: "Block 1: Foundations", desc: "Neurons, Weights, Bias, and the math of dot products.", link: "pages/learning/deep-learning/blocks/block01.html" },
            { title: "Block 2: Activation Functions", desc: "Non-linearity: Sigmoid, ReLU, Softmax, and vanishing gradients.", link: "pages/learning/deep-learning/blocks/block02.html" },
            { title: "Block 3: ANNs", desc: "Multi-layer perceptrons, forward propagation, and PyTorch basics.", link: "pages/learning/deep-learning/blocks/block03.html" },
            { title: "Block 4: Optimization", desc: "Loss functions (Cross-Entropy) and Optimizers like Adam/SGD.", link: "pages/learning/deep-learning/blocks/block04.html" },
            { title: "Block 5: Backpropagation", desc: "CRITICAL: Chain rule, gradient flow, and manual computation.", link: "pages/learning/deep-learning/blocks/block05.html" },
            { title: "Block 6: Training Logic", desc: "Regularization, Dropout, and Early Stopping implementation.", link: "pages/learning/deep-learning/blocks/block06.html" },
            { title: "Block 7: PyTorch Deep Dive", desc: "Autograd, Tensors, and custom training pipelines.", link: "pages/learning/deep-learning/blocks/block07.html" },
            { title: "Block 8: CNNs", desc: "Convolutional layers, pooling, and image feature maps.", link: "pages/learning/deep-learning/blocks/block08.html" },
            { title: "Block 9: CNN Architectures", desc: "Batch Norm, Transfer Learning, and ResNet/VGG intuition.", link: "pages/learning/deep-learning/blocks/block09.html" },
            { title: "Block 10: RNNs", desc: "Sequential data, hidden states, and temporal dependencies.", link: "pages/learning/deep-learning/blocks/block10.html" },
            { title: "Block 11: LSTM & GRU", desc: "Gated units and long-term memory in sequences.", link: "pages/learning/deep-learning/blocks/block11.html" },
            { title: "Block 12: Transformers", desc: "Attention mechanism, Self-attention, and the 'Attention is All You Need' logic.", link: "pages/learning/deep-learning/blocks/block12.html" },
            { title: "Block 13: TF/Keras", desc: "Rebuilding PyTorch logic in the TensorFlow ecosystem.", link: "pages/learning/deep-learning/blocks/block13.html" }
        ]
    },
    {
        id: "data-engineering",
        title: "Data Engineering & Preprocessing",
        desc: "The foundation of reliable AI. Mastering the art of transforming raw, messy data into high-performance feature sets.",
        status: "In Progress",
        icon: "database",
        color: "text-teal-600 dark:text-teal-400",
        link: "pages/learning/data-engineering/learning-data-engineering.html",
        levels: [
            { title: "Block 1: Role of Data", desc: "Understanding why Data Engineering is the backbone of ML performance.", link: "pages/learning/data-engineering/blocks/b01.html" },
            { title: "Block 2: Data Types", desc: "Structured vs. Unstructured and the intuition of tabular schemas.", link: "pages/learning/data-engineering/blocks/b02.html" },
            { title: "Block 3: Data Sources", desc: "Working with SQL, APIs, and JSON while judging data trustworthiness.", link: "pages/learning/data-engineering/blocks/b03.html" },
            { title: "Block 4: EDA", desc: "Exploratory Data Analysis: Distributions, skewness, and spotting anomalies.", link: "pages/learning/data-engineering/blocks/b04.html" },
            { title: "Block 5: Missing Data", desc: "Imputation strategies: Mean, Median, Mode, and Time-series fills.", link: "pages/learning/data-engineering/blocks/b05.html" },
            { title: "Block 6: Dirty Data", desc: "Outlier detection (IQR/Z-score) and fixing inconsistent formatting.", link: "pages/learning/data-engineering/blocks/b06.html" },
            { title: "Block 7: Scaling", desc: "Min-Max scaling vs. Standardization and why models need it.", link: "pages/learning/data-engineering/blocks/b07.html" },
            { title: "Block 8: Encoding", desc: "One-Hot vs. Label encoding and managing the curse of dimensionality.", link: "pages/learning/data-engineering/blocks/b08.html" },
            { title: "Block 9: Feature Engineering", desc: "CORE SKILL: Creating ratios, aggregations, and domain-based inputs.", link: "pages/learning/data-engineering/blocks/b09.html" },
            { title: "Block 10: Feature Selection", desc: "Reducing noise via correlation filtering and variance thresholds.", link: "pages/learning/data-engineering/blocks/b10.html" },
            { title: "Block 11: Scaling Up", desc: "Handling large datasets: Chunking, sampling, and memory optimization.", link: "pages/learning/data-engineering/blocks/b11.html" },
            { title: "Block 12: Data Pipelines", desc: "Production thinking: Reproducibility and versioning features.", link: "pages/learning/data-engineering/blocks/b12.html" },
            { title: "Block 13: Capstone", desc: "End-to-End: Raw data to a production-ready ML dataset.", link: "pages/learning/data-engineering/blocks/b13.html" }
        ]
    },
    {
        id: "model-deployment",
        title: "Model Deployment & MLOps",
        desc: "Closing the gap between research and production. Engineering robust, scalable, and monitored ML systems.",
        status: "In Progress",
        icon: "rocket",
        color: "text-rose-600 dark:text-rose-400",
        link: "pages/learning/mlops/learning-mlops.html",
        levels: [
            { title: "Block 1: Intro to MLOps", desc: "DevOps vs. MLOps: Understanding the ML lifecycle and system failure points.", link: "pages/learning/mlops/blocks/b01.html" },
            { title: "Block 2: Pre-Deployment", desc: "Model serialization (ONNX/Pickle) and deterministic pipeline design.", link: "pages/learning/mlops/blocks/b02.html" },
            { title: "Block 3: Model Serving", desc: "Batch vs. Real-time inference logic and REST API simulations.", link: "pages/learning/mlops/blocks/b03.html" },
            { title: "Block 4: Flask for ML", desc: "Building lightweight prediction endpoints with Python Flask.", link: "pages/learning/mlops/blocks/b04.html" },
            { title: "Block 5: FastAPI Mastery", desc: "Asynchronous APIs, Pydantic validation, and auto-generated documentation.", link: "pages/learning/mlops/blocks/b05.html" },
            { title: "Block 6: API Design", desc: "Versioning, latency optimization, and structured production logging.", link: "pages/learning/mlops/blocks/b06.html" },
            { title: "Block 7: Docker Basics", desc: "Containerizing ML models for consistent environments across servers.", link: "pages/learning/mlops/blocks/b07.html" },
            { title: "Block 8: Advanced Docker", desc: "Multi-stage builds and optimizing image size for faster deployments.", link: "pages/learning/mlops/blocks/b08.html" },
            { title: "Block 9: CI/CD for ML", desc: "Automating tests and Docker builds via integration pipelines.", link: "pages/learning/mlops/blocks/b09.html" },
            { title: "Block 10: MLflow", desc: "Experiment tracking and managing the Model Registry (Staging/Prod).", link: "pages/learning/mlops/blocks/b10.html" },
            { title: "Block 11: Drift Detection", desc: "Monitoring performance decay: Data drift vs. Concept drift signals.", link: "pages/learning/mlops/blocks/b11.html" },
            { title: "Block 12: Monitoring", desc: "Production alerts for latency, throughput, and model degradation.", link: "pages/learning/mlops/blocks/b12.html" },
            { title: "Block 13: Kubernetes", desc: "Scaling ML APIs with Pods and Services for high-availability.", link: "pages/learning/mlops/blocks/b13.html" }
        ]
    },
    {
        id: "cloud-infrastructure",
        title: "Cloud & Infrastructure for AI",
        desc: "Architecting the environment for AI. Mastering GPUs, distributed training, and managed cloud services like AWS SageMaker and Vertex AI.",
        status: "In Progress",
        icon: "cloud",
        color: "text-cyan-600 dark:text-cyan-400",
        link: "pages/learning/learning-cloud/learning-cloud.html",
        levels: [
            { title: "Block 1: Cloud Basics", desc: "IaaS vs. PaaS vs. SaaS: Why the cloud is the backbone of modern AI.", link: "pages/learning/cloud/blocks/b01.html" },
            { title: "Block 2: Linux Mastery", desc: "SSH, terminal workflows, and environment management in cloud VMs.", link: "pages/learning/cloud/blocks/b02.html" },
            { title: "Block 3: Accelerators", desc: "CUDA, GPU memory limits, and choosing between CPUs, GPUs, and TPUs.", link: "pages/learning/cloud/blocks/b03.html" },
            { title: "Block 4: AWS Foundations", desc: "S3 data lakes, EC2 compute instances, and IAM security protocols.", link: "pages/learning/cloud/blocks/b04.html" },
            { title: "Block 5: AWS SageMaker", desc: "Managed training jobs, custom containers, and production endpoints.", link: "pages/learning/cloud/blocks/b05.html" },
            { title: "Block 6: Google Vertex AI", desc: "GCP's managed ML ecosystem: From storage to automated notebooks.", link: "pages/learning/cloud/blocks/b06.html" },
            { title: "Block 7: Azure ML Studio", desc: "Workspaces, experiments, and compute targets in the Microsoft ecosystem.", link: "pages/learning/cloud/blocks/b07.html" },
            { title: "Block 8: Distributed Training", desc: "Data vs. Model parallelism and synchronizing weights across clusters.", link: "pages/learning/cloud/blocks/b08.html" },
            { title: "Block 9: Cloud Pipelines", desc: "Loading large-scale datasets efficiently using object storage (S3/GCS).", link: "pages/learning/cloud/blocks/b09.html" },
            { title: "Block 10: Auto-Scaling", desc: "Horizontal vs. Vertical scaling and handling massive inference loads.", link: "pages/learning/cloud/blocks/b10.html" },
            { title: "Block 11: Cost Management", desc: "Spot instances, monitoring GPU utilization, and cloud pricing traps.", link: "pages/learning/cloud/blocks/b11.html" },
            { title: "Block 12: IaC (Terraform)", desc: "Infrastructure as Code: Building reproducible AI stacks automatically.", link: "pages/learning/cloud/blocks/b12.html" },
            { title: "Block 13: Cloud Project", desc: "CAPSTONE: A distributed training job on the cloud with full monitoring.", link: "pages/learning/cloud/blocks/b13.html" }
        ]
    },
    {
        id: "specialized-ai",
        title: "Specialized AI Domains",
        desc: "Choosing a superpower. Mastering specific niches like Computer Vision, NLP, Reinforcement Learning, and the frontier of Generative AI.",
        status: "In Progress",
        icon: "sparkles",
        color: "text-amber-600 dark:text-amber-400",
        link: "pages/learning/learning-specialized/learning-specialized.html",
        levels: [
            { title: "Block 1: Domain Overview", desc: "Mapping the AI landscape: CV vs. NLP vs. RL vs. GenAI and industry use cases.", link: "pages/learning/specialized/blocks/b01.html" },
            { title: "Block 2: Advanced Foundations", desc: "Linear Algebra for convolution, Probability for entropy, and GPU optimization.", link: "pages/learning/specialized/blocks/b02.html" },
            { title: "Block 3: CV Fundamentals", desc: "Images as tensors, feature extraction, and the OpenCV ecosystem.", link: "pages/learning/specialized/blocks/b03.html" },
            { title: "Block 4: DL for Vision", desc: "CNN architectures, Transfer Learning, and evaluation metrics like mAP.", link: "pages/learning/specialized/blocks/b04.html" },
            { title: "Block 5: Object Detection", desc: "Real-time inference with YOLO and training custom object detectors.", link: "pages/learning/specialized/blocks/b05.html" },
            { title: "Block 6: NLP Fundamentals", desc: "Tokenization, Word Embeddings, and the evolution of text pipelines.", link: "pages/learning/specialized/blocks/b06.html" },
            { title: "Block 7: Modern NLP & LLMs", desc: "Attention mechanisms, Prompt Engineering, and Fine-tuning strategies.", link: "pages/learning/specialized/blocks/b07.html" },
            { title: "Block 8: Semantic Search", desc: "Vector embeddings and Retrieval-Augmented Generation (RAG) systems.", link: "pages/learning/specialized/blocks/b08.html" },
            { title: "Block 9: RL Fundamentals", desc: "Agents, Environments, and the Exploration vs. Exploitation tradeoff.", link: "pages/learning/specialized/blocks/b09.html" },
            { title: "Block 10: RL Algorithms", desc: "Q-Learning, DQN, and policy gradient methods in simulated environments.", link: "pages/learning/specialized/blocks/b10.html" },
            { title: "Block 11: Speech & Audio", desc: "Spectrograms and signal processing for TTS and STT pipelines.", link: "pages/learning/specialized/blocks/b11.html" },
            { title: "Block 12: Generative AI", desc: "Diffusion models and the logic behind controlled text/image generation.", link: "pages/learning/specialized/blocks/b12.html" },
            { title: "Block 13: Capstone", desc: "DOMAIN PROJECT: A deep-dive portfolio piece in your chosen specialization.", link: "pages/learning/specialized/blocks/b13.html" }
        ]
    }
];

// --- RENDERERS ---

const renderSkills = (item) => {
    const listHtml = item.items.map(skill =>
        `<span class="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-md text-sm font-medium border border-gray-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-default hover:text-primary dark:hover:text-primary">${skill}</span>`
    ).join('');

    return `
        <div class="mb-8 last:mb-0">
            <h3 class="text-xs font-bold text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span class="w-1 h-4 bg-primary rounded-full"></span>
                ${item.category}
            </h3>
            <div class="flex flex-wrap gap-2.5">
                ${listHtml}
            </div>
        </div>`;
};

const renderExperience = (item) => {
    // Render the list of details/bullets
    const detailsHtml = (item.details || []).map(det => `
        <li class="text-gray-600 dark:text-slate-400 mt-1 flex items-start gap-2">
            <span class="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-600 shrink-0"></span> 
            ${det}
        </li>`).join('');

    // NEW: Logic to render the grade (GPA) badge only if it exists in the data
    const gradeHtml = item.grade ? `
        <div class="inline-flex items-center gap-1.5 mb-3 px-2 py-1 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
            <i data-lucide="award" class="w-3.5 h-3.5 text-primary"></i>
            <span class="text-xs font-bold text-gray-700 dark:text-slate-300">${item.grade}</span>
        </div>` : '';

    return `
        <div class="relative pl-8 group mb-8 last:mb-0">
            <span class="absolute top-1 -left-[5px] w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-700 border border-white dark:border-slate-900 group-hover:bg-primary transition-colors ring-4 ring-white dark:ring-slate-950"></span>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</h3>
            <p class="text-sm text-primary font-medium mb-1">${item.subtitle}</p>
            <p class="text-xs text-gray-500 dark:text-slate-500 font-mono mb-2 uppercase tracking-wide">${item.date}</p>
            
            ${gradeHtml} 

            <p class="text-gray-700 dark:text-slate-300 mb-2 leading-relaxed">${Array.isArray(item.description) ? item.description.join(' ') : (item.description || '')}</p>
            <ul class="text-sm">${detailsHtml}</ul>
        </div>`;
};

const renderCurrentProject = (item) => {
    const iconName = item.icon || 'zap';
    const iconColor = item.color || 'text-yellow-500';

    const iconHtml = item.customIcon
        ? `<img src="${root}${item.customIcon}" alt="${item.title}" class="w-8 h-8 rounded-lg shadow-sm border border-black/5 dark:border-white/10 shrink-0 object-cover">`
        : `<i data-lucide="${iconName}" class="w-5 h-5 ${iconColor}"></i>`;

    return `
        <a href="${item.link}" target="_blank" class="group block p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg dark:hover:bg-slate-800 transition-all">
            <div class="flex justify-between items-center mb-3">
                <div class="flex gap-3 items-center">
                    ${iconHtml}
                    <span class="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</span>
                </div>
                <span class="text-[10px] uppercase font-bold tracking-wide text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">${item.status}</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-slate-400 mb-4 line-clamp-2">${item.desc}</p>
            <div class="flex flex-wrap gap-2">
                ${item.tech.map(t => `<span class="text-xs text-gray-500 dark:text-slate-500 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md">${t}</span>`).join('')}
            </div>
        </a>`;
};

const renderProject = (item) => {
    const iconHtml = item.customIcon
        ? `<img src="${root}${item.customIcon}" alt="${item.title}" class="w-8 h-8 rounded-lg shadow-sm border border-black/5 dark:border-white/10 shrink-0 object-cover">`
        : `<i data-lucide="folder" class="w-5 h-5 text-primary"></i>`;

    return `
        <a href="${item.link}" target="_blank" class="group block p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg dark:hover:bg-slate-800 transition-all">
            <div class="flex justify-between items-center mb-3">
                <div class="flex gap-3 items-center">
                    ${iconHtml}
                    <span class="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</span>
                </div>
                <div class="flex items-center gap-1 text-gray-500 dark:text-slate-500 text-xs">
                    ${item.stars === 'Hackathon' ? '<i data-lucide="trophy" class="w-3 h-3 text-yellow-500"></i>' : '<i data-lucide="star" class="w-3 h-3"></i>'} 
                    ${item.stars}
                </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-slate-400 mb-4 line-clamp-2">${item.desc}</p>
            <div class="flex flex-wrap gap-2">
                ${item.tech.map(t => `<span class="text-xs text-gray-500 dark:text-slate-500 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md">${t}</span>`).join('')}
            </div>
        </a>`;
};

const renderCertificate = (item) => {
    return `
        <a href="${item.link}" target="_blank" class="group block p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all">
            <div class="flex justify-between items-start mb-4">
                <div class="p-2 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform">
                    <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                </div>
                <i data-lucide="external-link" class="w-4 h-4 text-gray-400 dark:text-slate-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"></i>
            </div>
            <h4 class="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">${item.title}</h4>
            <p class="text-xs text-gray-500 dark:text-slate-500">${item.org} • ${item.date}</p>
        </a>`;
};

const renderBlog = (item) => {
    const Tag = item.link ? 'a' : 'div';
    const hrefAttr = item.link ? `href="${root}${item.link}"` : '';
    return `
        <${Tag} ${hrefAttr} class="group p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all cursor-pointer h-full flex flex-col">
            <div class="flex flex-wrap gap-2 mb-4">
                ${item.tags.map(tag => `<span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white">${tag}</span>`).join('')}
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">${item.title}</h3>
            <p class="text-sm text-gray-600 dark:text-slate-400 leading-relaxed flex-1">${item.desc}</p>
            <div class="mt-4 flex items-center text-xs text-gray-500 dark:text-slate-500 group-hover:text-primary transition-colors">
                Read Article <i data-lucide="arrow-right" class="w-3 h-3 ml-1"></i>
            </div>
        </${Tag}>`;
};

const renderThought = (item) => {
    return `
        <a href="${root}${item.link}" class="group block p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</h3>
                <span class="text-[10px] font-mono text-gray-400 dark:text-slate-500 whitespace-nowrap bg-gray-50 dark:bg-slate-800 px-2 py-1 rounded">${item.date}</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-slate-400 line-clamp-2">${item.desc}</p>
        </a>`;
};

const renderLearning = (item) => {
    return `
        <a href="${root}${item.link}" class="group relative flex flex-col gap-4 p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all h-full">
            <div class="flex justify-between items-start">
                <div class="flex items-center gap-4">
                    <div class="p-3 rounded-lg bg-gray-50 dark:bg-slate-800 ${item.color} group-hover:scale-110 transition-transform">
                        <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</h3>
                        <span class="inline-block mt-1 text-[10px] uppercase font-bold tracking-wide text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 px-2 py-0.5 rounded-full bg-gray-50 dark:bg-slate-800/50">${item.status}</span>
                    </div>
                </div>
                <i data-lucide="chevron-right" class="w-5 h-5 text-gray-300 dark:text-slate-600 group-hover:text-primary transition-colors"></i>
            </div>
            <p class="text-sm text-gray-500 dark:text-slate-400 line-clamp-2 leading-relaxed mt-auto">${item.desc}</p>
        </a>`;
};

// --- FILTER LOGIC ---
function filterProjects(category) {
    const buttons = ['all', 'in-process', 'completed'];
    buttons.forEach(id => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) {
            btn.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
            btn.classList.add('bg-white', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-slate-300');
        }
    });
    const activeBtn = document.getElementById(`btn-${category}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-slate-300');
        activeBtn.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
    }
    const container = document.getElementById('learning-list-full');
    if (!container) return;
    container.innerHTML = '';
    let filteredData = [];
    if (category === 'all') {
        filteredData = learningData;
    } else if (category === 'in-process') {
        filteredData = learningData.filter(item => item.status === "In Progress");
    } else if (category === 'completed') {
        filteredData = learningData.filter(item => item.status === "Completed");
    }
    if (filteredData.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500">No items found in this category.</div>`;
    } else {
        filteredData.forEach(item => { container.innerHTML += renderLearning(item); });
    }
    lucide.createIcons();
}

// --- RENDER CALENDAR OR LEVELS ---
function renderCalendar(dataId) {
    const container = document.getElementById(dataId + '-calendar-view');
    if (!container) return;
    const data = learningData.find(d => d.id === dataId);
    if (!data) return;
    container.innerHTML = '';

    if (data.levels) {
        container.className = "grid grid-cols-1 md:grid-cols-2 gap-6";
        data.levels.forEach((level, index) => {

            let colorClass = 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
            let labelText = 'Level';

            if (data.id === 'machine-learning') {
                colorClass = 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400';
                labelText = 'Block';
            } else if (data.id === 'deep-learning') {
                colorClass = 'bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400';
                labelText = 'Block';
            } else if (data.id === 'data-engineering') {
                colorClass = 'bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400';
                labelText = 'Block';
            } else if (data.id === 'model-deployment') {
                colorClass = 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400';
                labelText = 'Block';
            } else if (data.id === 'cloud-infrastructure') {
                colorClass = 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400';
                labelText = 'Block';
            } else if (data.id === 'specialized-ai') {
                colorClass = 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400';
                labelText = 'Block';
            }

            container.innerHTML += `
                    <a href="${root}${level.link}" class="group block p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg h-full">
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 rounded-full text-xs font-bold ${colorClass}">
                                ${labelText} ${index + 1}
                            </span>
                            <i data-lucide="arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">${level.title}</h3>
                        <p class="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">${level.desc}</p>
                    </a>`;
        });
    }
    lucide.createIcons();
}
// --- MODAL LOGIC ---
function openModal(item) {
    const overlay = document.getElementById('modal-overlay');
    const titleEl = document.getElementById('modal-title');
    const statusEl = document.getElementById('modal-status');
    const descEl = document.getElementById('modal-desc');
    const linkContainer = document.getElementById('modal-link-container');
    if (!overlay) return;
    titleEl.textContent = item.task;
    descEl.textContent = item.summary || "No log entry for this day yet.";
    statusEl.innerHTML = item.done ? `<span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Completed</span>` : `<span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-400">Planned</span>`;
    linkContainer.innerHTML = item.link ? `<a href="${root}${item.link}" class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors mt-6">Read Full Note <i data-lucide="arrow-right" class="w-4 h-4"></i></a>` : '';
    overlay.classList.remove('hidden');
    setTimeout(() => { overlay.classList.add('active'); }, 10);
    lucide.createIcons();
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    setTimeout(() => { overlay.classList.add('hidden'); }, 200);
}

// --- MAIN INJECTION LOGIC ---
function injectContent(data, elementId, renderFn, limit = null) {
    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = '';
    const items = limit ? data.slice(0, limit) : data;
    items.forEach(item => container.innerHTML += renderFn(item));
}



// --- UI INJECTION ---
function getNavLink(hash) {
    const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    return isHome ? hash : `${root}index.html${hash}`;
}

function renderNavigation() {
    const nav = document.createElement('nav');
    nav.className = "fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300";
    nav.innerHTML = `
        <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
            <a href="${root}index.html" class="flex items-center gap-2 group">
                <div class="w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">P</div>
                <span class="self-center text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white tracking-tight">Parsa.Dev</span>
            </a>

            <div class="flex items-center gap-4 md:order-2">
                <button id="theme-toggle" class="p-2 text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors focus:outline-none">
                    <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
                    <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
                </button>
                <button id="mobile-menu-btn" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 dark:text-slate-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-white/5 focus:outline-none">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>

            <div class="hidden w-full md:block md:w-auto md:order-1" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 dark:border-white/10 rounded-lg bg-white dark:bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                    <li><a href="${getNavLink('#about')}" class="block py-2 px-3 text-gray-900 dark:text-white hover:text-primary transition-colors">Overview</a></li>
                    <li><a href="${getNavLink('#experience')}" class="block py-2 px-3 text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">Experience</a></li>
                    <li><a href="${root}pages/learning/learning.html" class="block py-2 px-3 text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">Learning</a></li>
                    <li><a href="${root}pages/projects/projects.html" class="block py-2 px-3 text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">Projects</a></li>
                    <li><a href="${root}pages/blogs/blogs.html" class="block py-2 px-3 text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">Blogs</a></li>
                    <li><a href="${getNavLink('#resume')}" class="block py-2 px-3 text-gray-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">Resume</a></li>
                    <li><a href="${getNavLink('#contact')}" class="block py-2 px-3 text-primary font-semibold hover:text-purple-500 transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
    `;

    // Check if we should replace an existing nav or prepend to body
    const existingNav = document.querySelector('nav');
    if (existingNav) {
        existingNav.replaceWith(nav);
    } else {
        document.body.prepend(nav);
    }
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = "border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-950 py-8 text-center mt-20";
    footer.innerHTML = `
        <p class="text-gray-500 dark:text-slate-500 text-sm">© 2026 Parsa Abbasian. Built with Vanilla JS & Tailwind.</p>
    `;
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.replaceWith(footer);
    } else {
        // Append to body if not found
        document.body.appendChild(footer);
    }
}

// Initializer
document.addEventListener("DOMContentLoaded", () => {
    // 1. INJECT UI
    renderNavigation();
    renderFooter();

    // 2. THEME PERSISTENCE
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark');
    } else {
        htmlElement.classList.add('dark');
    }

    // 3. UI HANDLERS (Now that elements exist)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar-default');
    if (mobileBtn && navbar) mobileBtn.addEventListener('click', () => { navbar.classList.toggle('hidden'); });

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // 4. CONTENT INJECTIONS
    injectContent(skillsData, 'skills-list', renderSkills);
    injectContent(educationData, 'education-list', renderExperience);
    injectContent(experienceData, 'experience-list', renderExperience);
    injectContent(volunteeringData, 'volunteering-list', renderExperience);
    injectContent(currentProjectData, 'current-project-list-preview', renderCurrentProject, 4);
    injectContent(projectData, 'project-list-preview', renderProject, 4);
    injectContent(certificateData, 'certificate-list-preview', renderCertificate, 2);
    injectContent(blogData, 'blog-list-preview', renderBlog, 2);
    injectContent(thoughtData, 'thought-list-preview', renderThought, 2);
    injectContent(learningData, 'learning-list-preview', renderLearning, 2);

    injectContent(currentProjectData, 'current-project-list-full', renderCurrentProject);
    injectContent(projectData, 'project-list-full', renderProject);
    injectContent(certificateData, 'certificate-list-full', renderCertificate);
    injectContent(blogData, 'blog-list-full', renderBlog);
    injectContent(thoughtData, 'thought-list-full', renderThought);
    injectContent(learningData, 'learning-list-full', renderLearning);

    // 5. RENDER CALENDARS
    renderCalendar('dsa');
    renderCalendar('cpp');
    renderCalendar('github');
    renderCalendar('golang');
    renderCalendar('flask');
    renderCalendar('rust-core-mastery');
    renderCalendar('cloud-infrastructure');
    renderCalendar('machine-learning');
    renderCalendar('deep-learning');
    renderCalendar('data-engineering');
    renderCalendar('mlops');
    renderCalendar('specialized-ai');

    lucide.createIcons();

    // 6. MODAL HANDLERS
    const closeBtn = document.getElementById('modal-close-btn');
    const overlay = document.getElementById('modal-overlay');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
});