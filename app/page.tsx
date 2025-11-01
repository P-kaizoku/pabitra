import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <AnimatedSection
          id="home"
          className="min-h-screen flex items-center justify-center px-6 py-20 relative"
        >
          <div className="max-w-7xl w-full">
            {/* Main Content - Asymmetric Grid 60-40 */}
            <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-6xl lg:text-[80px] font-bold tracking-tight leading-none mb-4">
                    Pabitra Mondal
                  </h1>
                  <h2 className="text-xl lg:text-2xl text-foreground/80 font-medium mb-6">
                    Full-Stack Developer & Machine Learning Engineer
                  </h2>
                  <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-xl">
                    Building intelligent web applications and exploring deep
                    learning. CS student at BVCOE Delhi with a passion for
                    solving complex problems through code.
                  </p>
                </div>

                {/* CTA Button */}
                <CTA />
              </div>

              {/* Right Side - Photo Placeholder */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md aspect-square bg-foreground/5 border border-foreground/10 rounded-2xl flex items-center justify-center">
                  <span className="text-foreground/30 text-sm">
                    Professional Photo
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Left - Social Links & Status */}
            <div className="absolute bottom-8 left-6 flex items-end gap-6">
              {/* Vertical Social Links */}
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/pabitramondal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/pabitramondal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="mailto:pabitra@example.com"
                  className="text-foreground/70 hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>

              {/* Status Text */}
              <div className="text-sm text-foreground/60">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Available for internships
                </span>
                <span className="mx-2">•</span>
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection
          id="about"
          className="min-h-screen flex items-center justify-center px-6 py-20"
        >
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">
              About
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Bio */}
              <div>
                <div className="space-y-6 mb-8">
                  <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                    I'm a third-year Computer Science student at Bharati
                    Vidyapeeth's College of Engineering with a passion for
                    building scalable web applications and exploring machine
                    learning.
                  </p>
                  <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                    My journey began with web development using React and
                    Next.js. I've contributed to college technical societies,
                    building websites and leading teams for events like Bvest.
                  </p>
                  <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                    Recently, I've been diving into ML and computer vision,
                    where I led a malware classification project that won first
                    place in our college competition.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-foreground/10">
                  <div>
                    <div className="text-2xl font-bold text-accent">8.5</div>
                    <div className="text-sm text-foreground/60">GPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-foreground/60">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">2</div>
                    <div className="text-sm text-foreground/60">
                      Years Coding
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">1st</div>
                    <div className="text-sm text-foreground/60">
                      Place Winner
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Working On & Education */}
              <div className="space-y-8">
                {/* What I'm Working On */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    What I'm Working On
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-foreground/80">
                        Learning advanced Next.js patterns
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-foreground/80">
                        Exploring PyTorch and deep learning
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-foreground/80">
                        Building project portfolio
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-foreground/80">
                        Contributing to open-source
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-accent pl-4">
                      <h4 className="font-medium text-foreground">
                        B.Tech CSE, BVCOE Delhi
                      </h4>
                      <p className="text-sm text-foreground/60">
                        2023 - 2027 • GPA 8.5
                      </p>
                    </div>
                    <div className="border-l-2 border-foreground/20 pl-4">
                      <h4 className="font-medium text-foreground">
                        Kendriya Vidyalaya Delhi Cantt
                      </h4>
                      <p className="text-sm text-foreground/60">2021 - 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">
              Skills
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="border border-foreground/10 p-6 hover:-translate-y-1 transition-transform duration-200">
                <h3 className="text-lg font-semibold mb-4 text-accent">
                  Frontend
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind</li>
                  <li>Framer Motion</li>
                </ul>
              </div>

              {/* Backend */}
              <div className="border border-foreground/10 p-6 hover:-translate-y-1 transition-transform duration-200">
                <h3 className="text-lg font-semibold mb-4 text-accent">
                  Backend
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>FastAPI</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>

              {/* ML & Data Science */}
              <div className="border border-foreground/10 p-6 hover:-translate-y-1 transition-transform duration-200">
                <h3 className="text-lg font-semibold mb-4 text-accent">
                  ML & Data Science
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>Python</li>
                  <li>PyTorch</li>
                  <li>OpenCV</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>

              {/* Tools */}
              <div className="border border-foreground/10 p-6 hover:-translate-y-1 transition-transform duration-200">
                <h3 className="text-lg font-semibold mb-4 text-accent">
                  Tools
                </h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="work" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
              Projects
            </h2>

            {/* Project 1: M-Classifier - Image Left */}
            <article className="mb-[140px] group">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="order-2 lg:order-1 overflow-hidden rounded-lg border border-foreground/10">
                  <div className="aspect-video bg-foreground/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-foreground/30 text-sm">
                      M-Classifier Preview
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-2">
                    🏆 1st Place Winner
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                    M-Classifier
                  </h3>
                  <p className="text-lg text-accent font-medium">
                    Deep Learning Malware Classification
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Computer vision-based malware detection system converting
                    binary files to images for CNN classification. Led team of
                    3, won first place in college competition.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      PyTorch
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      OpenCV
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      Scikit-learn
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      NumPy
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> Binary to image
                      pipeline
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> CNN architecture
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> High accuracy
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> Team leadership
                    </li>
                  </ul>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href="#"
                      className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      View Code
                    </a>
                    <a
                      href="#"
                      className="px-6 py-2 border border-foreground/20 hover:border-foreground/40 transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 2: WatchThis - Image Right */}
            <article className="mb-[140px] group">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                    WatchThis
                  </h3>
                  <p className="text-lg text-accent font-medium">
                    AI-Powered Movie Recommendations
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Intelligent movie recommendation system using FastAPI, TMDB
                    API, and Groq API for mood-based suggestions.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      FastAPI
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      TMDB API
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      Groq API
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      ML
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> RESTful API
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> Mood-based
                      recommendations
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> Real-time database
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> AI engine
                    </li>
                  </ul>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href="#"
                      className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      View Code
                    </a>
                    <a
                      href="#"
                      className="px-6 py-2 border border-foreground/20 hover:border-foreground/40 transition-colors"
                    >
                      Try Demo
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="overflow-hidden rounded-lg border border-foreground/10">
                  <div className="aspect-video bg-foreground/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-foreground/30 text-sm">
                      WatchThis Preview
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 3: Blog Platform - Image Left */}
            <article className="mb-[140px] group">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="order-2 lg:order-1 overflow-hidden rounded-lg border border-foreground/10">
                  <div className="aspect-video bg-foreground/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-foreground/30 text-sm">
                      Blog Platform Preview
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                    Full-Stack Blog Platform
                  </h3>
                  <p className="text-lg text-accent font-medium">
                    CMS with Authentication
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Modern blog with CRUD functionality, user auth, and rich
                    text editing. MERN stack with responsive UI.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      Express
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      MongoDB
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> User authentication
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> Rich text editor
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> RESTful API
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-accent">✓</span> Responsive UI
                    </li>
                  </ul>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href="#"
                      className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      View Code
                    </a>
                    <a
                      href="#"
                      className="px-6 py-2 border border-foreground/20 hover:border-foreground/40 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
              Experience
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-foreground/10"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1: Bvest */}
                <div className="relative pl-8 md:pl-20 group">
                  {/* Node */}
                  <div className="absolute -left-1.5 md:left-[26px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>

                  {/* Card */}
                  <div className="border border-foreground/10 p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          Technical Team Member
                        </h3>
                        <p className="text-accent font-medium">
                          Bvest - Technical Festival
                        </p>
                      </div>
                      <span className="text-sm text-foreground/60 mt-2 md:mt-0">
                        Sep 2025
                      </span>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Developed festival website using Next.js with Framer
                      Motion animations. Collaborated with cross-functional
                      teams for scalable web platform.
                    </p>

                    {/* Contributions */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Next.js development
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Framer Motion
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Team collaboration
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Deployment
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item 2: EduMinerva */}
                <div className="relative pl-8 md:pl-20 group">
                  {/* Node */}
                  <div className="absolute -left-1.5 md:left-[26px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>

                  {/* Card */}
                  <div className="border border-foreground/10 p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          Technical Member
                        </h3>
                        <p className="text-accent font-medium">EduMinerva</p>
                      </div>
                      <span className="text-sm text-foreground/60 mt-2 md:mt-0">
                        Oct 2023 - Present
                      </span>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Developing society website with React and Tailwind.
                      Working with design teams on UI/UX and organizing
                      technical workshops.
                    </p>

                    {/* Contributions */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        React & Tailwind
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Figma to code
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Workshop organization
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        UI/UX collaboration
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item 3: Deep Learning Research Intern */}
                <div className="relative pl-8 md:pl-20 group">
                  {/* Node */}
                  <div className="absolute -left-1.5 md:left-[26px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>

                  {/* Card */}
                  <div className="border border-foreground/10 p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-semibold">
                            Deep Learning Research Intern
                          </h3>
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                            🏆 1st Position
                          </span>
                        </div>
                        <p className="text-accent font-medium">
                          In-House Summer Training
                        </p>
                      </div>
                      <span className="text-sm text-foreground/60 mt-2 md:mt-0">
                        Summer 2025
                      </span>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Led team of 3 developing malware classification model
                      using computer vision. Implemented CNN architecture with
                      PyTorch achieving high accuracy.
                    </p>

                    {/* Contributions */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Team leadership
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        CNN implementation
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Image pipeline
                      </span>
                      <span className="text-xs px-3 py-1 bg-foreground/5 rounded-full">
                        Competition winner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-foreground/70 mb-16 max-w-2xl mx-auto">
              Currently looking for internship opportunities and open to
              interesting projects.
            </p>

            {/* Contact Methods */}
            <Contact />
          </div>
        </AnimatedSection>

        {/* Footer */}
      </main>
    </>
  );
}
