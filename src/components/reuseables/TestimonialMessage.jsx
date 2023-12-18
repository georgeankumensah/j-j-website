import React from "react";
import testimonialIcon from "../../assets/testimonialIcon.svg";

const TestimonialMessage = ({item}) => {
  return (
    <div className="flex flex-col items-center w-[18.125rem] gap-[1.88rem]">
      <img src={testimonialIcon} alt="message" />
      <p className="text-black text-center text-[1.375rem] not-italic font-medium leading-[normal] default-font break-words">
        {item.message}
      </p>
      <p className=" text-[#1E1E1E] text-4xl not-italic font-bold leading-[normal] default-font">
        {item.name}
      </p>
      <p className="text-[#1E1E1E] text-2xl not-italic font-normal leading-[normal] default-font">
      {item.country}
      </p>
    </div>
  );
};

export default TestimonialMessage;
