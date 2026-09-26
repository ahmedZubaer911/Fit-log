import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <p className="text-[32px]">FITLOG</p>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/workouts"
            className="text-sm font-medium bg-zinc-800 h-10 w-28 flex justify-center items-center rounded-xl text-[#C2F800] hover:opacity-80"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-medium text-[#9CA3AF] hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-4">
          <Link href={"/my-plan"}>
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <span>Plan</span>
              <span className="rounded-full bg-[#C2F800] px-3 py-1 font-semibold text-black">
                0
              </span>
            </div>
          </Link>

          <Link href={"/my-plan"}>
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <span>Saved</span>
              <span className="rounded-full border border-[#9CA3AF] px-3 py-1 font-semibold text-[#9CA3AF]">
                0
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
