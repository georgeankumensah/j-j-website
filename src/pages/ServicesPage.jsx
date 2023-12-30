import Hero from "../components/sections/Services/Hero";
import Testimonials from "../components/sections/Testimonials";
import Services from "../components/sections/Services/Services";

const ServicesPage = () => {
  return (
    <div className="relative h-full   mx-auto  overflow-clip">
      <section>
      <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section className="">
        <Testimonials />
      </section>
    </div>
  );
};

export default ServicesPage;
