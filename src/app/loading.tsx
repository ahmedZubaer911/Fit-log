export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-[#C2F800]" />

        <p className="mt-4 text-sm text-[#9CA3AF]">
          Loading workouts…
        </p>
      </div>
    </main>
  );
}