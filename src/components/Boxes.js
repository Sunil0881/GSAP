import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MovingCircle = () => {
  const circle = useRef();
  const circle1 = useRef();
  const circle2 = useRef();
  const circle3 = useRef();
  

  useGSAP(() => {
    gsap.to(circle.current, { x: 700, duration:2 });
    gsap.fromTo(circle1.current,{ x: 1400, duration:2 }, { x: 700, duration:2  });
    gsap.to(circle2.current, { x: 700, duration:2 });
    gsap.fromTo(circle3.current,{ x: 1400, duration:2 }, { x: 700, duration:2  });
    
    
    

   
  });

  return (
    <div >
        <div>
            <svg width="1000" height="100">
            <g ref={circle}>
            <circle  cx="50" cy="50" r="30" fill="blue"></circle>
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12">Hello</text>
            </g>
            </svg>
        </div>
        <div>
            <svg width="10000" height="100">
            <g ref={circle1}>
            <circle  cx="50" cy="50" r="30" fill="red"></circle>
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12">Hello</text>
            </g>
            </svg>
        </div>
        <div>
            <svg width="1000" height="100">
            <g ref={circle2}>
            <circle  cx="50" cy="50" r="30" fill="blue"></circle>
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12">Hello</text>
            </g>
            </svg>
        </div>
        <div>
            <svg width="10000" height="100">
            <g ref={circle3}>
            <circle  cx="50" cy="50" r="30" fill="red"></circle>
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12">Hello</text>
            </g>
            </svg>
        </div>
       
    </div>
  );
};

export default MovingCircle;


