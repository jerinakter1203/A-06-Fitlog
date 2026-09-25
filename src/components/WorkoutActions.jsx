"use client";

import { useState } from "react";
import { useFitLog } from "../context/FitLogContext";

export default function WorkoutActions({ workout }) {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useFitLog();

  const [message, setMessage] = useState("");

  const isInPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleAddToPlan = () => {
    if (isInPlan) {
      showMessage("Already in today's plan!");
      return;
    }

    if (plan.length >= 5) {
      showMessage("You can add maximum 5 workouts!");
      return;
    }

    addToPlan(workout);
    showMessage("Added to today's plan!");
  };

  const handleSave = () => {
    if (isSaved) {
      showMessage("Already saved!");
      return;
    }

    saveWorkout(workout);
    showMessage("Workout saved!");
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button
          onClick={handleAddToPlan}
          className={`px-6 py-4 font-bold uppercase transition ${
            isInPlan
              ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
              : "bg-[#CCFF00] text-black hover:bg-white"
          }`}
        >
          {isInPlan ? "✓ Added to Plan" : "+ Add to Today's Plan"}
        </button>

        <button
          onClick={handleSave}
          className={`px-6 py-4 font-bold uppercase transition border ${
            isSaved
              ? "border-[#CCFF00] text-[#CCFF00]"
              : "border-zinc-600 hover:border-[#CCFF00] hover:text-[#CCFF00]"
          }`}
        >
          {isSaved ? "♥ Saved" : "♡ Save for Later"}
        </button>
      </div>

      {message && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#CCFF00] text-black px-5 py-3 font-bold shadow-lg">
          {message}
        </div>
      )}
    </>
  );
}