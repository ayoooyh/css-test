"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import React from "react";

const textVariants = {
  hidden: { y: "100%" },
  visible: { y: "0%" },
};

const Motion: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textY = useMotionValue("100%");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.7) {
      textY.set("0%");
    } else {
      textY.set("100%");
    }
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(0%)", "circle(100%)"]
  );

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <motion.div
        className="bg-orange-400 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-full"
        style={{ clipPath }}
      >
        <motion.h1 className="text-blue-700 font-bold text-3xl p-8 fixed ">
          <span className="block overflow-hidden">
            <motion.span
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              Aha!
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              You found me!
            </motion.span>
          </span>
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Motion;
