import { useMotionValue } from "framer-motion";
import React, { useEffect } from "react";

export default function useMouse() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX); // Remove the = sign
    mouse.y.set(clientY); // Remove the = sign
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return mouse;
}
