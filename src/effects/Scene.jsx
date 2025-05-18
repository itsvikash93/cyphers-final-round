import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

const Scene = ({ activeMenu }) => {
  console.log("Scene received activeMenu:", activeMenu);
  return (
    <div className="fixed top-0 z-99 w-full h-screen">
      <Canvas>
        <Model activeMenu={activeMenu} />
      </Canvas>
    </div>
  );
};

export default Scene;
