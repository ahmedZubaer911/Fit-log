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
  completedWorkouts: number[];
  markAsDone: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  function addToPlan(workout: Workout) {
    setTodayPlan((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  }

  function removeFromPlan(id: number) {
    setTodayPlan((current) => current.filter((workout) => workout.id !== id));
  }

  function saveWorkout(workout: Workout) {
    setSavedWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  }

  function removeFromSaved(id: number) {
    setSavedWorkouts((current) =>
      current.filter((workout) => workout.id !== id),
    );
  }
  function markAsDone(id: number) {
    setCompletedWorkouts((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [...current, id];
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
        completedWorkouts,
        markAsDone,
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
