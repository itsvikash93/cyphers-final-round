import React from "react";
import Home from "./components/Home";
import Navbar from "./components/home/Navbar";
import RightNav from "./components/home/RightNav";
import TopProgress from "./components/home/TopProgress";
import Page4 from "./components/Page4";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Loader from "./components/Loader";

import Footer from "./components/Footer";
import ClickCursor from "./components/ClickCursor";

const App = () => {
  return (
    <div className="w-full bg-[#111010] text-white select-none">
      <Loader />
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
  );
};

export default App;
