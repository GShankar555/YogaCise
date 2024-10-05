import Squat from "../assets/img/images/squat.gif";
import Curl from "../assets/img/images/curl.gif";
import SitUp from "../assets/img/images/situps.gif";
import lunges from "../assets/img/images/lunges.gif";
import crunches from "../assets/img/images/crunches.gif";
import sidebend from "../assets/img/images/sidebend.gif";
import pushup from "../assets/img/images/pushup.gif";
import pullups from "../assets/img/images/pullups.gif";
import single_arm_delt_fly from "../assets/img/images/single_arm_delt_fly.gif";
import glutes from "../assets/img/images/glutes.webp";
import benchpress from "../assets/img/images/bench_press.gif";
import legpress from "../assets/img/images/leg_press.gif";
import tricepdips from "../assets/img/images/tricep_dips.gif";
import overheadpress from "../assets/img/images/overhead_press.gif";
import plank from "../assets/img/images/plank.gif";
import wallsit from "../assets/img/images/wall-sit.gif";
import calfraise from "../assets/img/images/calf-raises.gif";
import highknees from "../assets/img/images/high-knees.gif";
import deadlift from "../assets/img/images/deadlifts.gif";

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
  {
    bodyPart: "lower back",
    equipment: "barbell",
    gifUrl: deadlift,
    id: "00011",
    name: "deadlift",
    target: "hamstrings",
    secondaryMuscles: ["glutes", "lower back", "forearms"],
    instructions: [
      "Stand with your feet hip-width apart, with the barbell positioned over the mid-foot.",
      "Bend at your hips and knees to grasp the bar with an overhand grip.",
      "Keep your back straight and chest up as you lift the bar by extending your hips and knees.",
      "Stand tall at the top, keeping the bar close to your body.",
      "Lower the bar back down by bending at your hips and knees.",
    ],
  },
  {
    bodyPart: "chest",
    equipment: "barbell",
    gifUrl: benchpress,
    id: "00012",
    name: "bench press",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    instructions: [
      "Lie flat on a bench with your feet planted on the floor.",
      "Grip the barbell slightly wider than shoulder-width apart.",
      "Lower the barbell to your chest while keeping your elbows at about a 45-degree angle.",
      "Push the barbell back up to the starting position, fully extending your arms.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "legs",
    equipment: "machine",
    gifUrl: legpress,
    id: "00013",
    name: "leg press",
    target: "quadriceps",
    secondaryMuscles: ["hamstrings", "glutes", "calves"],
    instructions: [
      "Sit on the leg press machine with your back against the pad.",
      "Place your feet shoulder-width apart on the platform.",
      "Lower the platform by bending your knees until your thighs are parallel to the floor.",
      "Push the platform back up to the starting position by extending your legs.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "triceps",
    equipment: "body weight",
    gifUrl: tricepdips,
    id: "00014",
    name: "tricep dips",
    target: "triceps",
    secondaryMuscles: ["chest", "shoulders"],
    instructions: [
      "Position your hands shoulder-width apart on a bench or dip bar.",
      "Extend your legs out in front of you, resting on your heels.",
      "Lower your body by bending your elbows until they are at a 90-degree angle.",
      "Push back up to the starting position, fully extending your arms.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "shoulders",
    equipment: "dumbbells",
    gifUrl: overheadpress,
    id: "00015",
    name: "overhead press",
    target: "deltoids",
    secondaryMuscles: ["triceps", "upper back"],
    instructions: [
      "Stand with your feet shoulder-width apart and a dumbbell in each hand at shoulder height.",
      "Press the dumbbells overhead until your arms are fully extended.",
      "Keep your core engaged and back straight throughout the movement.",
      "Lower the dumbbells back to shoulder height.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "core",
    equipment: "body weight",
    gifUrl: plank,
    id: "00016",
    name: "plank",
    target: "core",
    secondaryMuscles: ["shoulders", "glutes", "back"],
    instructions: [
      "Start in a push-up position with your body in a straight line from head to heels.",
      "Engage your core, keeping your hips level.",
      "Hold the position for as long as possible, ensuring you maintain good form.",
      "Avoid letting your hips sag or rise.",
      "Breathe steadily throughout the hold.",
    ],
  },
  {
    bodyPart: "legs",
    equipment: "body weight",
    gifUrl: wallsit,
    id: "00017",
    name: "wall sit",
    target: "quadriceps",
    secondaryMuscles: ["glutes", "calves"],
    instructions: [
      "Stand with your back against a wall, feet shoulder-width apart.",
      "Slide down the wall until your thighs are parallel to the floor, as if sitting in an invisible chair.",
      "Keep your back flat against the wall and hold the position.",
      "Hold for the desired duration, breathing steadily.",
      "To exit, push through your heels to rise back to standing.",
    ],
  },
  {
    bodyPart: "calves",
    equipment: "body weight",
    gifUrl: calfraise,
    id: "00018",
    name: "calf raise",
    target: "calves",
    secondaryMuscles: ["hamstrings", "quads"],
    instructions: [
      "Stand with your feet shoulder-width apart and your hands on your hips or a wall for balance.",
      "Raise your heels off the ground, standing on your toes.",
      "Squeeze your calves at the top of the movement.",
      "Lower your heels back down to the ground.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "legs",
    equipment: "body weight",
    gifUrl: highknees,
    id: "00019",
    name: "high knees",
    target: "quadriceps",
    secondaryMuscles: ["hamstrings", "calves"],
    instructions: [
      "Stand tall with your feet hip-width apart.",
      "Run in place, bringing your knees up to hip level with each step.",
      "Pump your arms in sync with your legs.",
      "Maintain a quick pace and keep your core engaged.",
      "Continue for the desired duration.",
    ],
  },
];
