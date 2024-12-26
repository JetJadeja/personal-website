import React, { useEffect, useState } from "react";
import Socials from "./Socials";

function Hero() {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade out the text when user scrolls
  const scrollDownOpacity = scrollTop < 50 ? 1 : 0;

  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      {/* Brutalist Main Title */}
      {/* Using big text sizes with tailwind responsive classes */}
      <h1 className="font-bold mb-4 text-center text-5xl sm:text-6xl md:text-8xl lg:text-9xl hero-glitch-target transition-all duration-300">
        JET JADEJA
      </h1>

      {/* Subtitle or Tagline: flicker animation using tailwind + custom glow */}
      <p
        className="text-lg sm:text-xl md:text-2xl text-center mb-8 
                   animate-pulse 
                   transition-all 
                   duration-500 
                   neon-glow 
                   "
        style={{ textShadow: "0 0 8px #ff00ff" }}
      >
        working on what excites me
      </p>

      {/* Social Links */}
      <div className="mb-12">
        <Socials />
      </div>

      {/* Scroll Down Indicator - fades out when scrolled */}
      <div
        className="absolute bottom-8 flex flex-col items-center transition-opacity duration-500"
        style={{ opacity: scrollDownOpacity }}
      >
        <span className="text-sm uppercase mb-1">Scroll Down</span>
        <div className="animate-bounce">
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14m0 0l-6-6m6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
