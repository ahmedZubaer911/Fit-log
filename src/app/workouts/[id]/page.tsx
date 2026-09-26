import Image from "next/image";
import { getWorkout } from "@/lib/api";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-black px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-125 overflow-hidden rounded-2xl md:min-h-162.5">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="mt-5 text-4xl font-bold uppercase text-white md:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-4 text-[#9CA3AF]">{workout.description}</p>
            <div className="flex flex-wrap gap-2 pt-5">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800">
              <div className="divide-y divide-zinc-800">
                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    EQUIPMENT
                  </span>
                  <span className="text-sm text-white">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    DIFFICULTY
                  </span>
                  <span className="text-sm text-white">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    SETS
                  </span>
                  <span className="text-sm text-white">{workout.sets}</span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    REPS
                  </span>
                  <span className="text-sm text-white">{workout.reps}</span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    DURATION
                  </span>
                  <span className="text-sm text-white">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    CALORIES
                  </span>
                  <span className="text-sm text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    RATING
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold">INSTRUCTIONS</h2>

              <ol className="mt-5 space-y-5">
                {workout.instructions.map((instruction, index) => (
                  <li key={instruction} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#9CA3AF]">
                      {index + 1}.
                    </span>

                    <p className="pt-1 text-sm leading-6 text-[#b5bbc5]">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black hover:opacity-90">
                ＋ Add to today&apos;s plan
              </button>

              <button className="rounded-full border border-[#9CA3AF] px-6 py-3 font-semibold text-[#9CA3AF] hover:border-white hover:text-white">
                ♡ Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
