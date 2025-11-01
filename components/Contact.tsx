"use client";

const Contact = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {/* Email */}
      <button
        onClick={() => {
          navigator.clipboard.writeText("pabitram322@gmail.com");
          alert("Email copied to clipboard!");
        }}
        className="group flex items-center gap-4 p-6 border border-foreground/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 text-left"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent group-hover:scale-110 transition-transform"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground/60 mb-1">Email</p>
          <p className="font-medium text-foreground truncate">
            pabitram322@gmail.com
          </p>
        </div>
      </button>

      {/* Phone */}
      <button
        onClick={() => {
          navigator.clipboard.writeText("+91 98303-35374");
          alert("Phone number copied to clipboard!");
        }}
        className="group flex items-center gap-4 p-6 border border-foreground/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 text-left"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent group-hover:scale-110 transition-transform"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground/60 mb-1">Phone</p>
          <p className="font-medium text-foreground">+91 98303-35374</p>
        </div>
      </button>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/0xp4v1"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-6 border border-foreground/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 text-left"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent group-hover:scale-110 transition-transform"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground/60 mb-1">LinkedIn</p>
          <p className="font-medium text-foreground truncate">
            linkedin.com/in/0xp4v1
          </p>
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/P-kaizoku"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-6 border border-foreground/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 text-left"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent group-hover:scale-110 transition-transform"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground/60 mb-1">GitHub</p>
          <p className="font-medium text-foreground truncate">
            github.com/P-kaizoku
          </p>
        </div>
      </a>
    </div>
  );
};

export default Contact;
