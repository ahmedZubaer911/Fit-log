import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-4 text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
}
