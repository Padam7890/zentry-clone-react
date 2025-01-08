import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description, isComingsSoon }) => {
  return (
    <div className=" relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className=" absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className=" relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className=" bento-title special-font">{title}</h1>
          {description && (
            <p className=" mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
      {title}
    </div>
  );
};

const Features = () => {
  return (
    <section className=" bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className=" font-circular-web text-lg text-blue-50">
            {" "}
            Into The Metagame layer
          </p>
          <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever expanding universe where the
            boundaries between reality and simulation blur. Play as an NFT
            player, earn tokens, and unlock exclusive gameplay. As you explore
            the vast array of innovative mechanics, you will also encounter a
            variety of gameplay elements that
          </p>
        </div>

        <div className=" border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65h">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b> n</b> t
              </>
            }
            description="A cross platform metagame app, turning your 
            activity across web2 and web3 games into rewarding adventure
            "
            isComingsSoon
          />
        </div>
        <div className=" grid h-[135h] grid-cols2 grid-rows-3 gap-7">
          <div className=" bento-tilt_1 row-span-1 md:cold-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="Experience the power of NFTs in your mind, unlocking a new level of creativity and control. Earn tokens and unlock exclusive gameplay mechanics"
              isComingsSoon
            />
          </div>
          <div className=" bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0  ">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="Experience a completely immersive gameplay experience, where you can engage with your virtual world in a completely unique and captivating way."
              isComingsSoon
            />
          </div>
          <div className=" bento-tilt_1  me-14 md:col-span-1 md:me-0 ">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="Experience a completely immersive gameplay experience, where you can engage with your virtual world in a completely unique and captivating way."
              isComingsSoon
            />
          </div>
          <div className=" bento-tilt_2">
            <div className=" flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-96 text-black">
                M <b>o</b>re co <b>m</b>ing s <b>o</b> on !
              </h1>
              <TiLocationArrow className=" m-5 scale-[5] self-end" />
            </div>
          </div>
          <div className=" bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
