import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative h-full w-full flex flex-col items-center justify-center ">
        <h1 className="text-[18vw] leading-none uppercase text-[#9D2117] font-[Minecraft]">
          Cyphers
        </h1>
        <div className="absolute w-[40%] bottom-0 left-1/2 -translate-x-1/2">
          <img
            src="./imgs/home/model.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="absolute text-4xl font-[Aux-mono] text-center uppercase w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Creative Web. Motion Magic. Pixel Precision.
        </h3>
      </div>
    </div>
  );
};

export default Home;
