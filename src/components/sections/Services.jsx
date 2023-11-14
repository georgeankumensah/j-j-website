import React from "react";
import ServiceCard from "../reuseables/ServiceCard";

//images
import commercial from "../../assets/commercial.png";
import commercialVector from "../../assets/commercialVector.png";
import residential from "../../assets/residential.png";
import residentialVector from "../../assets/residentialVector.png";
import eol from "../../assets/eol.png";
import eolVector from "../../assets/eolVector.png";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Commercial",
      image: commercial,
      vector: commercialVector,
    },
    {
        id: 2,
        name: "Residential",
        image: residential,
        vector: residentialVector,
    },
    {
        id: 3,
        name: "End-of-Lease",
        image: eol,
        vector: eolVector,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between  px-[8.75rem] mt-[15.6rem]">
      <h1 className="text-[#3956F0] text-4xl not-italic font-medium leading-[normal] default-font">
        Services
      </h1>
      <h2 className=" text-[#800080] text-center text-4xl not-italic font-bold leading-[normal] default-font">
        Explore our <br /> range of services
      </h2>
      <p className=" text-[#1E1E1E] text-lg not-italic font-normal leading-7 default-font">
        Our All time 24/7 services
      </p>
      <div className="my-[3.31rem] flex gap-[2.81rem]">
        {serviceData.map((service) => {
          return <ServiceCard item={service} key={service.id} />;
        })}
      </div>
      <button className="rounded-[1.875rem] mt-[2.21rem]  default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
        Explore More
      </button>
    </div>
  );
};

export default Services;
