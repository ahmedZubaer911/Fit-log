"use client";

import { Bookmark, Plus } from "lucide-react";
import toast from "react-hot-toast";

import { useFitLog } from "@/context/FitLogContext";
import { Workout } from "@/types/workoutType";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const { addToPlan, saveWorkout } = useFitLog();

  function handleAddToPlan() {
    addToPlan(workout);
    toast.success("Added to today's plan");
  }

  function handleSave() {
    saveWorkout(workout);
    toast.success("Saved for later");
  }

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        onClick={handleAddToPlan}
        className="inline-flex items-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black hover:opacity-90"
      >
        <Plus size={18} />
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSave}
        className="inline-flex items-center gap-2 rounded-full border border-[#9CA3AF] px-6 py-3 font-semibold text-[#9CA3AF] hover:border-white hover:text-white"
      >
        <Bookmark size={18} />
        Save for later
      </button>
    </div>
  );
}
