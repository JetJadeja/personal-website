import React, { ReactNode, useEffect, useRef, useState } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const CODE_CHARS = [
  "{",
  "}",
  "[",
  "]",
  "(",
  ")",
  "=",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "+",
  ";",
  ":",
  "<",
  ">",
  "?",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "Δ",
  "Ω",
  "Π",
];

function Layout({ children }: ILayoutProps) {
  const lastSpawnRef = useRef<number>(0);
  const shapeCounterRef = useRef<number>(0);

  // We'll assume hero is 100vh initially. We'll measure if there's an actual #hero element.
  const [heroBottom, setHeroBottom] = useState<number>(
    window.innerHeight - 200
  );

  // Keep track of scroll position for fading out shapes when scrolling past hero.
  const [scrollY, setScrollY] = useState<number>(0);
  const [fadeRatio, setFadeRatio] = useState<number>(0);

  // On mount, measure #hero if it exists.
  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const rect = heroEl.getBoundingClientRect();
      setHeroBottom(rect.height);
    }
  }, []);

  // Listen to scroll events to compute fade ratio (0 = top, 1 = fully scrolled past hero).
  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY || document.documentElement.scrollTop;
      setScrollY(s);
      const rawRatio = s / heroBottom;
      const cRatio = Math.min(Math.max(rawRatio, 0), 1);
      setFadeRatio(cRatio);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroBottom]);

  // Spawn shapes logic (appear more frequently, but only if user is still within hero).
  useEffect(() => {
    const spawnShape = () => {
      shapeCounterRef.current += 1;
      const shapeId = shapeCounterRef.current;

      const shapeEl = document.createElement("div");
      shapeEl.classList.add("floating-shape");
      shapeEl.dataset.shapeId = String(shapeId);

      const size = Math.floor(Math.random() * 40) + 20;
      shapeEl.style.width = `${size}px`;
      shapeEl.style.height = `${size}px`;
      shapeEl.style.position = "fixed";
      shapeEl.style.top = `${Math.random() * 100}vh`;
      shapeEl.style.left = `${Math.random() * 100}vw`;
      shapeEl.style.pointerEvents = "none";

      const shapes = ["50%", "0%", "15%"];
      shapeEl.style.borderRadius =
        shapes[Math.floor(Math.random() * shapes.length)];

      const colors = ["#ff0080", "#00ffff", "#ff00ff", "#ffffff"];
      shapeEl.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // Random lifespan between 3 and 7 seconds
      const lifespan = Math.random() * 4000 + 3000;
      const fadeOutDuration = 1000; // 1 second fade out

      shapeEl.style.opacity = "1";
      shapeEl.style.zIndex = "1";
      shapeEl.style.transition = `opacity ${fadeOutDuration}ms ease-out`;
      shapeEl.style.animation = `shape-spin ${
        Math.random() * 4 + 2
      }s linear forwards`;

      document.body.appendChild(shapeEl);

      // Start fade out animation before removal
      setTimeout(() => {
        shapeEl.style.opacity = "0";
      }, lifespan - fadeOutDuration);

      // Remove after full lifespan
      setTimeout(() => {
        if (shapeEl && shapeEl.parentNode) {
          shapeEl.parentNode.removeChild(shapeEl);
        }
      }, lifespan);
    };

    // spawn shapes every 1.2s, but only if scroll is still within hero
    const shapeInterval = setInterval(() => {
      if (fadeRatio < 1) {
        const count = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < count; i++) {
          spawnShape();
        }
      }
    }, 1000);

    return () => clearInterval(shapeInterval);
  }, [fadeRatio]);

  // Continuously update shape opacities according to fadeRatio
  useEffect(() => {
    const updateShapeOpacities = () => {
      const shapes =
        document.querySelectorAll<HTMLDivElement>(".floating-shape");
      shapes.forEach((shape) => {
        // fade from 1 at ratio=0 to 0 at ratio=1
        const inverted = 1 - fadeRatio;
        shape.style.opacity = inverted.toString();
      });
    };
    updateShapeOpacities();
  }, [fadeRatio]);

  // Mouse trail effect - only inside hero region
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // if fully scrolled past hero => skip
      // if (fadeRatio >= 1) return;

      const now = Date.now();
      if (now - lastSpawnRef.current < 40) return; // spawn more frequently
      lastSpawnRef.current = now;

      const randomIndex = Math.floor(Math.random() * CODE_CHARS.length);
      const randomChar = CODE_CHARS[randomIndex];

      const trailChar = document.createElement("span");
      trailChar.textContent = randomChar;
      trailChar.style.position = "absolute";
      trailChar.style.left = `${e.pageX}px`;
      trailChar.style.top = `${e.pageY}px`;
      trailChar.style.pointerEvents = "none";
      trailChar.style.whiteSpace = "pre";
      trailChar.style.fontSize = "1.5rem";
      trailChar.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      trailChar.style.transform = "translate(-50%, -50%) scale(1.2)";
      trailChar.style.opacity = "1";
      trailChar.style.color = "#ffffff";
      trailChar.style.zIndex = "9999";

      document.body.appendChild(trailChar);
      void trailChar.offsetHeight;

      trailChar.style.transform = "translate(-50%, -50%) scale(0.5)";
      trailChar.style.opacity = "0";

      setTimeout(() => {
        if (trailChar && trailChar.parentNode) {
          trailChar.parentNode.removeChild(trailChar);
        }
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [fadeRatio]);

  // Glitch effect
  useEffect(() => {
    let glitchTimer: number | undefined;

    // Slightly higher randomness so glitch is less frequent overall.
    const runGlitchCycle = () => {
      const glitchableEls = document.querySelectorAll(".glitch-target");
      if (glitchableEls.length > 0) {
        // Single glitch at a time
        const randIndex = Math.floor(Math.random() * glitchableEls.length);
        const target = glitchableEls[randIndex] as HTMLElement;
        target.classList.add("glitch-text");
        setTimeout(() => {
          target.classList.remove("glitch-text");
        }, 500);
      }
      glitchTimer = window.setTimeout(
        runGlitchCycle,
        1800 + Math.random() * 2000
      );
    };
    glitchTimer = window.setTimeout(runGlitchCycle, 2000);

    return () => {
      if (glitchTimer) {
        window.clearTimeout(glitchTimer);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <main>{children}</main>
    </div>
  );
}

export default Layout;
