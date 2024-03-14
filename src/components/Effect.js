import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ParallaxTrailingEffect = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const elements = container.querySelectorAll("[data-parallax]");

        elements.forEach(element => {
            const strength = parseFloat(element.dataset.parallax);
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    scrub: true
                }
            });
            
            tl.from(element, {
                y: strength * 10000, // Adjust this multiplier based on the desired effect
                ease: "none"
            });

            tl.to(element, {
                y: strength * -100, // Adjust this multiplier based on the desired effect
                ease: "none"
            });
        });
    }, []);

    return (
        <div ref={containerRef}>
            <div data-parallax="0.2">Element 1</div>
            
            <div data-parallax="0.1">Element 2</div>
            <div data-parallax="0.1">Element 3</div>
            
            
        </div>
    );
};

export default ParallaxTrailingEffect;
