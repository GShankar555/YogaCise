import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Facts from "../components/Facts";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Aos from "aos";
import "aos/dist/aos.css";

const Yoga = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Cards />
        <Facts />
        <Features />
        <Courses />
      </div>
    </>
  );
};

export default Yoga;
