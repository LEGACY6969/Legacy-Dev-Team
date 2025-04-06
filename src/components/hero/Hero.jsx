import React from "react";
import HeroImg from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className="h-[650px] md:h-[600px]  bg-gradient-to-r from-blue-500 to-blue-950 pt-32 md:pt-48">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
          {/* hero text container */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center text-center gap-4 md:items-start md:text-left"
          >
            <h1 className="text-4xl">
              Sri-Lankan Leading Game Development Community
            </h1>
            <p>
              Sri Lanka’s premier game development community, uniting passionate creators to build immersive multiplayer experiences, share knowledge, and shape the future of gaming together.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">About Us</button>
              <button className="btn-outline">Contact</button>
            </div>
          </div>
          {/* hero Image container */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={HeroImg} alt="Not Found" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
