"use client";

import { NextPage } from "next";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

const MotionTest: NextPage = () => {
  const xMotionValue = useMotionValue(0);
  useMotionValueEvent(xMotionValue, "change", (latestValue) => {
    console.log("x축", latestValue);
  });

  const yMotionValue = useMotionValue(0);
  useMotionValueEvent(yMotionValue, "change", (latestValue) => {
    console.log("y축", latestValue);
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        style={{ x: xMotionValue, height: yMotionValue }}
        drag="x"
        className="rounded-md bg-blue-400 px-4 py-2"
      >
        {"Hello"}
      </motion.div>
    </div>
  );
};

export default MotionTest;
