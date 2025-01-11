import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";

const Story = () => {
  const frameRef = new useRef("null");

  const hanldeMouseLeave = (event) => {
    const elements = frameRef.current;

    gsap.to(elements, {
      duration: 0.3,
      rotateY: 0,
      rotateX: 0,
      ease: "power1.inOut",
    });
  };

  const hanldeMouseMove = (event) => {
    const { clientX, clientY } = event;
    const elements = frameRef.current;
    if (!elements) return;

    const rect = elements.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(elements, {
      duration: 0.3,
      rotateY: rotateY,
      rotateX: rotateX,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <div id="sorry" className=" min-h-dvh w-screen bg-black text-blue-50">
      <div className=" flex size-full flex-col items-center py-10 pb-24">
        <p className=" font-general text-sm uppercase md:text-[10px]">
          ip world
        </p>
        <div className=" relative size-full ">
          <AnimatedTitle
            title=" The st <b>ory of <br/> a hidden real <b> m </b> "
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 "
          />
          <div className=" story-img-container">
            <div className="story-img-mask">
              <div className=" story-img-content">
                <img
                  src="img/entrance.webp"
                  alt="story"
                  className="w-full h-full object-contain"
                  ref={frameRef}
                  onMouseUp={hanldeMouseLeave}
                  onMouseLeave={hanldeMouseLeave}
                  onMouseEnter={hanldeMouseLeave}
                  onMouseMove={hanldeMouseMove}
                />
              </div>
            </div>
            <RoundedCorners/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
