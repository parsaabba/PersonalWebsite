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

const experienceData = [
    { title: "Bachelor of Engineering", 
        subtitle: "Lassonde School of Engineering - York University", 
        date: "2025 - Present | Expected 2029", 
        description: "Computer Engineering Student. Awarded York International Scholarship of Distinction.", 
        details: ["ISAYU Event Coordinator (Sep 2025 - Present)", "Note Share & Class Rep @ MATH 1013 (Sep 2025 - Present)"], 
        bg: "bg-indigo-50 dark:bg-indigo-500/10", 
        color: "text-indigo-600 dark:text-indigo-400", 
        icon: "graduation-cap" },

    { title: "Ontario Secondary School Diploma", 
        subtitle: "Earl Haig Secondary School", 
        date: "2023 - 2025", 
        description: "Graduated as Ontario Scholar (x2). Active in Library Club.", 
        details: ["Library Club Member (2024 - 2025)", "Library Volunteer (Feb 2024 - June 2024)"], 
        bg: "bg-blue-50 dark:bg-blue-500/10", 
        color: "text-blue-600 dark:text-blue-400", 
        icon: "school" }
];

const currentProjectData = [
    { 
        title: "LassondeHub", 
        desc: "A centralized academic resource portal built for lassonde engineering students.", 
        tech: ["HTML5", "Tailwind CSS", "Vanilla JS"], 
        status: "Active Beta", 
        link: "https://lassondehub.vercel.app/",
        icon: "zap",
        color: "text-yellow-500"
    },
    { 
        title: "Leetcoders", 
        desc: "A community platform dedicated to mastering Data Structures and Algorithms.", 
        tech: ["HTML5", "Tailwind CSS", "JavaScript"], 
        status: "Active", 
        link: "https://leetcoders.vercel.app/",
        icon: "code-2",
        color: "text-blue-500"
    },
    { 
        title: "AlgoDrift", 
        desc: "A high-performance, framework-free visualizer for algorithms and data structures.", 
        tech: ["HTML5", "CSS3", "Vanilla JS"], 
        status: "Active Beta", 
        link: "https://algodrift.vercel.app/",
        icon: "bar-chart-2", 
        color: "text-purple-500" 
    }
];

const projectData = [
    { title: "HawkEye", 
        desc: "Built a web app for object detection during a 48-hour hackathon sprint. Integrated computer vision concepts with a frontend interface.", 
        tech: ["HTML/CSS", "Python", "Computer Vision"], 
        stars: "Hackathon", 
        link: "https://github.com/parsaabba" }
];

const certificateData = [
    { title: "MATLAB Onramp", 
        org: "MathWorks", 
        date: "Sep 2025", 
        link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=da86491c-0606-4558-8e0f-53ec6cd4842b&", 
        bg: "bg-orange-50 dark:bg-orange-500/10", 
        color: "text-orange-600 dark:text-orange-400", 
        icon: "file-badge" },
];

const blogData = [
    { 
        title: "My First Hackathon", 
        desc: "Lessons learned building 'HawkEye' in a 48-hour coding sprint.", 
        tags: ["Hackathon", "AI"],
        link: "pages/blogs/hackathon/my-first-hackathon.html" 
    },
];

const thoughtData = [
    {   title: "Lessons from Life", 
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
        desc: "Mastering Data Structures using the Thita.ai curriculum.",
        status: "In Progress",
        icon: "network",
        color: "text-purple-600 dark:text-purple-400",
        link: "pages/learning/dsa-pattern-mastery/learning-dsa-pattern-mastery.html",
        sections: [] 
    },
    // --- C++ SECTION ---
    {
        id: "cpp",
        title: "C++ Programming",
        desc: "Mastering memory management, pointers, and OOP.",
        status: "In Progress",
        icon: "code-2",
        color: "text-blue-600 dark:text-blue-400",
        link: "pages/learning/cpp/learning-cpp.html",
        checklist: [
            { task: "Day 1", 
                done: true, 
                date: "Dec 24", 
                summary: "A quick-start guide to C++ core concepts: syntax, data types, I/O, logic, and iteration.", 
                link: "pages/learning/cpp/days/day1.html" },
            { task: "Day 2", 
                done: false, 
                date: "Dec 23", 
                summary: "Variables, Data Types, and Basic I/O.", 
                link: "pages/learning/cpp/days/day2.html" },
            { task: "Day 3", done: false, 
                summary: "Control Flow: Loops and Conditionals.", 
                link: "pages/learning/cpp/days/day3.html" },
            { task: "Day 4", done: false, summary: "" },
            { task: "Day 5", done: false, summary: "" },
            { task: "Day 6", done: false, summary: "" },
            { task: "Day 7", done: false, summary: "" },
            { task: "Day 8", done: false, summary: "" },
            { task: "Day 9", done: false, summary: "" },
            { task: "Day 10", done: false, summary: "" },
            { task: "Day 11", done: false, summary: "" },
            { task: "Day 12", done: false, summary: "" },
            { task: "Day 13", done: false, summary: "" },
            { task: "Day 14", done: false, summary: "" },
            { task: "Day 15", done: false, summary: "" },
            { task: "Day 16", done: false, summary: "" },
            { task: "Day 17", done: false, summary: "" },
            { task: "Day 18", done: false, summary: "" },
            { task: "Day 19", done: false, summary: "" },
            { task: "Day 20", done: false, summary: "" },
            { task: "Day 21", done: false, summary: "" },
            { task: "Day 22", done: false, summary: "" },
            { task: "Day 23", done: false, summary: "" },
            { task: "Day 24", done: false, summary: "" },
            { task: "Day 25", done: false, summary: "" },
            { task: "Day 26", done: false, summary: "" },
            { task: "Day 27", done: false, summary: "" },
            { task: "Day 28", done: false, summary: "" },
            { task: "Day 29", done: false, summary: "" },
            { task: "Day 30", done: false, summary: "" }
        ]
    },
// --- GITHUB SECTION (New Levels) ---
    {
        id: "github",
        title: "Git & GitHub Mastery",
        desc: "Version control essentials for modern software development.",
        status: "Completed",
        icon: "git-branch",
        color: "text-orange-600 dark:text-orange-400",
        link: "pages/learning/github/learning-github.html",
        levels: [
            { title: "Level 1: The Foundation", 
                desc: "Config, Init, Stage, Commit, and basic local workflow.", 
                link: "pages/learning/github/levels/level1.html" },
            { title: "Level 2: Branching & Merging", 
                desc: "Working with branches, handling merges, and conflict resolution.", 
                link: "pages/learning/github/levels/level2.html" },
            { title: "Level 3: Collaboration", 
                desc: "Remotes, Pull Requests (PRs), Code Reviews, and Forks.", 
                link: "pages/learning/github/levels/level3.html" },
            { title: "Level 4: Advanced Git", 
                desc: "Rebasing, Cherry-picking, Stashing, and GitHub Actions.", 
                link: "pages/learning/github/levels/level4.html" }
        ]
    }
];

// --- RENDERERS ---
const renderExperience = (item) => { const detailsHtml = item.details.map(det => `<li class="text-gray-600 dark:text-slate-400 mt-1 flex items-start gap-2"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-600 shrink-0"></span> ${det}</li>`).join(''); return `<div class="relative pl-8 group mb-8 last:mb-0"><span class="absolute top-1 -left-[5px] w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-700 border border-white dark:border-slate-900 group-hover:bg-primary transition-colors ring-4 ring-white dark:ring-slate-950"></span><h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</h3><p class="text-sm text-primary font-medium mb-1">${item.subtitle}</p><p class="text-xs text-gray-500 dark:text-slate-500 font-mono mb-3 uppercase tracking-wide">${item.date}</p><p class="text-gray-700 dark:text-slate-300 mb-2 leading-relaxed">${item.description}</p><ul class="text-sm">${detailsHtml}</ul></div>`; };
const renderCurrentProject = (item) => { 
    // Default to 'zap' and 'yellow' if you forget to add them to data
    const iconName = item.icon || 'zap';
    const iconColor = item.color || 'text-yellow-500';

    return `<a href="${item.link}" target="_blank" class="group block p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg dark:hover:bg-slate-800 transition-all"><div class="flex justify-between items-center mb-3"><div class="flex gap-2"><i data-lucide="${iconName}" class="w-5 h-5 ${iconColor}"></i><span class="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</span></div><span class="text-[10px] uppercase font-bold tracking-wide text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">${item.status}</span></div><p class="text-sm text-gray-600 dark:text-slate-400 mb-4 line-clamp-2">${item.desc}</p><div class="flex flex-wrap gap-2">${item.tech.map(t => `<span class="text-xs text-gray-500 dark:text-slate-500 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md">${t}</span>`).join('')}</div></a>`; 
};
const renderProject = (item) => { return `<a href="${item.link}" target="_blank" class="group block p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg dark:hover:bg-slate-800 transition-all"><div class="flex justify-between items-center mb-3"><div class="flex gap-2"><i data-lucide="folder" class="w-5 h-5 text-primary"></i><span class="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</span></div><div class="flex items-center gap-1 text-gray-500 dark:text-slate-500 text-xs">${item.stars === 'Hackathon' ? '<i data-lucide="trophy" class="w-3 h-3 text-yellow-500"></i>' : '<i data-lucide="star" class="w-3 h-3"></i>'} ${item.stars}</div></div><p class="text-sm text-gray-600 dark:text-slate-400 mb-4 line-clamp-2">${item.desc}</p><div class="flex flex-wrap gap-2">${item.tech.map(t => `<span class="text-xs text-gray-500 dark:text-slate-500 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md">${t}</span>`).join('')}</div></a>`; };
const renderCertificate = (item) => { return `<a href="${item.link}" target="_blank" class="group block p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all"><div class="flex justify-between items-start mb-4"><div class="p-2 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform"><i data-lucide="${item.icon}" class="w-6 h-6"></i></div><i data-lucide="external-link" class="w-4 h-4 text-gray-400 dark:text-slate-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"></i></div><h4 class="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">${item.title}</h4><p class="text-xs text-gray-500 dark:text-slate-500">${item.org} • ${item.date}</p></a>`; };
const renderBlog = (item) => { 
    // If a link exists, use an <a> tag, otherwise use a <div>
    const Tag = item.link ? 'a' : 'div';
    
    // Create the href attribute using the dynamic root path
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
const renderThought = (item) => { return `<a href="${root}${item.link}" class="group block p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all"><div class="flex justify-between items-start mb-2"><h3 class="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</h3><span class="text-[10px] font-mono text-gray-400 dark:text-slate-500 whitespace-nowrap bg-gray-50 dark:bg-slate-800 px-2 py-1 rounded">${item.date}</span></div><p class="text-sm text-gray-600 dark:text-slate-400 line-clamp-2">${item.desc}</p></a>`; };
const renderLearning = (item) => { return `<a href="${root}${item.link}" class="group relative flex flex-col gap-4 p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:bg-slate-800 transition-all h-full"><div class="flex justify-between items-start"><div class="flex items-center gap-4"><div class="p-3 rounded-lg bg-gray-50 dark:bg-slate-800 ${item.color} group-hover:scale-110 transition-transform"><i data-lucide="${item.icon}" class="w-6 h-6"></i></div><div><h3 class="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">${item.title}</h3><span class="inline-block mt-1 text-[10px] uppercase font-bold tracking-wide text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 px-2 py-0.5 rounded-full bg-gray-50 dark:bg-slate-800/50">${item.status}</span></div></div><i data-lucide="chevron-right" class="w-5 h-5 text-gray-300 dark:text-slate-600 group-hover:text-primary transition-colors"></i></div><p class="text-sm text-gray-500 dark:text-slate-400 line-clamp-2 leading-relaxed mt-auto">${item.desc}</p></a>`; };


// --- FILTER LOGIC (NEW) ---
function filterProjects(category) {
    // 1. Visual Update: Switch button styles
    const buttons = ['all', 'in-process', 'completed'];
    buttons.forEach(id => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) {
            // Reset to inactive style
            btn.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
            btn.classList.add('bg-white', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-slate-300');
        }
    });

    // Set clicked button to active style
    const activeBtn = document.getElementById(`btn-${category}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-slate-300');
        activeBtn.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
    }

    // 2. Logic Update: Filter the data
    const container = document.getElementById('learning-list-full');
    if (!container) return; // Guard clause in case we are on home page

    container.innerHTML = ''; // Clear current list

    let filteredData = [];

    // MAP HTML BUTTON CATEGORIES TO YOUR DATA STRINGS
    if (category === 'all') {
        filteredData = learningData;
    } else if (category === 'in-process') {
        // Your data uses "In Progress", HTML sends "in-process"
        filteredData = learningData.filter(item => item.status === "In Progress");
    } else if (category === 'completed') {
        // Your data uses "Completed"
        filteredData = learningData.filter(item => item.status === "Completed");
    }

    // 3. Render
    if (filteredData.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500">No items found in this category.</div>`;
    } else {
        filteredData.forEach(item => {
            container.innerHTML += renderLearning(item);
        });
    }

    // 4. Re-initialize icons for new elements
    lucide.createIcons();
}

// --- RENDER DSA ---
function renderDSACourse(dataId) {
    const container = document.getElementById('dsa-plan-view');
    if (!container) return;

    const data = learningData.find(d => d.id === dataId);
    if (!data || !data.sections) return;

    container.innerHTML = '';

    data.sections.forEach((section) => {
        let patternsHtml = '';
        section.patterns.forEach(pat => {
            const tag = pat.link ? 'a' : 'div';
            const href = pat.link ? `href="${root}${pat.link}"` : '';
            const hoverClass = pat.link ? 'hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer' : 'cursor-default';
            const statusIcon = pat.done ? `<div class="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1.5 rounded-full"><i data-lucide="check" class="w-4 h-4"></i></div>` : `<span class="text-xs font-bold text-gray-400 font-mono w-8 text-center">${pat.id}</span>`;

            patternsHtml += `
            <${tag} ${href} class="group flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-b border-gray-100 dark:border-slate-800 last:border-0 ${hoverClass} transition-colors block">
                <div class="flex items-center gap-4 flex-1">
                    ${statusIcon}
                    <h4 class="text-sm font-bold text-gray-900 dark:text-white ${pat.link ? 'group-hover:text-primary' : ''} transition-colors">${pat.name}</h4>
                </div>
                <div class="flex items-center gap-2 text-[10px] font-medium shrink-0">
                    <span class="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 rounded">Theory</span>
                    <span class="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-800 rounded">${pat.problems} Problems</span>
                    <span class="px-2 py-1 ${pat.done ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-500'} rounded">${pat.done ? 'Completed' : '0 Attempted'}</span>
                </div>
            </${tag}>
            `;
        });

        container.innerHTML += `
            <div class="mb-6 last:mb-0">
                <div class="flex items-center justify-between bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-4 rounded-t-xl">
                    <div><h3 class="font-bold text-lg text-gray-900 dark:text-white">${section.title}</h3></div>
                    <span class="text-xs font-medium text-gray-500 dark:text-slate-400">${section.stats}</span>
                </div>
                <div class="bg-white dark:bg-slate-900 border-x border-b border-gray-200 dark:border-slate-800 rounded-b-xl overflow-hidden">${patternsHtml}</div>
            </div>
        `;
    });
    lucide.createIcons();
}

// --- RENDER CALENDAR OR LEVELS (UPDATED: Faint Green Style) ---
function renderCalendar(dataId) {
    const container = document.getElementById(dataId + '-calendar-view');
    if (!container) return;

    const data = learningData.find(d => d.id === dataId);
    if (!data) return;

    container.innerHTML = '';

    // MODE 1: LEVELS (For GitHub) - No changes here
    if (data.levels) {
        container.className = "grid grid-cols-1 md:grid-cols-2 gap-6";
        data.levels.forEach((level, index) => {
            const html = `
                <a href="${root}${level.link}" class="group block p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg h-full">
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">Level ${index + 1}</span>
                        <i data-lucide="arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">${level.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">${level.desc}</p>
                </a>
            `;
            container.innerHTML += html;
        });
        lucide.createIcons();
        return; 
    }

    // MODE 2: CHECKLIST (For C++) - CHANGES HERE
    if (data.checklist) {
        container.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4";

        data.checklist.forEach((item, index) => {
            const dayNumber = index + 1;
            
            // 1. UPDATED: Fainter green colors for completed state
            const statusClass = item.done 
                ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-900/30' 
                : 'bg-white dark:bg-slate-900 text-gray-500 dark:text-slate-400 border-gray-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary hover:shadow-lg';

            // 2. UPDATED: Simpler date style for faintly colored boxes
            const dateHtml = (item.done && item.date) 
                ? `<span class="text-[10px] font-medium mt-1 opacity-75">${item.date}</span>` 
                : '';

            const html = `
                <div class="${statusClass} border rounded-xl h-24 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden group">
                    <span class="text-[10px] font-bold uppercase tracking-wider opacity-70 mb-1">Day</span>
                    <span class="text-2xl font-bold leading-none">${dayNumber}</span>
                    ${dateHtml}
                    ${item.done ? '<i data-lucide="check" class="absolute top-2 right-2 w-4 h-4 opacity-50"></i>' : ''}
                </div>
            `;

            const wrapper = document.createElement('div');
            wrapper.innerHTML = html;
            const element = wrapper.firstElementChild;
            
            element.addEventListener('click', () => openModal(item));
            
            container.appendChild(element);
        });
        lucide.createIcons();
    }
}

// --- MODAL LOGIC (UPDATED: Button Injection) ---
function openModal(item) {
    const overlay = document.getElementById('modal-overlay');
    const titleEl = document.getElementById('modal-title');
    const statusEl = document.getElementById('modal-status');
    const descEl = document.getElementById('modal-desc');
    const linkContainer = document.getElementById('modal-link-container');

    if(!overlay) return;

    titleEl.textContent = item.task;
    descEl.textContent = item.summary || "No log entry for this day yet.";
    
    // Status Badge
    if(item.done) {
        statusEl.innerHTML = `<span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Completed</span>`;
    } else {
        statusEl.innerHTML = `<span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-400">Planned</span>`;
    }

    // Link Button Logic
    if (item.link) {
        linkContainer.innerHTML = `
            <a href="${root}${item.link}" class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors mt-6">
                Read Full Note <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        `;
    } else {
        linkContainer.innerHTML = '';
    }

    overlay.classList.remove('hidden');
    setTimeout(() => { overlay.classList.add('active'); }, 10);
    lucide.createIcons();
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if(!overlay) return;
    overlay.classList.remove('active');
    setTimeout(() => { overlay.classList.add('hidden'); }, 200);
}

// --- MAIN INJECTION LOGIC ---
function injectContent(data, elementId, renderFn, limit = null) {
    const container = document.getElementById(elementId);
    if(!container) return;
    container.innerHTML = '';
    const items = limit ? data.slice(0, limit) : data;
    items.forEach(item => container.innerHTML += renderFn(item));
}

document.addEventListener("DOMContentLoaded", () => {
    injectContent(experienceData, 'experience-list', renderExperience);
    injectContent(currentProjectData, 'current-project-list', renderCurrentProject); 
    injectContent(projectData, 'project-list-preview', renderProject, 2); 
    injectContent(certificateData, 'certificate-list-preview', renderCertificate, 2); 
    injectContent(blogData, 'blog-list-preview', renderBlog, 2); 
    injectContent(thoughtData, 'thought-list-preview', renderThought, 2); 
    injectContent(learningData, 'learning-list-preview', renderLearning, 2); 

    injectContent(projectData, 'project-list-full', renderProject);
    injectContent(certificateData, 'certificate-list-full', renderCertificate);
    injectContent(blogData, 'blog-list-full', renderBlog);
    injectContent(thoughtData, 'thought-list-full', renderThought); 
    injectContent(learningData, 'learning-list-full', renderLearning); 

    renderDSACourse('dsa'); 
    
    // RENDER CALENDARS BY ID
    renderCalendar('cpp'); 
    renderCalendar('github');

    lucide.createIcons();

    const closeBtn = document.getElementById('modal-close-btn');
    const overlay = document.getElementById('modal-overlay');
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar-default');
    if (mobileBtn && navbar) mobileBtn.addEventListener('click', () => { navbar.classList.toggle('hidden'); });

    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme');
    if (!currentTheme || currentTheme === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
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
});