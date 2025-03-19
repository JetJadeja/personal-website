import React from "react";
import projectsData from "../data/projectsData.json";

function Projects() {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-black text-white relative">
      <div className="max-w-2xl text-center px-4">
        {/* Heading matches the About section's style */}
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-10">
          projects
        </h1>

        {/* Projects list with minimal styling */}
        <div className="text-left">
          {projectsData.map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-8 group"
            >
              <div className="flex">
                <span className="font-mono text-xs opacity-60 w-6 pt-1">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-mono text-base sm:text-lg group-hover:underline">
                    {proj.title}
                  </h3>
                  <p className="font-light text-sm sm:text-base leading-relaxed mt-1">
                    {proj.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
