import React from "react";

const AboutCard = ({ item }) => {
  return (
    <div className="flex flex-col items-start gap-3 w-[19.1875rem] ">
      <p className=" text-[1.575rem] not-italic default-font  leading-[normal] rounded-full aspect-square flex items-center justify-center font-bold text-white  w-[2.625rem] h-[2.625rem]  bg-[#3956F087]">
        {item.id}
      </p>
      <h1 className="text-[#1E1E1E] default-font text-lg not-italic font-bold leading-[normal]">
        {item.title}
      </h1>
      <p className="default-font break-words    text-[#1E1E1E] text-lg not-italic font-normal leading-[normal]">
        {item.details}
      </p>
    </div>
  );
};

export default AboutCard;
