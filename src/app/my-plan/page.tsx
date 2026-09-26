"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/FitLogContext";
import { useState } from "react";

export default function MyPlanPage() {
  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeFromSaved,
    completedWorkouts,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const workouts = activeTab === "plan" ? todayPlan : savedWorkouts;

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  function handleDone(id: number) {
    markAsDone(id);
    toast.success("Workout marked as done");
  }

  function handleRemove(id: number) {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }

    toast.success(
      activeTab === "plan" ? "Removed from today's plan" : "Removed from saved",
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="mt-2 text-4xl font-bold uppercase text-white md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-4 text-[#9CA3AF]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="grid grid-cols-3">
            <div className="text-center">
              <p className="text-sm text-[#9CA3AF]">EXERCISES</p>
              <p className="mt-2 text-3xl font-bold text-white">
                {todayPlan.length}
              </p>
            </div>

            <div className="border-x border-zinc-800 text-center">
              <p className="text-sm text-[#9CA3AF]">MINUTES</p>
              <p className="mt-2 text-3xl font-bold text-white">
                {totalMinutes}
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#9CA3AF]">CALORIES</p>
              <p className="mt-2 text-3xl font-bold text-white">
                {totalCalories}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-3">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              activeTab === "plan"
                ? "bg-[#C2F800] text-black"
                : "border border-zinc-700 text-[#9CA3AF]"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              activeTab === "saved"
                ? "bg-[#C2F800] text-black"
                : "border border-zinc-700 text-[#9CA3AF]"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Workout list */}
        {workouts.length === 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-20 text-center">
            <h2 className="text-2xl font-bold text-white">NOTHING HERE YET</h2>

            <p className="mx-auto mt-3 max-w-md text-[#9CA3AF]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-7 inline-block rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black hover:opacity-90"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {workouts.map((workout) => {
              const isDone = completedWorkouts.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`flex flex-col gap-5 rounded-2xl border bg-zinc-900 p-4 md:flex-row md:items-center ${
                    isDone
                      ? "border-[#C2F800]/40 opacity-70"
                      : "border-zinc-800"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl md:h-28 md:w-44">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Main info */}
                  <div className="min-w-0 flex-1">
                    <h2
                      className={`text-xl font-bold uppercase ${
                        isDone ? "text-[#9CA3AF] line-through" : "text-white"
                      }`}
                    >
                      {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-[#9CA3AF]">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-4 flex flex-wrap gap-5 text-sm text-[#9CA3AF]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={16} />
                        {workout.duration} min
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Flame size={16} />
                        {workout.caloriesBurned} kcal
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Star size={16} />
                        {workout.rating}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-white hover:border-[#C2F800] hover:text-[#C2F800]"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <button
                        onClick={() => handleDone(workout.id)}
                        disabled={isDone}
                        className="inline-flex items-center gap-2 rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black disabled:cursor-default disabled:opacity-60"
                      >
                        <Check size={16} />
                        {isDone ? "Done" : "Mark as Done"}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(workout.id)}
                      className="inline-flex items-center justify-center rounded-full border border-zinc-700 p-2 text-[#9CA3AF] hover:border-red-400 hover:text-red-400"
                      aria-label={`Remove ${workout.name}`}
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
