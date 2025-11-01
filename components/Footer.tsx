"use client";

export default function Footer() {
  return (
    <footer
      className="border-t border-foreground/10"
      style={{ height: "70px" }}
    >
      <div className="max-w-6xl mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">© 2024 Pabitra Mondal</p>

        {/* Back to Top Button */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="text-sm font-medium text-foreground/60 hover:text-accent transition-colors flex items-center gap-2"
        >
          Back to top
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>

        <p className="text-sm text-foreground/60">
          Designed & Built by Pabitra Mondal
        </p>
      </div>
    </footer>
  );
}
