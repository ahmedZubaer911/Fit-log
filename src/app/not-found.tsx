import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="text-center">

        <h1 className="mt-4 text-6xl font-bold text-white">404</h1>

        <p className="mt-4 text-[#9CA3AF]">
          The workout you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black hover:opacity-90"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
}