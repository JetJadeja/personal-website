import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 py-16 border-t-4 border-white">
      <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-12 uppercase glitch-target">
        About
      </h2>
      <div className="max-w-3xl text-center space-y-6 text-lg leading-relaxed">
        <p>
          I’m a dedicated creator of modern tech, pushing boundaries in web3, DeFi, 
          and beyond. I explore new frontiers, experiment boldly, and build solutions 
          that question the norm.
        </p>
        <p>
          Whether I’m refining protocols or mentoring fellow devs, my mission is to 
          ignite fresh ideas and prove that the improbable can be achieved. 
        </p>
        {/* Updated line to be bold but less cringe */}
        <p className="font-bold tracking-wide uppercase mt-8 glitch-target">
          I am not just a developer.<br />
          I tear down barriers and shape the future.
        </p>
      </div>
    </section>
  );
}

export default About;