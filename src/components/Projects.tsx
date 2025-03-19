import React from "react";
import projectsData from "../data/projectsData.json";

function Projects() {
  return (
    <section className="w-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-12 text-center">
          projects
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-start group">
                {/* Right side - content */}
                <div className="flex-1">
                  <h3 className="font-mono text-base group-hover:underline">
                    {project.title.toLowerCase()}
                  </h3>

                  <p className="font-light text-sm text-gray-300 mt-2">
                    {project.description.toLowerCase()}
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
