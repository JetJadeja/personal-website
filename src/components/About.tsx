import React from "react";

function About() {
  return (
    <section className="w-screen flex items-center justify-center bg-black text-white relative pt-8 pb-16">
      {/* Main Content - centered */}
      <div className="max-w-2xl text-center px-4">
        {/* Keep a monospace heading for that "techy-chic" vibe */}
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-4">
          about me
        </h1>

        {/* Simple paragraph with a light font for an airy feel */}
        <p className="font-light text-sm sm:text-base leading-relaxed">
          i&apos;m a freshman at the usc iovine &amp; young academy, working at
          the intersection of engineering, design, and business. my focus is on
          building projects that challenge the status quo, creating spaces that
          connect and inspire, and exploring the ever-evolving relationship
          between technology and human connection.
        </p>
      </div>
    </section>
  );
}

export default About;
