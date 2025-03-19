import React from "react";

function About() {
  return (
    <section className="w-screen flex items-center justify-center bg-black text-white relative pt-8">
      {/* Main Content - centered */}
      <div className="max-w-2xl text-center px-4">
        {/* Using Gunma Regular font for heading */}
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-4">
          about me
        </h1>

        {/* Simple paragraph with a light font for an airy feel */}
        <p className="font-sans font-light text-sm sm:text-base leading-relaxed">
          i fell in love with computers at age 10. spent the last few years
          working in crypto, now exploring ai. i like making software and
          connecting people. in my free time, i'm a student at the usc iovine &
          young academy.
        </p>
      </div>
    </section>
  );
}

export default About;
