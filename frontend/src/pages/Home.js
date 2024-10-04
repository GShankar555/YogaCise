import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className="overflow-hidden">
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
