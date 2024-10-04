import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import "aos/dist/aos.css";
import yogacise from "../assets/img/home_bg.png";
import { Box } from "@mui/material";
import About from "../components/About";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          p: "20px",
          width: "100vw",
          position: "relative",
          height: { lg: "800px", xs: "350px" },
          overflow: "hidden",
        }}
      >
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${yogacise})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
            transform: "scaleX()",
            zIndex: -1,
          }}
        />
      </Box>
      <About />
      <Pricing />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
