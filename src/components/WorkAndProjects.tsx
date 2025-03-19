import React from "react";
import projectsData from "../data/projectsData.json";
import workExperience from "../data/workData.json";

// Logo component that displays an actual logo if available or a gray placeholder
function WorkAndProjects() {
  const Logo = ({ logo }: { logo: string }) => {
    return (
      <div className="relative w-8 h-8 bg-gray-500 rounded-md overflow-hidden">
        {logo && (
          <img
            src={logo}
            alt="Company logo"
            className="object-cover w-full h-full"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              // Hide the image on error, showing the gray background
              e.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>
    );
  };

  return (
    <section className="w-screen min-h-screen py-16 bg-black text-white">
      <div className="max-w-2xl mx-auto px-4">
        {/* Work Experience Section */}
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-8 text-center">
          work
        </h1>

        <div className="mb-16">
          {workExperience.map((job, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex items-center py-3 border-b border-dashed border-gray-700">
                <div className="mr-4">
                  <Logo logo={job.logo} />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-mono text-base mr-4">
                        {job.company}
                      </span>
                      <span className="font-light text-sm text-gray-400">
                        {job.role}
                      </span>
                    </div>
                    <span className="font-mono text-sm text-gray-400">
                      {job.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-8 text-center">
          projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 p-5 hover:border-white transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-mono text-base group-hover:underline">
                  {project.title}
                </h3>
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="font-light text-sm text-gray-300">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkAndProjects;
