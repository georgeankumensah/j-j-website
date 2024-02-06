import React from "react";
import { motion } from "framer-motion";


const ServiceDetailCard = ({ item }) => {
  const { title, description, image, id } = item;
  const textVariants = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    imageScaleInitial: {
      opacity: 0,
      scale: 0.4,
      y: -50,
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
    <div
      className="flex lg:h-screen flex-col lg:flex-row  items-center justify-between gap-[7.44rem]  "
      style={{ flexDirection: id%2 == 0 ? "row-reverse" : "row" }}
    > 
      <motion.div
        variants={textVariants}
        whileInView="imageScalefinal"
        // animate="imageScalefinal"
        initial="imageScaleInitial"
        className="relative w-[24.625rem] h-[32rem] shrink-0 hidden lg:block"
      >
        <img
          src={image}
          alt="cleaner"
          className="w-[23.0625rem] h-[30.875rem]  shrink-0 object-cover rounded-[0rem_11.53125rem_0rem_11.53125rem] relative border-[5px] border-solid border-white z-10"
        />
        <div className="bg-[#3956F0] w-[11.5625rem] aspect-square rounded-full absolute bottom-[20.44rem] left-[13.0625rem] z-0"></div>
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="flex flex-col gap-1"
      >
        <motion.h2
          variants={textVariants}
          className=" text-[#800080] text-4xl not-italic font-bold leading-[normal] default-font"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={textVariants}
          className=" text-[#1E1E1E] text-lg not-italic font-normal leading-7 default-font"
        >
          {description}
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

export default ServiceDetailCard;
