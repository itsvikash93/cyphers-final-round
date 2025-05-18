import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="font-[Minecraft] relative min-h-[100vh] w-full">
      {/* Background Image - Hidden on mobile */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover md:block hidden"
        src="/imgs/Footer/Dot Grid.png"
        alt=""
      />

      <div className="border-b-[1px] relative flex items-end border-zinc-600 h-[90vh] w-full">
        {/* Main Content */}
        <img
          className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[80%] md:w-[30%]"
          src="/imgs/Footer/image.png"
          alt=""
        />
        <img
          className="absolute bottom-10 left-1/2 translate-x-[-50%] w-[90%] md:w-[55%]"
          src="/imgs/Footer/Ellipse 91.png"
          alt=""
        />
        
        {/* Rotating Star - Hidden on mobile */}
        <motion.img
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{ originX: 0.5, originY: 0.5 }}
          className="absolute right-68 scale-[140%] top-36 md:block hidden"
          src="/imgs/home/star.png"
          alt=""
        />
        
        {/* Group Image - Hidden on mobile */}
        <img
          className="top-[20%] left-[15%] absolute md:block hidden"
          src="/imgs/Footer/Group 43.png"
          alt=""
        />

        {/* Tagline - Adjusted for mobile */}
        <h1 className="uppercase text-lg md:text-3xl px-4 md:px-15 font-[Aux-mono] absolute w-full bottom-5 left-0 text-center">
          Creative Web. Motion Magic. Pixel Precision.
        </h1>

        {/* Navigation Links - Stacked on mobile */}
        <div className="absolute bottom-0 right-0 text-lg md:text-3xl flex py-5 px-4 md:px-10 flex-col h-auto md:h-[40%] w-full md:w-[20%] items-center md:items-end">
          <h1 className="hover:text-[#9D2117] cursor-pointer duration-300 mb-2 md:mb-0">
            About
          </h1>
          <h1 className="hover:text-[#9D2117] cursor-pointer duration-300 mb-2 md:mb-0">
            Contact
          </h1>
          <h1 className="hover:text-[#9D2117] cursor-pointer duration-300">
            Services
          </h1>
        </div>

        {/* Main Heading - Adjusted size for mobile */}
        <h1 className="uppercase px-4 md:px-15 text-[#9D2117] w-full text-[10vw] md:text-[15vw]">
          Cyphers
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-[10vh] flex items-center justify-center">
        <div className="w-[25%] border-r-[1px] border-zinc-600 h-full"></div>
        <div className="w-[50%] flex items-center uppercase justify-center font-[Aux-mono] h-full text-sm md:text-base">
          created by Cyphers
        </div>
        <div className="w-[25%] border-l-[1px] border-zinc-600 h-full"></div>
      </div>
    </div>
  );
};

export default Footer;