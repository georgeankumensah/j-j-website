import { motion } from "framer-motion";

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
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[7.44rem] px-[4.75rem] lg:px-[8.75rem] py-[5.69rem]">
   <motion.div variants={textVariants}
        whileInView="imageScalefinal"
        // animate="imageScalefinal"
        initial="imageScaleInitial" className="relative w-[24.625rem] h-[32rem] shrink-0 hidden lg:block">
        <img
          src="/assets/cleaner.png"
          alt="cleaner"
          className="w-[23.0625rem] h-[30.875rem] shrink-0  object-cover rounded-[0rem_11.53125rem_0rem_11.53125rem] relative border-[5px] border-solid border-white z-10"
        />
        <div className="bg-[#3956F0] w-[11.5625rem] aspect-square rounded-full absolute bottom-[20.44rem] left-[13.0625rem] z-0"></div>
      </motion.div>
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
