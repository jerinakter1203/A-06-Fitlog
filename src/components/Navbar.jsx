"use client";

import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="FitLog logo"
            className="h-10 w-10 object-contain"
          />

          <span className="text-2xl font-black tracking-tight text-white">
            FITLOG
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-bold uppercase text-[#CCFF00]"
          >
            Workout
          </a>

          <a
            href="/my-plan"
            className="text-sm font-bold uppercase text-zinc-400 transition hover:text-white"
          >
            My Plan
          </a>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">

          {/* Plan Counter */}
          <a
            href="/my-plan"
            className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-bold text-black"
          >
            PLAN {plan.length}
          </a>

          {/* Saved Counter */}
          <a
            href="/my-plan"
            className="rounded-full border border-zinc-600 px-3 py-1 text-xs font-bold text-white"
          >
            SAVED {saved.length}
          </a>

        </div>

      </div>
    </nav>
  );
}