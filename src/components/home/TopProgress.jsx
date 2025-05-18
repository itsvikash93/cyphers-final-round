import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TopProgress = () => {
  const scrollYProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 100,
    mass: 0.5,
    restDelta: 0.001
  });
  
  // Transform to percentage (0-100)
  const width = useTransform(smoothProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollTop / (scrollHeight - clientHeight);
      scrollYProgress.set(progress);
    };

    // Add passive scroll listener for better performance
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, [scrollYProgress]);

  return (
    <motion.div 
      className="fixed z-[9999] top-0 left-0 w-full h-[0.4vh] bg-[#595959]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="h-full bg-[#EB3223] origin-left"
        style={{ 
          scaleX: smoothProgress,
          width: "100%"
        }}
      />
    </motion.div>
  );
};

export default TopProgress;