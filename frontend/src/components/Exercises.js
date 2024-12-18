import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exercisesData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;

  useEffect(() => {
    const fetchExerciseData = () => {
      let searchedExercises = [];
      if(bodyPart==='all') {
        searchedExercises = exercisesData;
      } else {
        searchedExercises = exercisesData.filter(
        (item) => item.bodyPart.toLowerCase().includes(bodyPart.toLowerCase())
                || item.name.toLowerCase().includes(bodyPart.toLowerCase())
                || item.target.toLowerCase().includes(bodyPart.toLowerCase())
                || item.equipment.toLowerCase().includes(bodyPart.toLowerCase()),
      );
      }
      setExercises(searchedExercises);
    };
    fetchExerciseData();
  }, [bodyPart, setExercises]);

  useEffect(() => {
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(
      indexOfFirstExercise,
      indexOfLastExercise
    );

    setCurrentExercises(currentExercises);
  }, [currentPage, exercises]);

  const [currentExercises, setCurrentExercises] = useState([]);

  const Paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={Paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;