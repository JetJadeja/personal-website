import React from "react";
import projectsData from "../data/projectsData.json";

function Projects() {
  return (
    <section className="min-h-screen px-4 sm:px-8 py-16 bg-black text-white">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase mb-12 text-center glitch-target">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {projectsData.map((proj, idx) => (
          <div
            key={idx}
            /* 
               Removed glitch-target from each card so it doesn't 
               repeatedly glitch on hover or scanning. 
            */
            className="border-2 border-white p-6 text-left relative transition-all
                       hover:bg-white hover:text-black 
                       hover:scale-105 
                       cursor-pointer"
          >
            <h3 className="text-3xl font-bold tracking-wide uppercase">
              {proj.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed">
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;