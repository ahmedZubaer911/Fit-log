import Hero from "@/components/hero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      {/* Library will go here */}
      <section id="library" className="min-h-screen bg-black">
        <h2 className="px-6 py-16 text-3xl font-bold text-white">
          Workout Library
        </h2>
      </section>
    </main>
  );
}