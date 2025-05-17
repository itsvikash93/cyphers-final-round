import React from "react";
import Home from "./components/Home";
import SideNav from "./components/home/SideNav";
import RightNav from "./components/home/RightNav";
import RightProgress from "./components/home/RightProgress";

const App = () => {
  return (
    <div className="w-full bg-[#1C1C1C] text-white select-none">
      {/* Navbar */}
      <SideNav />
      <RightProgress />
      <RightNav />

      {/* Center Elems */}
      <Home />
    </div>
  );
};

export default App;
