import React from "react";
import Home from "./components/Home";
import SideNav from "./components/home/SideNav";
import RightNav from "./components/home/RightNav";
import RightProgress from "./components/home/RightProgress";
import Page4 from "./components/Page4";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page5 from "./components/Page5";
import Footer from "./components/Footer";
import ClickCursor from "./components/ClickCursor";

const App = () => {
  return (
    <div className="w-full bg-[#111010] text-white select-none">
      <SideNav />
      <RightProgress />
      <RightNav />

      {/* Center Elems */}
      <ClickCursor />
      <Home />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </div>
  );
};

export default App;
