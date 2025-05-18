import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import "./Loader.css"; // Import the CSS file for styling


const Loader = () => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null); // Reference to the loader container

  useEffect(() => {
    const duration = 5; // Duration in seconds
    const interval = 50; // Update interval in milliseconds
    const increment = 50 / (duration * (500 / interval));

    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Fade out the loader when progress reaches 100%
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1, // Duration of the fade-out animation
        ease: "power2.inOut",
        onComplete: () => {
          // Hide the loader after fade-out
          loaderRef.current.style.display = "none";
        },
        // onComplete: () => {
        //     // Add additional fade-out animation
        //     gsap.to(loaderRef.current, {
        //         scale: 0.5, // Shrink the loader slightly
        //         duration: 1, // Duration of the additional animation
        //         ease: "power2.inOut",

        //     });
        // },
      });
    }
  }, [progress]);

  return (
    <div
      ref={loaderRef} // Attach the ref to the loader container
      className="loader-container flex justify-center items-center h-screen w-screen absolute top-0 left-0 "
    >
      <div className="h-[20vw] w-[60vw] flex justify-center items-center">
        {/* loga Overlay */}
        <div className="logo-overlay ">
          <div className="h-[15vh] w-[20vw] flex items-center justify-center">
            
            <img className="h-[15vh]" src="./imgs/Loader/Group 40.svg" alt="" />
          </div>

          <div className="flex justify-between items-center w-[20vw] mt-[1vw]">
            <h1 className="text-[0.8vw] font-[Minecraft] text-white">
              Loading...
            </h1>
            <p className="text-[0.8vw] font-[Minecraft] text-white">
              {Math.round(progress)}%
            </p>
          </div>

          {/* Loading Line */}
          <div className="loading-line">
            <div
              className="loading-progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
