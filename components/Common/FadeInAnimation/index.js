import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const FadeInAnimation = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return <motion.div initial="hidden"
                     animate={controls}
                     transition={{ ease: "easeInOut", duration: 1 }}
                     variants={{
                       visible: { opacity: 1, scale: 1 },
                       hidden: { opacity: 0, scale: 1 }
                     }}>
    {children}
  </motion.div>;
};

export default FadeInAnimation;