import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black px-4 pb-10 pt-6 sm:pb-16 sm:pt-8">
      {" "}
      <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-2xl bg-zinc-900 px-5 py-8 sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-2 md:px-10 lg:px-16">
        {" "}
        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className=" max-w-2xl text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-block rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:opacity-90"
          >
            BROWSE WORKOUTS
          </Link>
        </div>
        {/* Banner Image */}
        <div className="overflow-hidden rounded-xl md:translate-x-8 lg:translate-x-16">
          <Image
            src="/banner.png"
            alt="Workout"
            width={450}
            height={450}
            className=" object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
