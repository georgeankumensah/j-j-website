import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/aboutImage.png";
import AboutCard from "../reuseables/AboutCard";

const Why = () => {
  const cardData = [
    {
      id: 1,
      title: "Experienced Professionals",
      details:
        "Our team is equipped  to handle every challenge with professionalism and care.",
    },
    {
      id: 2,
      title: "Trustworthy Team",
      details:
        "All our workers have clean police records and a reputation for reliability and integrity",
    },
    {
      id: 3,
      title: "NDIS Expertise",
      details:
        " we deliver services that are not only thoroughbut also considerate of individual requirements.",
    },
    {
      id: 4,
      title: "Customizable Solutions",
      details:
        " We believe in a personalized approach,  offering services tailored to your  unique preferences and schedules",
    },
    {
      id: 5,
      title: "Commitment to Excellence",
      details:
        " Quality is at the heart of what we do.  We strive for perfection in every task,  ensuring total customer satisfaction.  ",
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
        duration: 1,
        staggerChildren: 0.4,

        delay: i * 0.4,
      },
    }),
  };

  return (
    <div className="  bg-[#abb7f95d]  py-[4.94rem] px-[6.75rem] my-[7.6rem] ">
      <h1 className="font-bold leading-[normal] text-[#3956F0] default-font text-4xl not-italic  default-font">
        Why Choose
        <span className="text-[#800080]">
          J&Y <br /> Cleaning Services?
        </span>
      </h1>

      <div className="flex items-center justify-between">
        <motion.ul
          variants={textVariants}
          whileInView="animate"
          initial="initial"
          className="grid grid-cols-2 gap-[1.25rem] mt-[2.19rem]"
        >
          {cardData.map((item,index) => (
            <motion.li key={index} variants={textVariants}>
              <AboutCard item={item} key={item.id} />
            </motion.li>
          ))}
        </motion.ul>
        <div className="relative">
          <img src={aboutImage} alt="woman holding detergent" />
          <span className="absolute bottom-0 right-[-1rem] text-center bg-white font-bold text-[#1E1E1E] w-[15.5625rem] h-[3.375rem] px-[1.875rem] flex items-center justify-center shadow-lg  rounded-[0.625rem] ">
            Your Best Choices
          </span>
        </div>
      </div>
    </div>
  );
};

export default Why;
