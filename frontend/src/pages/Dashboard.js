import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Container } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";
import profileImage from "../assets/img/images/profile.png";
import { GaugeComponent } from "react-gauge-component";

const HighlightedDay = styled(PickersDay)(({ theme, customcolor }) => ({
  "&.Mui-selected": {
    backgroundColor: customcolor || theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const ServerDay = (props) => {
  const { highlightedDays = {}, day, outsideCurrentMonth, ...other } = props;

  const dateFormatted = day.format("YYYY-MM-DD");
  const isSelected = !outsideCurrentMonth && highlightedDays[dateFormatted];
  const customColor = highlightedDays[dateFormatted];

  return (
    <HighlightedDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
      selected={Boolean(isSelected)}
      customcolor={customColor}
    />
  );
};

const Dashboard = () => {
  const [value, setValue] = useState(dayjs());

  const highlightScope = {
    highlight: "series",
    fade: "global",
  };

  const colors = {
    Time: "#FF5733",
    Calories: "#33FF57",
  };

  const series = [
    {
      label: "Time",
      data: [2423, 2210, 764, 1879, 1478, 1373, 1891],
      color: colors.Time,
    },
    {
      label: "Calories",
      data: [2362, 2254, 1962, 1336, 586, 1069, 2194],
      color: colors.Calories,
    },
  ].map((s) => ({ ...s, highlightScope }));

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const highlightedDays = {
    "2024-10-01": "green",
    "2024-10-09": "red",
    "2024-10-21": "red",
    "2024-10-12": "red",
  };

  const data = [
    { value: 5, label: "Upper Legs" },
    { value: 10, label: "Waist" },
    { value: 15, label: "Upper Arms" },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [recommendations, setRecommendations] = useState(null);

  const calculateBMI = async () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI.toFixed(2));

      // Determine the BMI category for the message
      if (calculatedBMI < 18.5) {
        setMessage("You are underweight.");
      } else if (calculatedBMI < 24.9) {
        setMessage("You have a normal weight.");
      } else if (calculatedBMI < 29.9) {
        setMessage("You are overweight.");
      } else {
        setMessage("You are obese.");
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:5000/bmi?bmi=${calculatedBMI.toFixed(2)}`
        );
        if (response.ok) {
          const data = await response.json();
          setRecommendations(data);
        } else {
          setRecommendations(null);
          console.error("Error fetching recommendations:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    } else {
      alert("Please enter valid weight and height.");
    }
  };

  return (
    <>
      <Box
        sx={{ width: "100vw", height: "40vh", backgroundColor: "black" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-15vh",
        }}
      >
        <Box
          sx={{
            width: "15vw",
            height: "30vh",
            backgroundImage: `url(${profileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-bold text-center mb-4">
              BMI Calculator
            </h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your weight"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your height"
              />
            </div>
            <button
              onClick={calculateBMI}
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded btn w-full bg-green-300 text-white"
            >
              Calculate BMI
            </button>

            {bmi && (
              <div className="mt-4 text-center">
                <p className="text-lg font-bold">Your BMI: {bmi}</p>
                <p className="text-sm">{message}</p>
              </div>
            )}
          </div>
          <GaugeComponent
            id="gauge-component4"
            arc={{
              width: 0.13,
              subArcs: [
                {
                  limit: 18.5,
                  color: "#f25f16",
                  showTick: true,
                  tooltip: { text: "Under Weight" },
                },
                {
                  limit: 25,
                  color: "#16f216",
                  showTick: true,
                  tooltip: { text: "Normal" },
                },
                {
                  limit: 30,
                  color: "#f0340a",
                  showTick: true,
                  tooltip: { text: "Over Weight" },
                },
                {
                  limit: 50,
                  color: "#820404",
                  showTick: true,
                  tooltip: { text: "Obesity" },
                },
              ],
            }}
            value={bmi}
            pointer={{ type: "arrow", elastic: true }}
            style={{ width: "40vw" }}
            maxValue={50}
          />
        </div>
      </Box>
      <Box>
        {recommendations && (
          <div className="mt-4 text-center">
            <h2 className="text-lg font-bold">Recommendations</h2>
            <p className="text-sm">
              Foods: {recommendations.recommended_foods.join(", ")}
            </p>
            <p className="text-sm">
              Exercises: {recommendations.recommended_exercises.join(", ")}
            </p>
            <p className="text-sm">
              Daily Caloric Intake: {recommendations.daily_caloric_intake}
            </p>
            <p className="text-sm">
              Calories Burned: {recommendations.calories_burned}
            </p>
          </div>
        )}
      </Box>
      <Container>
        <div className="flex justify-around p-5">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                Calories Burned
              </h3>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="my-4">
              <h1 className="text-4xl font-extrabold text-gray-900">
                120.00 <span className="text-lg text-gray-500">kcal</span>
              </h1>
              <p className="text-green-600 font-semibold ">(+10%)</p>
            </div>
            <div>
              <p className="text-gray-500">Total calories burned today</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Workouts</h3>
              <span className="text-2xl">🔄</span>
            </div>
            <div className="my-4">
              <h1 className="text-4xl font-extrabold text-gray-900">5.00</h1>
              <p className="text-green-600 font-semibold">(+10%)</p>
            </div>
            <div>
              <p className="text-gray-500">Total no of workouts for today</p>
            </div>
          </div>
        </div>
        <div className="flex m-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
              slots={{
                day: ServerDay,
              }}
              slotProps={{
                day: {
                  highlightedDays,
                },
              }}
            />
          </LocalizationProvider>
          <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
            <PieCenterLabel>Workouts</PieCenterLabel>
          </PieChart>
        </div>
        <BarChart
          height={300}
          series={series
            .slice(0, 2)
            .map((s) => ({ ...s, data: s.data.slice(0, 7) }))}
          xAxis={[{ scaleType: "band", data: dayNames }]}
        />
      </Container>
    </>
  );
};

export default Dashboard;
