"use client";

const CTA = () => {
  return (
    <button
      onClick={() => {
        const element = document.getElementById("work");
        if (element) {
          const offset = 70;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }}
      className="px-8 py-4 bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
    >
      View My Work
    </button>
  );
};

export default CTA;
