import React, { useEffect, useRef } from "react";
import useMouse from "./useMouse";
import { useFrame, useThree } from "@react-three/fiber";
import { fragment, vertex } from "./shader";
import { content } from "./data";
import { useAspect, useTexture } from "@react-three/drei";
import { animate } from "framer-motion";

const Model = ({ activeMenu }) => {
  const { viewport } = useThree();
  const mouse = useMouse();
  const meshRef = useRef();

  // Load all textures
  const textures = useTexture(content.map((elem) => elem.src));

  // Get dimensions from first texture or defaults
  const { width, height } = textures[0]?.image || { width: 1, height: 1 };
  const scale = useAspect(width *1.1, height * 0.8, 0.165);

  // Initialize uniforms
  const uniforms = useRef({
    uTexture: { value: textures[0] },
    uDelta: { value: { x: 0, y: 0 } },
    uTime: { value: 0 },
    uAlpha: { value: 0 },
  });

  useEffect(() => {
    if (!meshRef.current) return;

    if (activeMenu !== null && textures[activeMenu]) {
      meshRef.current.material.uniforms.uTexture.value = textures[activeMenu];
      animate(
        meshRef.current.material.uniforms.uAlpha,
        { value: 1 },
        {
          duration: 0.3,
          ease: "easeOut",
        }
      );
    } else {
      animate(
        meshRef.current.material.uniforms.uAlpha,
        { value: 0 },
        {
          duration: 0.3,
          ease: "easeOut",
        }
      );
    }
  }, [activeMenu, textures]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const x =
      (mouse.x.get() / window.innerWidth) * viewport.width - viewport.width / 2;
    const y =
      -(mouse.y.get() / window.innerHeight) * viewport.height +
      viewport.height / 2;

    // Smooth movement
    meshRef.current.position.x += (x - meshRef.current.position.x) * 0.1;
    meshRef.current.position.y += (y - meshRef.current.position.y) * 0.1;

    // Update delta for shader effect
    meshRef.current.material.uniforms.uDelta.value = {
      x: (x - meshRef.current.position.x) * 0.4,
      y: (y - meshRef.current.position.y) * 0.4,
    };

    // Update time
    meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh scale={scale} ref={meshRef}>
      <planeGeometry args={[1, 1.5, 15, 15]} /> {/* Adjusted aspect ratio */}
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        transparent={true}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

export default Model;
