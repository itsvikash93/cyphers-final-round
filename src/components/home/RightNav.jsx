import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const RightNav = () => {
  const [isMusicActive, setIsMusicActive] = useState(false);
  const barsRef = useRef([]);
  const audioRef = useRef(null);

   const playSound = () => {
    const audio = new Audio("imgs/page3/hover-effect-dich.mp3");
    audio.play();
    audio.volume = 1;
  };

  useEffect(() => {
    barsRef.current.forEach((bar, index) => {
      if (isMusicActive) {
        gsap.to(bar, {
          scaleY: () => 0.2 + Math.random() * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 0.3 + Math.random() * 0.7,
          delay: index * 0.1,
          transformOrigin: "bottom center",
        });
      } else {
        gsap.killTweensOf(bar);
        gsap.to(bar, {
          scaleY: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      }
    });
  }, [isMusicActive]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicActive) {
      audio.pause();
    } else {
      audio.volume = 0.5;
      audio.play().catch((err) => console.error("Audio error:", err));
    }
    setIsMusicActive(!isMusicActive);
  };

  return (
    <div className="right-nav fixed z-[99] bottom-0 right-0 h-fit w-fit flex items-center pb-6 pr-6 gap-6">
      <audio ref={audioRef} src="/Page-1/Music.ogg" loop preload="auto" />

      <div
        onClick={() => {
      
            playSound();
         
    
          toggleAudio()
        }
        }
        className="flex items-center h-10   px-2 scale-[130%] font-[Minecraft] cursor-pointer rounded-md gap-1 text-[#9D2117] hover:opacity-80 transition-opacity"
      >
        { isMusicActive ? <h1 className="text-xs  w-6 mr-1">OFF</h1> : <h1 className="text-xs  w-6 mr-1">ON</h1> }
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (barsRef.current[i] = el)}
            className="w-[2px] bg-[#9D2117] transition-all"
            style={{ height: "50%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default RightNav;
