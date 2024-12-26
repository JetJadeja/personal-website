import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 py-16 border-t-4 border-white">
      <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-12 uppercase glitch-target">
        About
      </h2>
      <div className="max-w-3xl text-center space-y-6 text-lg leading-relaxed">
        <p>
          I’m a freshman at the USC Iovine and Young Academy, working at the
          intersection of engineering, design, and business. My focus is on
          building projects that challenge the status quo, creating spaces that
          connect and inspire, and exploring the intersection of technology and
          human connection.
        </p>

        {/* <p>
          I started learning to code when I was 10, and I've been building
          projects ever since. Over the last few years, however, I've taken a
          break from work. I've focused more on the human experience. I've
          learned to appreciate art and fashion, and I've enjoyed the moment and
          the journey.
        </p> */}

        {/* Updated line to be bold but less cringe */}
        <p className="font-bold tracking-wide uppercase mt-10 glitch-target">
          WHAT EXISTS IS ONLY PART OF THE STORY.
          <br />
          NOTHING HERE IS FINAL.
        </p>
      </div>
    </section>
  );
}

export default About;
