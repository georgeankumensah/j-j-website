// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useFormContext } from "../../../contexts/FormContext";

const Hero = () => {
  const slides = [
    { title: "First item", description: "Lorem ipsum", img: "/assets/hero1.png" },
    { title: "First item", description: "Lorem ipsum", img: "/assets/hero2.png" },
    { title: "First item", description: "Lorem ipsum", img: "/assets/hero3.png" },
  ];
  const { formIsActive, toggleForm } = useFormContext();


  const handleClick = ()=>{
    toggleForm(true)
  }

  return (
    <div className=" w-full h-screen lg:h-full   bg-red-400">
      <div className=" relative  ">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          infiniteLoop
          interval={4000}
          stopOnHover={false}
          transitionTime={1000}
          autoPlay
        >
          {slides.map((slide, index) => (
            <img
            key={index}
              src={slide.img}
              alt="banner"
              className=" w-full h-screen  object-cover"
            />
          ))}
        </Carousel>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute z-[40] top-[8rem] md:top-[15.94rem] left-[2rem] md:left-[4rem] lg:left-[8.75rem] flex flex-col gap-[1.25rem]">
        <h1 className="about-text-gradient ">
          Checking Our Professional <br />
          cleaning Service we Render
        </h1>
        <h3 className="text-white text-lg default-font not-italic font-normal leading-[1rem] md:leading-[normal]">
          Your Trusted Cleaning and Maintenance Experts in Melbourne's Western
          Suburbs
        </h3>
        <button onClick={handleClick} className="rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
          Talk to us
        </button>
      </div>
    </div>
  );
};

export default Hero;
