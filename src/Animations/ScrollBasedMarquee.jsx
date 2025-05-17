import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollBasedMarquee = ({
  speed = 1,
  className = "",
  reverse = false, // New prop to control direction
}) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const lastScrollPos = useRef(window.scrollY);
  const directionRef = useRef(1); // 1 = down, -1 = up

  useEffect(() => {
    if (!marqueeRef.current) return;

    // Initial setup
    gsap.set(marqueeRef.current, { xPercent: -50 });

    const createAnimation = (dir = 1) => {
      animationRef.current?.kill();
      
      // Apply reverse modifier if needed
      const effectiveDir = reverse ? -dir : dir;
      const xChange = effectiveDir > 0 ? "-=100" : "+=100";
      
      animationRef.current = gsap.to(marqueeRef.current, {
        xPercent: xChange,
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    };

    createAnimation(directionRef.current);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDiff = currentScroll - lastScrollPos.current;

      // Only change direction if there's significant movement
      if (Math.abs(scrollDiff) > 5) {
        if (scrollDiff < 0 && directionRef.current !== -1) {
          // Scrolling up
          directionRef.current = -1;
          createAnimation(-1);
        } else if (scrollDiff > 0 && directionRef.current !== 1) {
          // Scrolling down
          directionRef.current = 1;
          createAnimation(1);
        }
      }

      lastScrollPos.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      animationRef.current?.kill();
    };
  }, [speed, reverse]); // Added reverse to dependencies

  return (
    <div className={`overflow-hidden w-full whitespace-nowrap ${className}`}>
      <div className="flex gap-8 w-fit" ref={marqueeRef}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((block) => (
          <div className="flex gap-8" key={block}>
            {[...Array(3)].map((_, i) => (
              <h1
                key={`${block}-${i}`}
                className="text-xl lg:text-5xl font-[Aux-Mono]"
              >
                <span className="font-[Aux-Mono]">TRENDING</span> . {" "}
                <span className="font-[Aux-Mono]">CONFIDENTIAL</span> . {" "}
                <span className="font-[Aux-Mono]">CREATIVITY</span> .
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBasedMarquee;