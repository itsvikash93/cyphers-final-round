import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll(".split-char");
    const container = document.querySelector("[data-horizontal-scroll]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        scroller: container,
        horizontal: true,
        toggleActions: "play none none none",
        start: "left 70%",
        end: "+=500",
        // markers:true
      // for debugging, remove in prod
      },
    });

    tl.fromTo(
      chars,
      {
        y: (i) => (i % 2 === 0 ? 100 : 100),
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.2,
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={textRef}
      className="flex justify-center md:gap-0 lg:gap-[3px] items-center whitespace-nowrap"
    >
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="split-char inline-block lg:text-5xl font-semibold text-white"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
