import React from "react";

const SideNav = () => {
  return (
    <div className="fixed top-0 left-0 p-6 font-[Minecraft] tracking-wider z-[99]">
      <div className="left-nav">
        <h1 className="uppercase text-sm hover:text-[#9D2117] mb-1">Home</h1>
        <h1 className="uppercase text-sm hover:text-[#9D2117] my-1">
          Services
        </h1>
        <h1 className="uppercase text-sm hover:text-[#9D2117] my-1">
          Our Works
        </h1>
        <h1 className="uppercase text-sm hover:text-[#9D2117] mt-1">
          Contact Us
        </h1>
      </div>

      <div className="absolute left-[50vw] top-0 -translate-x-1/2 pt-6">
        Logo
      </div>
    </div>
  );
};

export default SideNav;
