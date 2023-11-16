import React from "react";
import HeroAbout from "../components/sections/About/HeroAbout";
import About from "../components/sections/About";

const AboutPage = () => {
  return (
    <div className="relative h-full container lg:max-w-screen-2xl background mx-auto lg:px-[9.38rem] overflow-clip">
      <HeroAbout />
      <About/>
    </div>
  );
};

export default AboutPage;
