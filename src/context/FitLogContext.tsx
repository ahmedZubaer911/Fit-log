"use client";

import { createContext, useContext, useState } from "react";
import { Workout } from "@/types/workoutType";

interface FitLogContextType {
  todayPlan: Workout[];
  savedWorkouts: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>(() => {
    if (typeof window === "undefined") return [];

    const saved = localStorage.getItem("fitlog-today-plan");
    return saved ? JSON.parse(saved) : [];
  });

  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>(() => {
    if (typeof window === "undefined") return [];

    const saved = localStorage.getItem("fitlog-saved-workouts");
    return saved ? JSON.parse(saved) : [];
  });

  function addToPlan(workout: Workout) {
    setTodayPlan((current) => {
      if (current.some((item) => item.id === workout.id)) return current;

      const updated = [...current, workout];
      localStorage.setItem("fitlog-today-plan", JSON.stringify(updated));

      return updated;
    });
  }

  function removeFromPlan(id: number) {
    setTodayPlan((current) => {
      const updated = current.filter((workout) => workout.id !== id);
      localStorage.setItem("fitlog-today-plan", JSON.stringify(updated));

      return updated;
    });
  }

  function saveWorkout(workout: Workout) {
    setSavedWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) return current;

      const updated = [...current, workout];
      localStorage.setItem("fitlog-saved-workouts", JSON.stringify(updated));

      return updated;
    });
  }

  function removeFromSaved(id: number) {
    setSavedWorkouts((current) => {
      const updated = current.filter((workout) => workout.id !== id);
      localStorage.setItem("fitlog-saved-workouts", JSON.stringify(updated));

      return updated;
    });
  }

  return (
    <FitLogContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}
