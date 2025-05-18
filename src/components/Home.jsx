import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import ImgEffectContainer from "../effects/ImgEffectContainer";
import gsap from "gsap";

const Home = () => {
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);
  const centerImg = useRef(null);
  const shadowRef = useRef(null);
  const parent = useRef(null);

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
            Cyphers
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

      <div className="absolute right-0 top-0 p-6">
        <button className="relative px-8 py-3 border-none text-[#9D2117] font-[Minecraft] uppercase cursor-pointer [clip-path:polygon(0%_0%,95%_0%,100%_20%,100%_100%,5%_100%,0%_80%)] text-base group">
          Explore
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,0 95,0 100,20 100,100 5,100 0,80"
              fill="none"
              stroke="#9D2117"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
