import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { exercisesData } from "../utils/fetchData";
import Detail from "../components/Detail";
import { Atom } from "react-loading-indicators";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = exercisesData.filter((item) =>
        item.id.includes(id)
      );
      setExerciseDetail(exerciseDetailData[0]);
      setLoading(false);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Atom color="#32cd32" size="medium" text="" textColor="" />
        </Box>
      ) : (
        <>
          <Detail exerciseDetail={exerciseDetail} />
          <div className="d-flex flex-row justify-content-center">
            <Link to={`/gym/Training/${id}`} style={{ marginLeft: "20px" }}>
              <Button
                sx={{
                  bgcolor: "#FF2625",
                  color: "#fff",
                  textTransform: "none",
                  width: { lg: "173px", xs: "80px" },
                  height: "56px",
                  fontSize: { lg: "20px", xs: "14px" },
                }}
              >
                Start Training
              </Button>
            </Link>
          </div>
        </>
      )}
    </Box>
  );
};

export default ExerciseDetail;
