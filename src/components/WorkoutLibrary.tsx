
import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="bg-black px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 sm:mb-12">

          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-sm text-[#9CA3AF] sm:mt-4 sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
}
