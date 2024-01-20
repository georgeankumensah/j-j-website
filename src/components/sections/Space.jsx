/* eslint-disable react/no-unescaped-entities */
import spaceImage from "../../assets/space.png";

const Space = () => {
  return (
    <div className="flex bg-[#3956F0] p-[4rem] lg:p-0">
      <div className="relative flex flex-col flex-1 items-center">
        <h1 className=" text-white text-5xl not-italic font-semibold default-font leading-[3.75rem] mt-[4.57rem]">
          Your Space, Our <br /> Expertise
        </h1>
        <p className="text-white text-4xl not-italic default-font font-normal leading-[3.75rem]">
          – Let's Make It Shine!
        </p>
        <p className=" hidden lg:flex w-[29.9375rem] h-[17.125rem] justify-center items-center gap-2.5 shrink-0 px-[1.875rem] py-[3.75rem] rounded-[1.875rem] bg-white text-[#1E1E1E] default-font text-lg not-italic font-normal leading-[normal] absolute top-[17.25rem] left-[20.8rem]">
          As we strive to be the cleaning service of choice in Melbourne's
          western suburbs, we're always exploring new ways to serve you better.
          In line with this commitment, we are excited to introduce window
          cleaning and pressure washing services, ensuring every aspect of your
          property shines.
        </p>
      </div>
      <img
        src={spaceImage}
        alt="two guys cleaning"
        className=" w-[40rem] h-[39.375rem] hidden lg:block shrink-0 aspect-auto object-cover  "
      />
    </div>
  );
};

export default Space;
