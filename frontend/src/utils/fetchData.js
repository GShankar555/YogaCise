import Squat from '../assets/img/images/squat.gif';
import Curl from '../assets/img/images/curl.gif';
import SitUp from '../assets/img/images/situps.gif';

export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a134c4486fmshaf1c22c1e5252dbp12837djsn00b1f42358e8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a134c4486fmshaf1c22c1e5252dbp12837djsn00b1f42358e8',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

export const bodyPartNames = ['all', 'upper legs','waist','upper arms']

export const exercisesData = [
    {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": Squat,
    "id": "0002",
    "name": "squat",
    "target": "quads",
    "secondaryMuscles": [
        "hamstrings",
        "calves",
        "waist",
        "lower back"
    ],
    "instructions": [
        "Stand with your feet shoulder-width apart.",
        "Lower your body by bending your knees and pushing your hips back, as if sitting in a chair.",
        "Keep your chest up and knees behind your toes.",
        "Lower yourself until your thighs are parallel to the floor.",
        "Push through your heels to return to the starting position.",
        "Repeat for the desired number of repetitions."
    ]
    },
    {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": SitUp,
    "id": "0003",
    "name": "sit-up",
    "target": "abs",
    "secondaryMuscles": [
        "hip flexors",
        "lower back"
    ],
    "instructions": [
        "Lie flat on your back with your knees bent and feet flat on the ground.",
        "Place your hands behind your head with your elbows pointing outwards.",
        "Engage your abs to lift your upper body off the ground.",
        "Reach a seated position, then slowly lower your upper body back down.",
        "Repeat for the desired number of repetitions."
    ]
},
    {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": Curl,
    "id": "0004",
    "name": "bicep curl",
    "target": "biceps",
    "secondaryMuscles": [
        "lower arms"
    ],
    "instructions": [
        "Stand upright with a dumbbell in each hand, arms fully extended.",
        "Keep your elbows close to your torso.",
        "Curl the weights while contracting your biceps, lifting the dumbbells until they are at shoulder level.",
        "Pause for a second, then slowly lower the weights back to the starting position.",
        "Repeat for the desired number of repetitions."
    ]
},
]