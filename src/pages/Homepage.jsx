import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Why from "../components/sections/Why";
import Task from "../components/sections/Task";
import Connect from "../components/sections/Connect";
import Space from "../components/sections/Space";
import Testimonials from "../components/sections/Testimonials";

const Homepage = () => {
  return (
    <div className="relative h-full container lg:max-w-screen-2xl background mx-auto  overflow-clip">
      <section>
        <Hero />
      </section>
      <section className="px-[8.75rem]">
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Why />
      </section>
      <section>
        <Task />
      </section>
      <section>
        <Connect />
      </section>
      <section>
        <Space />
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default Homepage;
