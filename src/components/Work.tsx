import React from "react";
import workExperience from "../data/workData.json";

function Work() {
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
    <section className="w-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-gunma text-xl sm:text-2xl md:text-3xl mb-12 text-center">
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
                <div className="flex items-baseline mb-1 font-sans text-base">
                  <span className="group-hover:text-gray-300 transition-colors">
                    {job.company.toLowerCase()}
                  </span>
                  <span className="text-xs mx-2 text-gray-500">·</span>
                  <span className="text-gray-400 text-sm">{job.year}</span>
                </div>

                <p className="font-sans font-light text-sm text-gray-400 italic">
                  {job.role.toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
