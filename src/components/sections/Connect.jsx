import React from "react";
import aboutImage from "../../assets/about-section.png";

const Connect = () => {
  return (
    <div className="flex items-center justify-between gap-[7.44rem] px-[8.75rem] py-[5.69rem]">
      <img
        src={aboutImage}
        alt="workers cleaning"
        className=" w-[24.625rem] h-[32rem] shrink-0"
      />
      <div className="flex flex-col gap-[1.25rem]">
        <h1 className="font-bold leading-[normal] text-[#3956F0] default-font text-4xl not-italic  default-font">
          Connect with Us
        </h1>
        <p className="text-[#1E1E1E] text-lg not-italic font-normal leading-[normal] default-font">
          For a cleaning and maintenance partner that values your comfort and
          cleanliness as much as you do, reach out to J&Y Cleaning Services.
          Contact us today to discuss your needs and discover how we can make
          your life cleaner and more comfortable.
        </p>
        <button className=" mt-[2rem] rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
        Contact Us
        </button>
      </div>
    </div>
  );
};

export default Connect;
