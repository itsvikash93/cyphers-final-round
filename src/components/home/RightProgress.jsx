import React from "react";

const RightProgress = () => {
  return (
    <div className="right-nav fixed z-[99] right-6 top-0 h-screen  py-6 ">
      <div className="h-full w-full">
        <div className="w-[93vh] absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-[90deg] flex items-center gap-3 justify-center">
          <h3 className="uppercase leading-none text-[#9D2117] font-[Minecraft]">
            Cyphers
          </h3>
          <div className="w-full h-[0.2vh] -mt-[2px] bg-[#595959]">
            <div className="w-[30%] h-full bg-[#EB3223]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightProgress;
