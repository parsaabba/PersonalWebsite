export const educationData = [
    {
        title: "Bachelor of Engineering",
        subtitle: "Lassonde School of Engineering - York University",
        date: "2025 - Present | Expected 2029",
        description: "Computer Engineering Student. Awarded York International Scholarship of Distinction.",
        grade: "First Class Standing With Distinction",
        details: [
            "Undergraduate Researcher | Space Geodesy Lab",
            "Note Share & Class Rep @ MATH 1013, EECS 1028 & PHYS 1801 (Sep 2025 - Present)"
        ],
        bg: "bg-indigo-50 dark:bg-indigo-500/10",
        color: "text-indigo-600 dark:text-indigo-400",
        icon: "GraduationCap",
        logo: "/assets/logos/lassonde-logo.png"
    },
    {
        title: "Ontario Secondary School Diploma",
        subtitle: "Earl Haig Secondary School",
        date: "2023 - 2025",
        description: "Graduated as Ontario Scholar (x2).",
        grade: "4.0 GPA",
        details: [
            "Library Club Member (2024 - 2025)"
        ],
        bg: "bg-blue-50 dark:bg-blue-500/10",
        color: "text-blue-600 dark:text-blue-400",
        icon: "School"
    }
];

export const experienceData = [
    {
        title: "Operations Lead",
        subtitle: "Google Developer Groups (GDG)",
        date: "April 2026 - Present",
        description: "Mastering the logistics of high-impact community events. Ensuring every workshop and meetup runs like clockwork, from venue booking to hybrid streaming.",
        details: [
            "Own event logistics from start to finish",
            "Coordinate with university venue services and vendors",
            "Manage hybrid event technology (streaming, recording, interactive polls)",
            "Develop contingency plans for large-scale events"
        ],
        bg: "bg-cyan-50 dark:bg-cyan-500/10",
        color: "text-cyan-600 dark:text-cyan-400",
        icon: "Settings",
        logo: "/assets/logos/gdg-logo.png"
    },
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
        icon: "Microscope",
        logo: "/assets/logos/stem-fellowship-logo.png"
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
        icon: "Briefcase",
        logo: "/assets/logos/mbh-logo.png"
    }
];

export const volunteeringData = [
    {
        title: "Class Rep & Note Share Volunteer",
        subtitle: "MATH 1013, EECS 1028 & PHYS 1801 — York University",
        date: "Sep 2025 - Present",
        description: "Representing student interests and supporting academic accessibility through structured technical note sharing.",
        details: [
            "Liaised between students and faculty to communicate feedback and advocate for academic improvements",
            "Supported inclusive education by providing high-quality, structured technical notes for students with accessibility requirements"
        ],
        bg: "bg-purple-50 dark:bg-purple-500/10",
        color: "text-purple-600 dark:text-purple-400",
        icon: "HandHelping",
        logo: "/assets/logos/lassonde-logo.png"
    }
];

export const highSchoolData = [
    {
        title: "Newcomer Program Assistant",
        subtitle: "Afterschool Program for Newcomers",
        date: "Sep 2024 - Feb 2025",
        description: "Volunteered at an afterschool program for newcomer youth and families, working alongside a settlement worker.",
        details: [
            "Assisted in organizing and running community workshops and events",
            "Fostered an inclusive and welcoming environment for newcomer participants",
            "Collaborated with settlement workers to bridge communication gaps for families"
        ],
        bg: "bg-teal-50 dark:bg-teal-500/10",
        color: "text-teal-600 dark:text-teal-400",
        icon: "HeartHandshake",
        collapsible: true
    },
    {
        title: "Library Volunteer & Organizer",
        subtitle: "Earl Haig Secondary School Library",
        date: "Feb 2024 - June 2024",
        description: "Managed library operations and supported student resources while training new staff members.",
        details: [
            "Organized and shelved books to ensure students and staff had easy access to resources",
            "Managed and maintained printing equipment to support library daily operations",
            "Represented the library on Parent-Teacher Day, communicating core goals to the school community",
            "Trained and mentored new library assistants to help them adapt to their responsibilities"
        ],
        bg: "bg-blue-50 dark:bg-blue-500/10",
        color: "text-blue-600 dark:text-blue-400",
        icon: "BookOpen",
        collapsible: true
    }
];

export const skillsData = [
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

export const currentProjectData = [
    {
        title: "GitProfileX",
        desc: "The next-generation GitHub Profile README generator. Build a stunning profile with premium templates and dynamic stats.",
        tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        status: "Active",
        link: "https://gitprofilex.vercel.app/",
        icon: "Github",
        color: "text-indigo-500",
    },
    {
        title: "UniSpot",
        desc: "High-performance, real-time event discovery platform for York U. Features a Live Map, GPS Verification, and instant sync via WebSockets.",
        tech: ["React", "Go", "Mapbox", "PostgreSQL"],
        status: "Active",
        link: "https://yorkunispot.vercel.app/",
        icon: "MapPin",
        color: "text-red-500",
        customIcon: "/assets/icons/unispot-logo.svg"
    },
    {
        title: "MBH&Co.",
        desc: "A premium platform for business growth, built with a custom React 19 + Vite frontend and Wix Headless backend.",
        tech: ["React 19", "TypeScript", "Wix Headless", "Framer Motion"],
        status: "Beta",
        link: "https://www.mbhandco.com/",
        icon: "Briefcase",
        color: "text-indigo-500"
    },
    {
        title: "MATH 1014",
        desc: "An interactive platform for mastering Calculus II, featuring step-by-step practice problems for infinite sequences and series.",
        tech: ["React", "Vite", "Tailwind CSS"],
        status: "Active",
        link: "https://math1014.vercel.app/",
        icon: "Sigma",
        color: "text-blue-500",
        customIcon: "/assets/icons/math1014-logo.svg"
    }
];

export const blogData = [
    {
        title: "My First Hackathon",
        desc: "Lessons learned building 'HawkEye' in a 48-hour coding sprint.",
        tags: ["Hackathon", "AI"],
        link: "/pages/blogs/hackathon/my-first-hackathon.html"
    },
    {
        title: "My Second Hackathon",
        desc: "Building Undercut: A full-stack AI platform for finding underpriced cars.",
        tags: ["Hackathon", "Full-Stack"],
        link: "/pages/blogs/hackathon/my-second-hackathon.html"
    },
];

export const certificateData = [
    {
        title: "MATLAB Onramp",
        org: "MathWorks",
        date: "Sep 2025",
        link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=da86491c-0606-4558-8e0f-53ec6cd4842b&",
        bg: "bg-orange-50 dark:bg-orange-500/10",
        color: "text-orange-600 dark:text-orange-400",
        icon: "FileBadge"
    },
];

export const learningData = [
    {
        id: "dsa",
        title: "DSA Pattern Mastery",
        desc: "Mastering Data Structures using the Design Gurus curriculum.",
        status: "In Progress",
        icon: "Network",
        color: "text-purple-600 dark:text-purple-400",
        link: "/pages/learning/dsa-pattern-mastery/learning-dsa-pattern-mastery.html"
    }
];
