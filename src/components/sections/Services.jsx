import React from "react";
import { motion } from "framer-motion";
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

  const textVariants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    imageScaleInitial: {
      opacity: 0,
      scale: 0.4,
      y: 200,
    },
    imageScalefinal: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        staggerChildren: 0.4,

        delay: i * 0.4,
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-between  px-[8.75rem] mt-[15.6rem]">
      <div
        className="flex flex-col items-center"
      >
        <h1
          className="text-[#3956F0] text-4xl not-italic font-medium leading-[normal] default-font"
        >
          Services
        </h1>
        <h2
          className=" text-[#800080] text-center text-4xl not-italic font-bold leading-[normal] default-font"
        >
          Explore our <br /> range of services
        </h2>
        <p
          className=" text-[#3d3333] text-lg not-italic font-normal leading-7 default-font"
        >
          Our All time 24/7 services
        </p>
      </div>
      <motion.ul
        variants={textVariants}
        initial="imageScaleInitial"
        whileInView="imageScalefinal"
        className="my-[3.31rem] flex gap-[2.81rem]"
      >
        {serviceData.map((service, i) => {
          return (
            <motion.li custom={i} key={i} variants={textVariants}>
              <ServiceCard item={service} key={service.id} />
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.button className="rounded-[1.875rem] mt-[2.21rem]  default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
        Explore More
      </motion.button>
    </div>
  );
};

export default Services;
