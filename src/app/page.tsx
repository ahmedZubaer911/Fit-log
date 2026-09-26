import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />

      {/* Library will go here */}
      <section id="library" className="min-h-screen bg-black">
        <WorkoutLibrary />
      </section>
    </main>
  );
}