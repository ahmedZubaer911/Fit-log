
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workoutType";

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
      <div className="relative h-48 w-full overflow-hidden sm:h-52 lg:h-56">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[10px] font-bold uppercase text-black sm:px-3 sm:text-xs"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-base font-bold uppercase text-white sm:text-lg">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1.5 text-sm text-[#9CA3AF] sm:mt-2">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-zinc-800 pt-4 text-xs text-[#9CA3AF] sm:mt-5 sm:gap-x-5 sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={15} />
            {workout.duration} min
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Flame size={15} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Star size={15} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
