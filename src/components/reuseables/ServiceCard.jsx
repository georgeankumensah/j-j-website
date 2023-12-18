import React from "react";

const ServiceCard = ({item}) => {
  return (
    <div className="relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-[19.12756rem] shrink-0  shadow-[0px_4px_60px_0px_rgba(0,0,0,0.10)] object-cover aspect-square rounded-[19.12756rem] border-[4.936px] border-solid border-white"
      />
      <div className="flex items-center   absolute top-[11.29rem] left-[6.56rem] bg-white w-[12.77231rem] h-[10.61275rem] rounded-[6.17019rem_0rem_6.50956rem_1.60425rem] border-[4.936px] border-solid border-[#EAE8E8]">
        <div className="flex flex-col gap-[0.68rem] ml-[2.16rem]">
          <img src={item.vector} alt="" className="w-[3.57869rem] h-[2.71488rem] object-cover" />
          <p className="text-[#1E1E1E] text-lg not-italic font-bold leading-[normal]">
            {item.name} <br />
            Cleaning
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
