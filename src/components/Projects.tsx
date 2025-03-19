import React from "react";
import projectsData from "../data/projectsData.json";

function Projects() {
  return (
    <section className="w-screen bg-black text-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-12 text-center">
          projects
        </h1>

        <div className="space-y-6">
          {/* Projects as horizontal rows with hover effect */}
          {projectsData.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pb-3 group hover:border-white transition-all"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-baseline">
                  <span className="font-mono text-xs opacity-50 w-8">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-mono text-base group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow icon that moves on hover */}
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>

              {/* Description only shows on hover */}
              <div className="ml-8 font-light text-sm text-gray-400 mt-1 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                {project.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
