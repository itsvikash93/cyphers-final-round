import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import ImgEffectContainer from "../effects/ImgEffectContainer";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);
  const text = "CYPHERS";
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const centerImg = useRef(null);
  const shadowRef = useRef(null);
  const parent = useRef(null);

  useGSAP(
    () => {
      const middle = Math.floor(text.length / 2);

      // For initial animation (center to out)
      const orderedLettersIn = lettersRef.current
        .map((letter, i) => ({
          element: letter,
          distance: Math.abs(i - middle),
        }))
        .sort((a, b) => a.distance - b.distance);

      // For exit animation (out to center)
      const orderedLettersOut = lettersRef.current
        .map((letter, i) => ({
          element: letter,
          distance: Math.abs(i - middle),
        }))
        .sort((a, b) => b.distance - a.distance);

      // Initial animation
      const entryAnim = gsap.timeline();
      entryAnim.fromTo(
        orderedLettersIn.map((l) => l.element),
        {
          y: -1000,
        },
        {
          y: 0,
          stagger: {
            each: 0.05,
            ease: "linear",
          },
        }
      );

      // Exit animation on scroll with improved reversing
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 0%",
        end: "bottom 100%",
        scrub: 1,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;

          // Custom group-wise stagger order
          const customOrder = [
            [0, 6], // O, Y
            [1, 5], // V, A
            [2, 4], // E, L
            [3],    // R
          ];

          customOrder.forEach((group, groupIndex) => {
            group.forEach((i) => {
              const element = lettersRef.current[i];
              gsap.to(element, {
                y: -progress * 2000,
                duration: 0.2,
                ease: "easeIn",
                delay: groupIndex * 0.05,
              });
            });
          });
        },
      });


    },

  );

  useEffect(() => {
    const moveElements = (e) => {
      const rect = parent.current.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      // Calculate mouse position as percentage (-0.5 to 0.5)
      const xPercent = (relX / rect.width - 0.5) * 2;
      const yPercent = (relY / rect.height - 0.5) * 2;

      gsap.to(centerImg.current, {
        x: xPercent * 50,
        y: yPercent * 0,
        duration: 0.8,
        ease: "power1.out",
      });

      gsap.to(shadowRef.current, {
        x: xPercent * 50,
        y: yPercent * 0,
        duration: 0.8,
        ease: "power1.out",
      });

      gsap.to(h1Ref.current, {
        x: xPercent * 20,
        y: yPercent * 17,
        duration: 1,
        ease: "power1.out",
      });
      gsap.to(h3Ref.current, {
        x: xPercent * 20,
        y: yPercent * 17,
        duration: 1,
        ease: "power1.out",
      });
    };

    const parentEl = parent.current;
    parentEl.addEventListener("mousemove", moveElements);

    return () => {
      parentEl.removeEventListener("mousemove", moveElements);
    };
  }, []);
  return (
    <div ref={parent} className="h-screen w-full">
      {/* Center Elems */}
      <div className="relative h-full w-full flex flex-col items-center justify-center ">
        <div ref={h1Ref} className="relative w-fit h-fit">
          <h1 className="text-[14vw] leading-[13vw] uppercase text-[#9D2117] font-[Minecraft] tracking-[1.5vw]">
           {text.split("").map((letter, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="inline-block "
            >
              {letter}
            </span>
          ))}
          </h1>
          <motion.img
            src="./imgs/home/star.png"
            alt=""
            className="absolute right-5 top-0 -translate-y-1/2 translate-x-1/2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            style={{ originX: 0.5, originY: 0.5 }}
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[100%] overflow-y-hidden flex items-end justify-center">
          <div ref={centerImg} className="h-[90%] w-full">
            <ImgEffectContainer img={"./imgs/home/model.png"} />
          </div>
          <img
            ref={shadowRef}
            src="./imgs/home/shadow.png"
            alt=""
            className="absolute bottom-0 top-1/2 -translate-y-1/2 w-[100vw] h-[130vh] z-[-2]"
          />
        </div>

        <h3
          ref={h3Ref}
          className="absolute text-xl font-[Aux-mono] text-center uppercase w-full top-1/2 left-1/2 -translate-x-1/2 mt-15 pointer-events-none"
        >
          Creative Web. Motion Magic. Pixel Precision.
        </h3>
      </div>

      {/* Bottom left */}
      <div className="absolute left-0 bottom-0 p-6 font-[Minecraft]">
        <h1 className="uppercase text-[1vw] hover:text-[#9D2117] my-1 tracking-wider">
          LINKEDIN
        </h1>
        <h1 className="uppercase text-[1vw] hover:text-[#9D2117] my-1 tracking-wider">
          INSTAGRAM
        </h1>
        <h1 className="uppercase text-[1vw] hover:text-[#9D2117] my-1 tracking-wider">
          TWITTER
        </h1>
      </div>
    </div>
  );
};

export default Home;
