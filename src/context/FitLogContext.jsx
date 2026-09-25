"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }

    setLoaded(true);
  }, []);

  // Save plan to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, loaded]);

  // Save saved workouts to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, loaded]);

  // Add workout to plan
  const addToPlan = (workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return;
    }

    if (plan.length >= 5) {
      return;
    }

    setPlan((prev) => [...prev, workout]);
  };

  // Remove workout from plan
  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  // Save workout
  const saveWorkout = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return;
    }

    setSaved((prev) => [...prev, workout]);
  };

  // Remove saved workout
  const removeSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        loaded,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}