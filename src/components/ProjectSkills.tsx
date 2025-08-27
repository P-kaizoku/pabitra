"use client";

import React, { useState } from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const ProjectSkills = () => {
  const [switchTab, setSwitchTab] = useState(true);
  return (
    <section className="flex flex-col items-center justify-center pt-4">
      <div className="flex items-center justify-center rounded-xl bg-neutral-400">
        <p
          className="cursor-pointer px-4 py-2 transition-opacity duration-200"
          style={{ opacity: switchTab ? 1 : 0.5 }}
          onClick={() => setSwitchTab(true)}
        >
          Projects
        </p>
        <p
          className="cursor-pointer px-4 py-2 transition-opacity duration-200"
          style={{ opacity: switchTab ? 0.5 : 1 }}
          onClick={() => setSwitchTab(false)}
        >
          Skills
        </p>
      </div>
      <section>
        {switchTab ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <h2>Projects</h2>
            <ThreeDCardDemo />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <h2>Skills</h2>
            <p>Skill 1</p>
            <p>Skill 2</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default ProjectSkills;
