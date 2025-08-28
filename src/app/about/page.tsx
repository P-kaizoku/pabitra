import React from "react";

const page = () => {
  return (
    <div className="bg-background container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-4xl font-bold">About Me</h1>
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Hello! I'm a passionate developer with a love for creating innovative
          solutions and bringing ideas to life through code. I enjoy working
          with modern technologies and am always eager to learn new skills.
        </p>
        <p className="text-lg leading-relaxed">
          When I'm not coding, you can find me exploring new technologies,
          contributing to open source projects, or sharing knowledge with the
          developer community.
        </p>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Skills & Interests</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Full-stack web development</li>
            <li>React and TypeScript</li>
            <li>Modern JavaScript frameworks</li>
            <li>Problem solving and algorithms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
