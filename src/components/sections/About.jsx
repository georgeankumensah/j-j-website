import React from "react";
import aboutImage from "../../assets/about-section.png";

const About = () => {
  return (
    <div className="flex items-center justify-between gap-[7.44rem]  mt-[15.6rem]">
      <img
        src={aboutImage}
        alt="workers cleaning"
        className=" w-[24.625rem] h-[32rem] shrink-0"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-[#3956F0] text-4xl not-italic font-medium leading-[normal] default-font">
          About Us
        </h1>
        <h2 className=" text-[#800080] text-4xl not-italic font-bold leading-[normal] default-font">
          Did you know we have 38 years experience
        </h2>
        <p className=" text-[#1E1E1E] text-lg not-italic font-normal leading-7 default-font">
          At J&Y Cleaning Services, we are dedicated to creating pristine
          environments for both
          <span>
            NDIS participants and the broader Melbourne community. With a
            remarkable 38 years of combined experience in cleaning and over two
            decades{" "}
          </span>
          in support work, our founders, Jeff and Yassah, bring a wealth of
          expertise and a compassionate understanding to every job.
        </p>
        <button className=" mt-[2rem] rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
