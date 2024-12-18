"use client";

import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState, useRef } from "react";

import { NextPage } from "next";

const UseSpring: NextPage = () => {
  // const configDivRef = useRef<HTMLDivElement>(null);
  // const [configOpen, setConfigOpen] = useState<boolean>(false);

  // const props = useSpring({
  //   width: configOpen ? configDivRef.current?.clientWidth : 0,
  // });

  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [props, api] = useSpring(() => ({
    from: { value: 0 },
  }));

  useEffect(() => {
    api.start({
      to: { value: num },
    });
  }, [num, api]);

  return (
    <div className="flex flex-col">
      <p className="flex text-center justify-center items-center top-1/2">
        {"Fuc"}
      </p>

      {/* <div
        ref={configDivRef}
        className="w-[200px] h-[100px] outline outline-2 outline-neutral-700 cursor-pointer relative"
        onClick={() => setConfigOpen((prev) => !prev)}
      > */}
      <animated.div className={"absolute h-full bg-pink-400"} style={props} />
      {/* <animated.div
        className={
          "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        }
      >
        {props.value?.get().toFixed(0)}
      </animated.div> */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          top: "50%",
          marginTop: "20px",
        }}
      >
        {num}
      </div>
      <animated.div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        {props.value?.to((x) => x)}
      </animated.div>
    </div>
  );
};

export default UseSpring;
