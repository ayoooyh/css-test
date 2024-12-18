"use client";

import { useRef, useState } from "react";
import { useScroll, animated } from "@react-spring/web";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

const Scroll: React.FC = () => {
  const { scrollX, scrollY, scrollXProgress, scrollYProgress } = useScroll();
  const scrollRef = useRef<HTMLDivElement>(null);

  const props = useSpring({});

  //   const [scrollDirection, setScrollDirection] = useState("down");
  //   useMotionValueEvent(scrollY, "change", (current) => {
  //     const previous = scrollY.getPrevious();
  //     const diff = current - previous;
  //     setScrollDirection(diff > 0 ? "down" : "up");
  //   });

  //   const scaleX = useSpring(scrollYProgress, {
  //     stiffness: 100,
  //     damping: 30,
  //     restDelta: 0.001,
  //   });

  //   const backgroundColor = useTransform(
  //     scrollYProgress,
  //     [0, 0.5, 1],
  //     ["#f00", "#0f0", "#00f"]
  //   );

  return (
    <div className="h-[2000px] w-full flex justify-center items-center">
      <div ref={scrollRef} className="fixed top-0 w-full h-screen ">
        <div ref={scrollRef} style={{ overflow: "scroll" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
          />
        </div>
        <motion.div style={{ scaleX }} />
        <motion.div className="w-full h-2" style={{ backgroundColor }} />

        <div className="flex flex-col items-center space-y-6 mt-8">
          <animated.span>
            {scrollY.to((x) => Math.abs(Math.round(x)))}
          </animated.span>
          <animated.span>
            {scrollYProgress.to((x) => Math.abs(Math.round(x * 100)) / 100)}
          </animated.span>
          <motion.div>스크롤 방향: {scrollDirection}</motion.div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
