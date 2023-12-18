import React from "react";
import Hero from "../components/sections/Services/Hero";
import Testimonials from "../components/sections/Testimonials";
import Services from "../components/sections/Services/Services";

const ServicesPage = () => {
  return (
    <>
      {/* <section> */}
      <Hero />
      {/* </section> */}
      <section>
        <Services />
      </section>
      <section>
        <Testimonials />
      </section>
    </>
  );
};

export default ServicesPage;
