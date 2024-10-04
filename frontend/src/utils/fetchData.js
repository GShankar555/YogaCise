import Squat from "../assets/img/images/squat.gif";
import Curl from "../assets/img/images/curl.gif";
import SitUp from "../assets/img/images/situps.gif";
import lunges from "../assets/img/images/lunges.gif";
import crunches from "../assets/img/images/crunches.gif"
import sidebend from "../assets/img/images/sidebend.gif";
import pushup from "../assets/img/images/pushup.gif";
import pullups from "../assets/img/images/pullups.gif";
import single_arm_delt_fly from "../assets/img/images/single_arm_delt_fly.gif";
import glutes from "../assets/img/images/glutes.webp";

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const bodyPartNames = ["all", "upper legs", "waist", "upper arms"];

export const exercisesData = [
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: Squat,
    id: "0001",
    name: "squat",
    target: "quads",
    secondaryMuscles: ["hamstrings", "calves", "waist", "lower back"],
    instructions: [
      "Stand with your feet shoulder-width apart.",
      "Lower your body by bending your knees and pushing your hips back, as if sitting in a chair.",
      "Keep your chest up and knees behind your toes.",
      "Lower yourself until your thighs are parallel to the floor.",
      "Push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: lunges,
    id: "0002",
    name: "lunge",
    target: "quads",
    secondaryMuscles: ["hamstrings", "glutes", "calves"],
    instructions: [
      "Stand with your feet together.",
      "Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle.",
      "Push through your front heel to return to the starting position.",
      "Alternate legs and repeat.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: crunches,
    id: "0003",
    name: "Crunches",
    target: "abs",
    secondaryMuscles: ["obliques"],
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor.",
      "Place your hands behind your head and lift your shoulders off the ground.",
      "Exhale as you lift and inhale as you lower.",
      "Keep your core tight throughout the movement.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: SitUp,
    id: "0004",
    name: "situps",
    target: "abs",
    secondaryMuscles: ["hip flexors"],
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor.",
      "Place your hands behind your head and lift your upper body towards your knees.",
      "Lower back down slowly and repeat.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: sidebend,
    id: "0005",
    name: "sidebend",
    target: "obliques",
    secondaryMuscles: ["abs"],
    instructions: [
      "Stand with feet shoulder-width apart.",
      "Raise one arm overhead and bend to the side.",
      "Keep your hips steady and engage your core.",
      "Alternate sides and repeat.",
    ],
  },
  {
    bodyPart: "upper arms",
    equipment: "dumbbells",
    gifUrl: Curl,
    id: "0006",
    name: "curl",
    target: "biceps",
    secondaryMuscles: ["forearms"],
    instructions: [
      "Hold a dumbbell in each hand with arms at your sides.",
      "Curl the weights up toward your shoulders while keeping your elbows close to your torso.",
      "Slowly lower the weights back to the starting position.",
    ],
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: pushup,
    id: "0007",
    name: "pushups",
    target: "triceps",
    secondaryMuscles: ["chest", "shoulders"],
    instructions: [
      "Start in a plank position with hands shoulder-width apart.",
      "Lower your body until your chest nearly touches the floor.",
      "Push yourself back up to the starting position.",
    ],
  },
  {
    bodyPart: "upper arms",
    equipment: "pull-up bar",
    gifUrl: pullups,
    id: "0008",
    name: "pullups",
    target: "biceps",
    secondaryMuscles: ["lats", "shoulders"],
    instructions: [
      "Grab a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Pull your body up until your chin is above the bar.",
      "Slowly lower yourself back down and repeat.",
    ],
  },
  {
    bodyPart: "upper arms",
    equipment: "dumbbells",
    gifUrl: single_arm_delt_fly,
    id: "0009",
    name: "single arm delt fly",
    target: "deltoids",
    secondaryMuscles: ["traps", "upper back"],
    instructions: [
      "Stand with your feet shoulder-width apart, holding a dumbbell in one hand.",
      "Bend slightly at the waist and raise the dumbbell out to the side.",
      "Lower the weight back down and repeat for the desired number of reps before switching sides.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: glutes,
    id: "0010",
    name: "glute bridge",
    target: "glutes",
    secondaryMuscles: ["hamstrings", "lower back", "core"],
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.",
      "Place your arms at your sides, palms facing down.",
      "Push through your heels to lift your hips off the ground, squeezing your glutes at the top.",
      "Hold for a second at the top and then slowly lower your hips back down.",
      "Repeat for the desired number of repetitions.",
    ],
  },
];
