import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about-section.png";

const Connect = () => {
  const textVariants = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    imageScaleInitial: {
      opacity: 0,
      scale: 0.4,
      y: -300,
    },
    imageScalefinal: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="flex items-center justify-between gap-[7.44rem] px-[8.75rem] py-[5.69rem]">
      <motion.img
        variants={textVariants}
        initial="imageScaleInitial"
        animate="imageScalefinal"
        src={aboutImage}
        alt="workers cleaning"
        className=" w-[24.625rem] h-[32rem] shrink-0"
      />
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-[1.25rem]"
      >
        <motion.h1
          variants={textVariants}
          className="font-bold leading-[normal] text-[#3956F0] default-font text-4xl not-italic  default-font"
        >
          Connect with Us
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-[#1E1E1E] text-lg not-italic font-normal leading-[normal] default-font"
        >
          For a cleaning and maintenance partner that values your comfort and
          cleanliness as much as you do, reach out to J&Y Cleaning Services.
          Contact us today to discuss your needs and discover how we can make
          your life cleaner and more comfortable.
        </motion.p>
        <motion.button
          variants={textVariants}
          className=" mt-[2rem] rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Connect;
