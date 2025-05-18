import React from "react";
import Home from "./components/Home";
import Navbar from "./components/home/Navbar";
import RightNav from "./components/home/RightNav";
import TopProgress from "./components/home/TopProgress";
import Page4 from "./components/Page4";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import ReactLenis, { useLenis } from "lenis/react";

import Footer from "./components/Footer";
import ClickCursor from "./components/ClickCursor";

const App = () => {
  const lenis = useLenis();

  return (
    <ReactLenis root>
      <div className="w-full bg-[#111010] text-white select-none">
        <Navbar />
        <TopProgress />
        <RightNav />

        {/* Center Elems */}
        <ClickCursor />
        <Home />
        <Page2 />
        <Page3 />
        <Page4 />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
