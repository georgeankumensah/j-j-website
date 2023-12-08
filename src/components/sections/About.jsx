import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about-section.png";

const About = () => {
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
    <div className="flex items-center justify-between gap-[7.44rem]  mt-[15.6rem]">
      <motion.img
        variants={textVariants}
        whileInView="imageScalefinal"
        // animate="imageScalefinal"
        initial="imageScaleInitial"
        src={aboutImage}
        alt="workers cleaning"
        className=" w-[24.625rem] h-[32rem] shrink-0"
      />
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="flex flex-col gap-1"
      >
        <motion.h1
          variants={textVariants}
          className="text-[#3956F0] text-4xl not-italic font-medium leading-[normal] default-font"
        >
          About Us
        </motion.h1>
        <motion.h2
          variants={textVariants}
          className=" text-[#800080] text-4xl not-italic font-bold leading-[normal] default-font"
        >
          Did you know we have 38 years experience
        </motion.h2>
        <motion.p
          variants={textVariants}
          className=" text-[#1E1E1E] text-lg not-italic font-normal leading-7 default-font"
        >
          At J&Y Cleaning Services, we are dedicated to creating pristine
          environments for both
          <span>
            NDIS participants and the broader Melbourne community. With a
            remarkable 38 years of combined experience in cleaning and over two
            decades{" "}
          </span>
          in support work, our founders, Jeff and Yassah, bring a wealth of
          expertise and a compassionate understanding to every job.
        </motion.p>
        <motion.button
          variants={textVariants}
          className=" mt-[2rem] rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
