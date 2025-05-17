import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ImgEffect from "./ImgEffect";

const ImgEffectContainer = ({ img }) => {
  return (
    <div className="relative h-full w-full">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
        <ImgEffect img={img} />
      </Canvas>
    </div>
  );
};

export default ImgEffectContainer;
