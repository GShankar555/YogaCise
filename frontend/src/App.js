import React from "react";
import "./index.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Yoga from "./pages/Yoga";
import Gym from "./pages/Gym";
import TrainingPage from "./pages/TrainingPage";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import YogaAsanaDetail from "./pages/YogaAsanaDetail";
import AsanaDesc from "./pages/AsanaDesc";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/asanas" element={<YogaAsanaDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/yoga-asana/:id" element={<AsanaDesc />} />
        <Route path="/gym/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/gym/Training/:id" element={<TrainingPage />} />
      </Routes>
    </>
  );
};

export default App;
