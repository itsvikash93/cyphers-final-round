import React from "react";
import Home from "./components/Home";

import Page4 from "./components/Page4";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page5 from "./components/Page5";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full bg-[#1C1C1C]  text-white">
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
