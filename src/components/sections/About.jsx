import { motion } from "framer-motion";

const About = () => {
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
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[7.44rem] mt-[7rem] lg:mt-[15.6rem] ">
       <motion.div variants={textVariants}
        whileInView="imageScalefinal"
        initial="imageScaleInitial" className="relative w-[24.625rem] h-[32rem] px-[1.89rem] lg:px-0 shrink-0">
        <img
          src="/assets/cleaner.png"
          alt="cleaner"
          className="w-[23.0625rem] h-[30.875rem] shrink-0 object-cover rounded-[0rem_11.53125rem_0rem_11.53125rem] relative border-[5px] border-solid border-white z-10"
        />
        <div className="bg-[#3956F0] w-[11.5625rem] aspect-square rounded-full absolute bottom-[20.44rem] left-[13.0625rem] z-0"></div>
      </motion.div>
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
          <span>{" "}
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
