import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlurText = ({
  text = "",
  delay = 0.2,
  className = "",
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (!ref.current) return;

    const container = document.querySelector("[data-horizontal-scroll]");
    const targets = ref.current.children;

    gsap.set(targets, { opacity: 0 });

    const animation = {
      from: {
        opacity: 0,
        y: direction === "top" ? -50 : 50,
        filter: "blur(20px)"
      },
      to: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "power3.out",
        duration: 0.5,
        stagger: { each: delay },
        onComplete: onAnimationComplete
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        scroller: container || undefined,
        horizontal: !!container,
        start: "center 90%",
        end: "+=500",
        toggleActions: "play none none none",
        once: true
      }
    });

    tl.fromTo(targets, animation.from, animation.to);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [text, delay, direction, onAnimationComplete]);

  return (
    <p ref={ref} className={className}>
      {elements.map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
};

export default BlurText;