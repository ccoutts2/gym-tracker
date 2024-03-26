"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instruction: string;
}

export default function Home() {
  // const [exercise, setExercise] = useState<Exercise[] | null>(null);
  // const [muscle, setMuscle] = useState<string | null>("");

  // const baseURL = "https://api.api-ninjas.com/v1";
  // const muscles = [
  //   "abdominals",
  //   "abductors",
  //   "adductors",
  //   "biceps",
  //   "calves",
  //   "chest",
  //   "forearms",
  //   "glutes",
  //   "hamstrings",
  //   "lats",
  //   "lower_back",
  //   "middle_back",
  //   "neck",
  //   "quadriceps",
  //   "traps",
  //   "triceps",
  // ];

  // const fetchWorkouts = async () => {
  //   try {
  //     const response = await axios.get(`${baseURL}/exercises?muscle=${muscle}`, {
  //       headers: {
  //         "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
  //       },
  //     });
  //     setExercise(response.data);
  //   } catch {
  //     console.error("Error fetching workouts");
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   fetchWorkouts();
  // }, [muscle]);

  // const handleMuscle = (selectedMuscle: string) => {
  //   setMuscle(selectedMuscle);
  // };

  // if (!exercise) {
  //   return null;
  // }

  return (
    <main>
      {/* <div>
        <h1>Workouts</h1>
        <h2>Create Workout by Selecting Muscle Groups</h2>
        <div>
          {muscles.map((muscle) => (
            <button onClick={() => handleMuscle(muscle)}>{muscle}</button>
          ))}
        </div>
        <ul>
          {exercise.map((workout: Exercise) => (
            <li>{workout.name}</li>
          ))}
        </ul>
      </div> */}
    </main>
  );
}
