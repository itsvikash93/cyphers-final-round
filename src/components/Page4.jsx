import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const [Window, setWindow] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const works = [
    {
      sno: "01", 
      name:"REBELLION",
      text:"I'm a UI/UX designer and full-stack developer passionate about blending creativity with technology. I design intuitive interfaces and build robust web applications that prioritize user experience.",
      vid: "/assets/Rebellion01.mp4"
    },
    {
      sno: "02",
      name:"CREEEDS", 
      text:"I'm a UI/UX designer and full-stack developer passionate about blending creativity with technology. I design intuitive interfaces and build robust web applications that prioritize user experience.",
      vid: "/assets/miranda.mp4"
    },
    {
      sno: "03",
      name:"MARSHALL",
      text:"I'm a UI/UX designer and full-stack developer passionate about blending creativity with technology. I design intuitive interfaces and build robust web applications that prioritize user experience.", 
      vid: "/assets/modern muses.mp4"
    },
    {
      sno: "04",
      name:"ISRO 07",
      text:"I'm a UI/UX designer and full-stack developer passionate about blending creativity with technology. I design intuitive interfaces and build robust web applications that prioritize user experience.",
  vid: "/assets/Work03.mp4"
    },

  ];

  useEffect(() => {
    // Adjust y value based on screen width
    let yValue;
    if (Window> 1440) {
      yValue = 420; // Desktop
    } else if (Window>1305) {
      yValue = 270; // 15-inch laptop
    } else {
      yValue = 220; // Smaller laptops
    }

    gsap.utils.toArray(".work-item").forEach((item, i) => {
      gsap.set(item, { zIndex: works.length - i });

      gsap.to(item, {
        y: yValue * i, // Use dynamic y value
        rotate: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 50%",
          end: "bottom 20%",
          scrub: 0.3,
          ease: "easeOut",
        },
      });
    });

    ScrollTrigger.refresh();
  }, [Window]);

  return (
    <div className="w-full lg:h-[200vh] relative  font-[Aux-mono] min-h-screen bg-[#1C1C1C] text-white py-20 p-10 overflow-hidden">
    {/* ✅ `overflow-hidden` to remove horizontal scrollbar */}
    <h1 className=" text-center uppercase text-[#9D2117] text-6xl">our <span className='text-white'>unparalleled</span> legacy</h1>
    <div className="w-full mt-20 rounded-2xl duration-300 flex flex-col gap-5">
      {works.map((work, idx) => (
        <div
          key={idx}
          className="work-item w-full rotate-[-5deg]  border-b-[1.5px] 2xl:mt-5 px-5 pb-4 border-[#9D2117] rounded-xl h-[20%] flex bg-[#1C1C1C] absolute left-0"
          style={{
            transformOrigin: "center", // ✅ Rotation fix
          }}
        >
          <div className="w-[5%] text-end text-3xl  h-full">{work.sno}</div>
          <div className="w-[25%] p-5 text-5xl h-full">{work.name}</div>
          <div className="w-[40%] p-5 text-lg text-[#9D2117] h-full">{work.text}</div>
          <div className="w-[30%] text-6xl bg-zinc-300 h-full">
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
                <source src={work.vid} type="video/mp4" />
              </video>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Page4;
