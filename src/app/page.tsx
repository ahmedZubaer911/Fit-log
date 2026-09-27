import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";


export default function Home() {
  return (
    <>
      <Hero />

      <section id="library" className="min-h-screen bg-black">
        <WorkoutLibrary />
      </section>
    </>
  );
}