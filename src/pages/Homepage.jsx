import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Why from "../components/sections/Why";
import Task from "../components/sections/Task";
import Connect from "../components/sections/Connect";
import Space from "../components/sections/Space";
import Testimonials from "../components/sections/Testimonials";
import MessageForm from "../components/reuseables/MessageForm";

const Homepage = () => {
  return (
    <div className="relative h-full container lg:max-w-screen-2xl bg-white background mx-auto  overflow-clip">
      <MessageForm/>
      <section>
        <Hero />
      </section>
      <section >
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
