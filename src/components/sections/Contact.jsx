import React from "react";
import contactImage from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className="flex justify-between bg-[#3956f0] gap-[1.75rem] h-[28.3125rem] px-[8.75rem] py-[4.5rem] mt-[8.25rem] relative ">
      <div className="flex flex-col items-start gap-[1.45rem]">
        <h1 className="text-white text-4xl not-italic font-bold leading-[normal] default-font capitalize">
          Let us help with your <br /> one-time cleaning and <br /> recurring
          cleaning services.
        </h1>
        <button className="rounded-[1.875rem] default-font text-[#3956f0] text-[1.125rem] bg-white p-[0.625rem] w-[19.875rem]">
          Request a Free Estimate
        </button>
        <div className="flex flex-col items-end">
          <p className="text-white text-[1.5rem] not-italic font-bold leading-[normal] default-font capitalize">
            <span className="font-normal">or Call </span> +(61 )466 897 856
          </p>
          <p className="text-white text-[1.5rem] not-italic font-bold leading-[normal] default-font capitalize">
            +(61) 450 544 573
          </p>
        </div>
      </div>
      <img
        src={contactImage}
        alt="contact image"
        className="w-[ 28.125rem] h-[36.79288rem] shrink-0 absolute z-20 bottom-0 right-[5.75rem]"
      />
    </div>
  );
};

export default Contact;
