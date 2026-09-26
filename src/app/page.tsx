import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkoutLibrary from "@/components/WorkoutLibrary";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      {/* Library will go here */}
      <section id="library" className="min-h-screen bg-black">
        <WorkoutLibrary />
      </section>
    </main>
  );
}