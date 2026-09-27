"use client";

import toast from "react-hot-toast";

import { useFitLog } from "@/context/FitLogContext";
import { Workout } from "@/types/workoutType";
import { Bookmark } from "lucide-react";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const { todayPlan, savedWorkouts, addToPlan, saveWorkout } = useFitLog();
  const isAdded = todayPlan.some((item) => item.id === workout.id);
  const isSaved = savedWorkouts.some((item) => item.id === workout.id);

  function handleAddToPlan() {
    if (isAdded) return;

    addToPlan(workout);
    toast.success("Added to today's plan");
  }

  function handleSave() {
    if (isSaved) return;

    saveWorkout(workout);
    toast.success("Saved for later");
  }

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        onClick={handleAddToPlan}
        disabled={isAdded}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold ${
          isAdded
            ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
            : "bg-[#C2F800] text-black hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to today's plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        disabled={isSaved}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold ${
          isSaved
            ? "cursor-not-allowed border border-zinc-700 bg-zinc-700 text-zinc-400"
            : "border border-[#9CA3AF] text-[#9CA3AF] hover:border-white hover:text-white"
        }`}
      >
        <Bookmark size={18} />
        Save for later
      </button>
    </div>
  );
}
