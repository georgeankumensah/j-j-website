/* eslint-disable react/no-unescaped-entities */
import aboutHeroImage from "../../../assets/aboutHeroImage.png";
import { useFormContext } from "../../../contexts/FormContext";

const HeroAbout = () => {
  const { formIsActive, toggleForm } = useFormContext();


  const handleClick = ()=>{
    toggleForm(true)
  }

  return (
    <div className="flex items-start justify-start flex-col lg:flex-row pt-[10.37rem]  px-[1.9rem]  lg:px-[8.75rem] relative h-screen  overflow-clip">
      <div className="flex flex-col gap-[1.25rem] w-full z-10  ">
        <h1 className="hero-text-gradient font-extrabold">
          About Our Professional <br /> cleaning Service
        </h1>
        <h3 className="text-[#1E1E1E] text-lg default-font not-italic font-normal leading-[normal]">
          Your Trusted Cleaning and Maintenance Experts <br /> in Melbourne's
          Western Suburbs
        </h3>
       <button onClick={handleClick} className="rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[10.25rem]">
          Talk to us
        </button>
        
       
      </div>
      <img
        src={aboutHeroImage}
        alt="cleaner"
        className="w-[48.6875rem]  lg:absolute z-0  right-0 aspect-auto "
      />
    </div>
  );
};

export default HeroAbout;
