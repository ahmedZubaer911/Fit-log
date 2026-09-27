"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/FitLogContext";
import { useState } from "react";

export default function MyPlanPage() {
  const { todayPlan, savedWorkouts, removeFromPlan, removeFromSaved } =
    useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [planSortBy, setPlanSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const [savedSortBy, setSavedSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const sortBy = activeTab === "plan" ? planSortBy : savedSortBy;

  const workouts = [...(activeTab === "plan" ? todayPlan : savedWorkouts)].sort(
    (a, b) => {
      if (sortBy === "duration") return a.duration - b.duration;
      if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
      return b.rating - a.rating;
    },
  );

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  function handleDone(id: number) {
    removeFromPlan(id);
    toast.success("Workout completed");
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
    <main className="min-h-screen bg-black px-4 py-8 sm:py-12">
      {" "}
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="mt-2 text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl">
            {" "}
            MY PLAN
          </h1>
          <p className="mt-4 text-[#9CA3AF]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:mb-10 sm:p-6">
          <div className="grid grid-cols-3">
            <div className="text-center">
              <p className="text-sm text-[#9CA3AF]">EXERCISES</p>
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {" "}
                {workouts.length}
              </p>
            </div>

            <div className="border-x border-zinc-800 text-center">
              <p className="text-sm text-[#9CA3AF]">MINUTES</p>
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {" "}
                {totalMinutes}
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#9CA3AF]">CALORIES</p>
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {" "}
                {totalCalories}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex gap-3">
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
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#9CA3AF]">
              Sort By:
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => {
                  const value = e.target.value as
                    | "duration"
                    | "calories"
                    | "rating";

                  if (activeTab === "plan") {
                    setPlanSortBy(value);
                  } else {
                    setSavedSortBy(value);
                  }
                }}
                className="appearance-none rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-4 pr-10 text-sm font-semibold text-white outline-none focus:border-[#C2F800]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                ▾
              </span>
            </div>
          </div>
        </div>

        {/* Workout list */}
        {workouts.length === 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-16 text-center">
            <h2 className="text-2xl font-bold uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-3 text-sm text-[#9CA3AF] sm:text-base">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:opacity-90"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          workouts.map((workout) => {
            return (
              <div
                key={workout.id}
                className="flex min-h-45 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 sm:flex-row"
              >
                {/* Image */}
                <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-48">
                  {" "}
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Workout information */}
                <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-6">
                  {" "}
                  <h2 className="text-xl font-bold uppercase text-white">
                    {workout.name}
                  </h2>
                  <p className="mt-1 text-sm text-[#9CA3AF]">
                    {workout.equipment}
                  </p>
                  {/* Stats — one horizontal row */}
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#9CA3AF]">
                    {" "}
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

                {/* Actions — one horizontal row */}
                <div className="flex shrink-0 flex-wrap items-center gap-3 px-5 pb-5 max-sm:w-full max-sm:justify-start sm:max-md:w-40 sm:max-md:justify-center sm:max-md:content-center sm:px-4 sm:pb-5">
                  {" "}
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-center text-sm font-semibold text-white hover:border-[#C2F800] hover:text-[#C2F800]"
                  >
                    View Details
                  </Link>
                  {activeTab === "plan" && (
                    <button
                      onClick={() => handleDone(workout.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black"
                    >
                      <Check size={16} />
                      Mark as Done
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
          })
        )}
      </div>
    </main>
  );
}
