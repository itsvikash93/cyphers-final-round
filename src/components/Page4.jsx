import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      img: "/imgs/page3/316d18edcf090bdfca9a06af4971a6429b971198.png"
    },
    {
      sno: "02",
      name:"CREEEDS", 
      text:"I'm a UI/UX designer and full-stack developer passionate about blending creativity with technology. I design intuitive interfaces and build robust web applications that prioritize user experience.",
      img: "/imgs/page3/58b5735796904018aba50123e79e5878.jpg"
    },
    {
      sno: "03",
      name:"MARSHALL",
      text:"I'm a UI/UX designer and full-stack developer passionate about blending creativity with technology. I design intuitive interfaces and build robust web applications that prioritize user experience.", 
      img: "/imgs/page3/5f0f1c9ba9e92f3c3041fdd080c9bb82.jpg"
    },
    {
      sno: "04",
      name:"ISRO 07",
      text:"I'm a UI/UX designer and full-stack developer passionate about blending creativity with technology. I design intuitive interfaces and build robust web applications that prioritize user experience.",
      img: "/imgs/page3/ea930f46121dc0377cfd790fe9ce611c.jpg"
    },
  ];

  useEffect(() => {
    // Only apply animations on desktop
    if (windowWidth > 768) {
      let yValue;
      if (windowWidth > 1440) {
        yValue = 420; // Desktop
      } else if (windowWidth > 1305) {
        yValue = 270; // 15-inch laptop
      } else {
        yValue = 220; // Smaller laptops
      }

      gsap.utils.toArray(".work-item").forEach((item, i) => {
        gsap.set(item, { zIndex: works.length - i });

        gsap.to(item, {
          y: yValue * i,
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
    }
  }, [windowWidth]);

  return (
    <div className="w-full lg:h-[200vh] relative font-[Aux-mono] min-h-screen text-white py-10 md:py-20 px-5 md:p-10 overflow-hidden">
      <h1 className="text-center uppercase text-[#9D2117] text-3xl md:text-6xl">
        our <span className="text-white">unparalleled</span> legacy
      </h1>
      
      <div className="w-full mt-10 md:mt-20 rounded-2xl duration-300 flex flex-col gap-5 md:gap-10">
        {works.map((work, idx) => (
          <div
            key={idx}
            className={`work-item w-full ${windowWidth > 768 ? 'rotate-[-5deg] absolute' : 'static'} border-b-[1.5px] md:mt-5 px-3 md:px-5 pb-4 border-[#9D2117] rounded-xl h-auto md:h-[20%] flex flex-col md:flex-row bg-[#111010] left-0`}
            style={{
              transformOrigin: "center",
              marginBottom: windowWidth <= 768 ? '1.5rem' : '0'
            }}
          >
            <div className="w-full md:w-[5%] text-start md:text-end text-xl md:text-3xl">
              {work.sno}
            </div>
            <div className="w-full md:w-[25%] p-2 md:p-5 text-2xl md:text-5xl">
              {work.name}
            </div>
            <div className="w-full md:w-[40%] p-2 md:p-5 text-sm md:text-lg text-[#9D2117]">
              {work.text}
            </div>
            <div className="w-full md:w-[30%] p-2 md:p-0 bg-zinc-300 h-40 md:h-auto">
              <img className="w-full h-full object-cover" src={work.img} alt={work.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;