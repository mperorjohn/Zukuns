import React from "react";
import { motion } from "framer-motion";

function AnimatedContent() {
  return (
    <motion.div
      className="content-container"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 20 }}
    ></motion.div>
  );
}

export default AnimatedContent;
