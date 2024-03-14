import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BoxRotation = () => {
  const box = useRef();
  const box1 = useRef();

  useGSAP(() => {
    gsap.to(box.current, { x: 500 });
    gsap.to(box.current, { y: 100 });
    gsap.to(box.current, {rotation: "+=360", duration:3});

    gsap.to(box1.current, { x: 100 });
    gsap.to(box1.current, { y: 100 });
    gsap.to(box1.current, {rotation: "+=360", duration:3});
  });

  return (
    <div ref={box} style={{ width: "500px", height: "500px", background: "green" }}>
      <div ref={box1} style={{ width: "300px", height: "300px", background: "red" }}>
      
      </div>
    </div>
  );
};

export default BoxRotation;
