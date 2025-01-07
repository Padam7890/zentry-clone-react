import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocation, TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [watchTrailer, setWatchTrailer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nexVideoref = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleMiniVDClcik = () => {
    setHasClicked(true);
    setCurrentVideoIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nexVideoref.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          borderWidth: "5px",
          borderColor: "black",
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentVideoIndex, hasClicked], revertOnUpdate: true }
  );
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0% , 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const watchTrailers = () => {
    setWatchTrailer(true);
  };
  return (

    <> 
  
    
    <div className=" relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className=" relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVDClcik}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nexVideoref}
                src={getVideoSrc((currentVideoIndex % totalVideos) + 1)}
                loop
                muted
                id="current-video"
                onLoadedData={handleVideoLoad}
                className="size-64 origin-center  scale-150 object-cover object-center"
              ></video>
            </div>
          </div>
          <video
            loop
            muted
            id="next-video"
            ref={nexVideoref}
            src={getVideoSrc(currentVideoIndex)}
            onLoadedData={handleVideoLoad}
            className=" absolute-center   absolute z-20 size-64 object-cover object-center"
          ></video>
          <video
            src={getVideoSrc(currentIndex)}
            autoPlay
            muted
            loop
            onLoadedData={handleVideoLoad}
            className=" absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className=" special-font z-40 hero-heading absolute bottom-5 right-5 text-blue-75  ">
          G <b>a </b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full ">
          <div className=" mt-24 px-5 sm:px-10">
            <h1 className=" special-font hero-heading text-blue-100">
              redefi<b>n</b> e
            </h1>
            <p className=" mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              onclick={() => watchTrailers()}
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass=" !bg-yellow-300"
            />
          </div>
        </div>
      </div>

      <h1 className=" special-font hero-heading absolute bottom-5 right-5 text-black  ">
        G <b>a </b>ming
      </h1>
    </div>
    </>
  );
};

export default Hero;
