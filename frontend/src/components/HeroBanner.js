import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBanner from "../assets/img/images/gymbg2.jpg";

const HeroBannner = () => {
  return (
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
          backgroundImage: `url(${HeroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          transform: "scaleX(-1)",
          zIndex: -1,
        }}
      />
      <Box marginLeft="40px">
        <Typography
          color="#ff2625"
          fontWeight="700"
          fontSize="26px"
          marginTop="150px"
        >
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="30px"
          mt="30px"
          color="white"
        >
          Strive for progress, <br /> not perfection
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4} fontWeight="600">
          Check out the most effective exercises
        </Typography>
        <div className="w-100 d-flex justify-content-center">
          <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{ backgroundColor: "#ff2625", padding: "10px" }}
          >
            Explore Exercises
          </Button>
        </div>
        <Typography
          fontWeight={700}
          color="#ff2625"
          sx={{
            opacity: 0.4,
            display: { lg: "block", xs: "none" },
            fontSize: "200px",
          }}
        >
          Exercise
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroBannner;
