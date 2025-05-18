import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Scene from "../../effects/Scene";
import { content } from "../../effects/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef();

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = () => {
    setIsOpen(() => !isOpen);
  };
  return (
    <div className="w-full fixed z-[999] ">
      <div
        ref={logoRef}
        onClick={handleMenuClick}
        className="absolute top-5 left-5 z-[992]"
      >
        {isOpen ? (
          <i
            className="ri-close-line text-4xl text-[#9D2117] transition-all duration-300 scale-100 opacity-100"
            key="close"
          />
        ) : (
          <i
            className="ri-menu-2-line text-3xl text-[#9D2117] transition-all duration-300 scale-100 opacity-100"
            key="menu"
          />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="nav-details absolute z-[99] w-full h-screen top-0 backdrop-blur-lg bg-black/10 flex overflow-hidden"
          >
            <Scene activeMenu={activeMenu} />

            <div className="left relative h-full w-full text-7xl font-bold uppercase flex flex-col gap-2 items-center justify-center text-white font-[Minecraft] tracking-wider pointer-events-auto">
              <div
                onMouseLeave={() => setActiveMenu(null)}
                className="w-[80%] relative"
              >
                {content.map((elem, i) => (
                  <h1
                    key={i}
                    onMouseEnter={() => {
                      setActiveMenu(i);
                    }}
                    className="hover:text-[#9D2117] cursor-pointer pt-10 pb-3 border-b-2 border-[#9D2117] relative z-[100] transition-all duration-300"
                  >
                    {elem.title}
                  </h1>
                ))}

                <div className="absolute h-10 -bottom-15 right-0 font-normal text-base normal-case ">
                  <div className="flex justify-center items-center gap-6">
                    <a href="#">
                      <i className="ri-linkedin-box-fill text-2xl"></i>
                    </a>
                    <a href="#">
                      <i className="ri-instagram-fill text-2xl"></i>
                    </a>
                    <a href="#">
                      <i className="ri-twitter-x-fill text-2xl"></i>
                    </a>
                  </div>
                  <h3 className="text-end text-xs mt-2 font-light font-[Minecraft] tracking-wider">
                    OUR SOCIAL MEDIA <br />
                    SITES
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
