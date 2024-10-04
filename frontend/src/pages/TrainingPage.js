import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { exercisesData } from "../utils/fetchData";
import VideoStream from "../components/VideoStream";

const Training = () => {
  const { id } = useParams();
  const location = useLocation();
  const [Gif] = exercisesData.filter((item) => item.id.includes(id));
  useEffect(() => {
    return () => {
      if (location.pathname !== "/Training/0002") {
        console.log(location.pathname);
        fetch("http://localhost:5000/cancel_feed")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to cancel feed");
            }
            console.log("Feed canceled successfully");
          })
          .catch((error) => {
            console.error("Error canceling feed:", error);
          });
      }
    };
  }, [location]);

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <VideoStream userChoice={id} flag={"gym"} />
      <img src={Gif.gifUrl} alt="Gif" loading="lazy" />
    </Stack>
  );
};

export default Training;
