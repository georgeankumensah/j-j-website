import {motion} from "framer-motion"
import ServiceDetailCard from "../../reuseables/ServiceDetailCard";


const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Commercial Cleaning",
      image: "/cleaner.png",
      description:
        "We understand the importance of a spotless workspace. Our commercial cleaning services are tailored to businesses of all sizes, ensuring a hygienic and welcoming atmosphere for your staff and clients.",
    },
    {
      id: 2,
      title: "Residential Cleaning",
      image: "/cleaner.png",
      description:
        "Your home is your sanctuary, and we treat it with the utmost respect. Our team offers thorough cleaning solutions that leave every corner sparkling, so you can enjoy a clean and peaceful living space.",
    },
    {
      id: 3,
      title: "End-of-Lease Cleaning",
      image: "/cleaner.png",
      description:
        "Moving out? We specialize in end-of-lease cleanings that meet the highest standards, helping you secure your full bond return with ease.",
    },
    {
      id: 4,
      title: "Carpet Cleaning",
      image: "/cleaner.png",
      description:
        "Our advanced carpet cleaning techniques breathe new life into your carpets, removing stubborn stains and allergens for a fresher, cleaner home.",
    },
    {
      id: 5,
      title: "General Household Maintenance",
      image: "/cleaner.png",
      description:
        "Beyond cleaning, we offer a range of maintenance services, including landscaping, decking, fencing, and general handyman tasks to enhance the beauty and functionality of your property.",
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
    <div className="flex flex-col items-center justify-between py-[3.75rem]  px-[8.75rem] ">
      <div className="flex flex-col items-center">
        <h1 className="text-[#3956F0] text-4xl not-italic font-medium leading-[normal] default-font">
          Services
        </h1>
        <h2 className=" text-[#800080] text-center text-4xl not-italic font-bold leading-[normal] default-font">
          Explore our <br /> range of services
        </h2>
        <p className=" text-[#3d3333] text-lg not-italic font-normal leading-7 default-font">
          Our All time 24/7 services
        </p>
      </div>
      <motion.ul
        variants={textVariants}
        // initial="imageScaleInitial"
        // whileInView="imageScalefinal"
        className="my-[3.31rem] flex flex-col gap-[2.81rem]"
      >
        {serviceData.map((item, index) => (
          <li key={index}>
            <ServiceDetailCard item={item} />
          </li>
        ))}
      </motion.ul>
      <motion.button className="rounded-[1.875rem] mt-[2.21rem]  default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
        Explore More
      </motion.button>
      <div></div>
    </div>
  );
};

export default Services;
