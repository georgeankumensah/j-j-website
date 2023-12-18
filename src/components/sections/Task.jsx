import React from "react";
import { motion } from "framer-motion";
import taskImage from "../../assets/task.png";
const Task = () => {
  const textVariant = {
    initial: {
      opacity: 1,
      y: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div className="flex bg-[#3956F0]">
      <img
        src={taskImage}
        alt="two guys cleaning"
        className="w-[47.625rem] h-[38.875rem] shrink-0 aspect-auto object-cover"
      />
      <div className="relative flex flex-1 ">
        <motion.p
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="inline-flex justify-center items-center gap-2.5 px-[1.875rem] py-[3.75rem] w-[29.93rem] h-[17.125rem] default-font rounded-[1.875rem] shrink-0  shadow-md bg-white text-[#1E1E1E] text-lg not-italic font-normal leading-[normal] absolute right-[12.17rem] top-[14.69rem]"
        >
          As we strive to be the cleaning service of choice in Melbourne's
          western suburbs, we're always exploring new ways to serve you better.
          In line with this commitment, we are excited to introduce window
          cleaning and pressure washing services, ensuring every aspect of your
          property shines.
        </motion.p>
      </div>
    </div>
  );
};

export default Task;
