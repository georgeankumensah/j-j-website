import React from "react";
import heroImage from "../../assets/heroImage.png";

const Hero = () => {
  return (
    <div className="flex items-center  px-[8.75rem]">
      <div className="flex flex-col gap-[1.25rem]">
        <h1 className="hero-text-gradient font-extrabold">
          Welcome to <br /> J&Y Cleaning Services
        </h1>
        <h3 className="text-[#1E1E1E] text-lg not-italic font-normal leading-[normal]">
          Your Trusted Cleaning and Maintenance Experts <br /> in Melbourne's
          Western Suburbs
        </h3>
        <button className="rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
          Talk to us
        </button>
      </div>
      <div className="relative">
        <img
          src={heroImage}
          alt="cleaner"
          className="rounded-[1.875rem] default-font p-2.5  w-[32.625rem] h-[30.1875rem] shrink-0"
        />
        <p className="absolute bottom-[2.13rem] bg-white text-[#1E1E1E] w-48 h-[4.125rem] px-[1.875rem] py-5 shadow-lg  rounded-[1.875rem]">Your Best Cleaners</p>
      </div>
    </div>
  );
};

export default Hero;
