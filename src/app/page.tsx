export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Your Fitness Journey
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Train smarter with FitLog
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover workouts, build your daily plan, and keep track of your
            fitness progress.
          </p>

          <button className="mt-8 rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800">
            Explore Workouts
          </button>
        </div>
      </section>
    </main>
  );
}