import { Workout } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";


interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-[#C2F800]"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        {/* Muscle groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold uppercase text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-sm text-[#9CA3AF]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4 text-sm text-[#9CA3AF]">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span className="flex justify-center">★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}