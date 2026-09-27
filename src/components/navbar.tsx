"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { todayPlan, savedWorkouts } = useFitLog();

  return (
    <header className="sticky top-0 z-50 bg-black px-4 py-4">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-2xl px-3 py-3 sm:gap-4 sm:px-6">
        {" "}
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={120}
            height={40}
            className="h-8 w-auto sm:h-9"
          />
          <p className="text-[24px] text-white sm:text-[32px]">FITLOG</p>
        </Link>
        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-medium text-[#9CA3AF] hover:text-white"
          >
            My Plan
          </Link>
        </div>
        {/* Status badges */}
        <div className="hidden items-center gap-2 sm:flex sm:gap-4">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-[#9CA3AF]"
          >
            <span>Plan</span>
            <span className="rounded-full bg-[#C2F800] px-3 py-1 font-semibold text-black">
              {todayPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-[#9CA3AF]"
          >
            <span>Saved</span>
            <span className="rounded-full border border-[#9CA3AF] px-3 py-1 font-semibold text-[#9CA3AF]">
              {savedWorkouts.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
