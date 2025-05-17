import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const VerticalMarquee = ({ speed = 30, images = [], className = "" }) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current || !images?.length) return;

    // Create DOM elements only once
    const fragment = document.createDocumentFragment();
    const imgHeight = window.innerHeight * 0.3; // Estimate 30vh
    
    // Create 4 copies for smooth looping
    [...images, ...images, ...images, ...images].forEach((src, i) => {
      const div = document.createElement("div");
      div.className = "marquee-item";
      div.style.height = `${imgHeight}px`;
      div.style.overflow = "hidden";
      div.style.position = "relative";
      
      const img = new Image();
      img.src = src;
      img.alt = "";
      img.loading = "lazy";
      img.className = "w-full h-full object-cover";
      // Add a pulse effect overlay
      const overlay = document.createElement("div");
      overlay.className = "absolute inset-0 bg-white opacity-0 pointer-events-none";
      overlay.style.transition = "opacity 0.4s";
      div.appendChild(img);
      div.appendChild(overlay);
      fragment.appendChild(div);
    });

    marqueeRef.current.appendChild(fragment);
    const contentHeight = images.length * imgHeight;

    // Animation with yoyo and repeat
    animationRef.current = gsap.to(marqueeRef.current, {
      y: `-=${contentHeight * 2}`,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: (y) => parseFloat(y) % (contentHeight * 2)
      }
    });

    // Pulse/blur effect for glitch-free coolness
    const pulse = () => {
      const items = marqueeRef.current.querySelectorAll(".marquee-item");
      items.forEach((item, idx) => {
        const overlay = item.querySelector("div");
        gsap.fromTo(
          overlay,
          { opacity: 0 },
          {
            opacity: 0.15 + Math.random() * 0.15,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            delay: Math.random() * 2,
            onComplete: () => {
              overlay.style.opacity = 0;
            }
          }
        );
        gsap.fromTo(
          item,
          { filter: "blur(0px)" },
          {
            filter: `blur(${Math.random() * 2}px)`,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            delay: Math.random() * 2
          }
        );
      });
    };
    pulseRef.current = setInterval(pulse, 2000);

    return () => {
      animationRef.current?.kill();
      if (pulseRef.current) clearInterval(pulseRef.current);
      if (marqueeRef.current) {
        while (marqueeRef.current.firstChild) {
          marqueeRef.current.removeChild(marqueeRef.current.firstChild);
        }
      }
    };
  }, [images, speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        ref={marqueeRef} 
        className="flex flex-col"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default VerticalMarquee;