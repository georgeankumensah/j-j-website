/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useFormContext } from "../../contexts/FormContext"

import heroImage from "../../assets/heroImage.png";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
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
    },
    imageScalefinal: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const { formIsActive, toggleForm } = useFormContext();


  const handleClick = ()=>{
    toggleForm(true)
  }

  return (
    <div className="flex flex-col   lg:flex-row items-center  lg:h-screen   px-[1.9rem]  lg:px-[8.75rem] ">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-[1.25rem] mt-[6.37rem] lg:mt-0"
      >
        <motion.h1
          variants={textVariants}
          className="hero-text-gradient    font-extrabold"
        >
          Welcome to <br /> J&Y Cleaning Services
        </motion.h1>
        <motion.h3
          variants={textVariants}
          className="text-[#1E1E1E] text-lg default-font not-italic font-normal leading-[normal]"
        >
          Your Trusted Cleaning and Maintenance Experts <br /> in Melbourne's
          Western Suburbs
        </motion.h3>
        <motion.button
        onClick={handleClick}
          variants={textVariants}
          className="rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]"
        >
          Talk to us
        </motion.button>
      </motion.div>
      <div className="relative">
        <motion.img
          src={heroImage}
          variants={textVariants}
          initial="imageScaleInitial"
          animate="imageScalefinal"
          alt="cleaner"
          className="rounded-[1.875rem] default-font p-2.5 aspect-auto   w-[32.625rem] h-[30.1875rem] object-scale-down shrink-1"
        />
        <p className="absolute bottom-[2.13rem] bg-white text-[#1E1E1E]  h-[4.125rem] px-[1.875rem] py-5 shadow-lg  rounded-[1.875rem]">
          Your Best Cleaners
        </p>
      </div>
    </div>
  );
};

export default Hero;
