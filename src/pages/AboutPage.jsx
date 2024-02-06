import HeroAbout from "../components/sections/About/HeroAbout";
import About from "../components/sections/About";
import Mission from "../components/sections/Mission";
import Contact from "../components/sections/Contact";
import MessageForm from "../components/reuseables/MessageForm";

const AboutPage = () => {
  return (
    <div className="relative h-full container lg:max-w-screen-2xl background mx-auto  overflow-clip">
<MessageForm/>
        <HeroAbout />
        <Mission />
        <About />
  
        <Contact />
    </div>
  );
};

export default AboutPage;
