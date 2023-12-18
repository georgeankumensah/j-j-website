import React from "react";
import HeroAbout from "../components/sections/About/HeroAbout";
import About from "../components/sections/About";
import Mission from "../components/sections/Mission";
import Contact from "../components/sections/Contact";

const AboutPage = () => {
  return (
    <div className="relative h-full container lg:max-w-screen-2xl background mx-auto  overflow-clip">

        <HeroAbout />
        <Mission />
        <About />
  
        <Contact />
    </div>
  );
};

export default AboutPage;
