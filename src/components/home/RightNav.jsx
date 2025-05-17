import React from "react";

const RightNav = () => {
  return (
    <div className="right-nav fixed z-[99] bottom-0 right-0 h-fit w-fit flex items-center pb-5 pr-6 gap-6">
      <button className="px-8 py-3 border-1 border-[#9D2117] text-[#9D2117] font-[Minecraft] uppercase">
        Explore
      </button>
      <div className="w-20 h-10 bg-red-900 mr-3"></div>
    </div>
  );
};

export default RightNav;
