import React from "react";
import projectsData from "../data/projectsData.json";
import workExperience from "../data/workData.json";

// Work Experience Component
const WorkExperience = () => {
  const getLogo = (logo: string) => {
    return (
      <div className="relative w-10 h-10 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center group-hover:bg-gray-700 transition-colors">
        <img
          src={logo}
          alt="Company logo"
          className="object-cover w-full h-full"
          onError={(e) => {
            // Hide the image on error, showing the gray background
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-12 text-center">
        work
      </h1>

      <div className="mb-16">
        {/* Work items */}
        {workExperience.map((job, idx) => (
          <div key={idx} className={`mb-5 flex items-start group flex-row`}>
            {/* Logo in center column */}
            <div className="mx-6 pt-1 z-10">
              {getLogo(job.logo)}
              {/* Vertical connecting line except for last item */}
              {idx !== workExperience.length - 1 && (
                <div className="h-16 w-px bg-gray-800 mx-auto mt-2 group-hover:bg-gray-700 transition-colors"></div>
              )}
            </div>

            {/* Content column */}
            <div className={`flex-1`}>
              <div className="flex items-baseline mb-1 font-mono text-base">
                <span className="group-hover:text-gray-300 transition-colors">
                  {job.company}
                </span>
                <span className="text-xs mx-2 text-gray-500">·</span>
                <span className="text-gray-400 text-sm">{job.year}</span>
              </div>

              <p className="font-light text-sm text-gray-400 italic">
                {job.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  return (
    <div>
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
  );
};

// Main component that combines the two
function WorkAndProjects() {
  return (
    <section className="w-screen bg-black text-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        <WorkExperience />
        <Projects />
      </div>
    </section>
  );
}

export default WorkAndProjects;
