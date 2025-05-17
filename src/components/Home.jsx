import React from "react";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="h-screen w-full">
      {/* Center Elems */}
      <div className="relative h-full w-full flex flex-col items-center justify-center ">
        <div className="relative w-fit h-fit">
          <h1 className="text-[16vw] leading-none uppercase text-[#9D2117] font-[Minecraft] tracking-wider">
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[38%] h-[100%] overflow-y-hidden flex items-center justify-center">
          <img
            src="./imgs/home/model.png"
            alt=""
            className="absolute bottom-0 left-0 object-cover w-full h-auto z-[3]"
          />
          <img
            src="./imgs/home/shadow.png"
            alt=""
            className="absolute bottom-0 top-1/2 -translate-y-1/2 w-[70vw] h-[100vh] z-[2]"
          />
        </div>

        <h3 className="absolute text-4xl font-[Aux-mono] text-center uppercase w-full top-1/2 left-1/2 -translate-x-1/2 mt-20">
          Creative Web. Motion Magic. Pixel Precision.
        </h3>
      </div>

      {/* Bottom left */}
      <div className="absolute left-0 bottom-0 p-6 font-[Minecraft]">
        <h1 className="uppercase text-sm hover:text-[#9D2117] my-1 tracking-wider">
          LINKEDIN
        </h1>
        <h1 className="uppercase text-sm hover:text-[#9D2117] my-1 tracking-wider">
          INSTAGRAM
        </h1>
        <h1 className="uppercase text-sm hover:text-[#9D2117] my-1 tracking-wider">
          TWITTER
        </h1>
      </div>
    </div>
  );
};

export default Home;
