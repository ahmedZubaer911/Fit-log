"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#C2F800]">
          FITLOG
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white">
          SOMETHING WENT WRONG
        </h1>

        <p className="mt-4 text-[#9CA3AF]">
          We couldn&apos;t load the workouts right now.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black"
          >
            TRY AGAIN
          </button>

          <Link
            href="/"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-bold text-white"
          >
            HOME
          </Link>
        </div>
      </div>
    </main>
  );
}