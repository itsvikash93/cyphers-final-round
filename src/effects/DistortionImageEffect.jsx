import React, { useEffect, useState } from "react";
import ImgDistortion from "./ImgDistortion";
import { Canvas } from "@react-three/fiber";

const DistortionImageEffect = ({ img1, img2, disp }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-full w-full">
      {isDesktop ? (
        <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
          <ImgDistortion img1={img1} img2={img2} disp={disp} />
        </Canvas>
      ) : (
        <img src={img1} alt="img" className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default DistortionImageEffect;
