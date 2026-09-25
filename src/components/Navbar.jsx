"use client";

import { useState } from "react";
import Link from "next/link";
import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black px-6 py-5">
      <div className="mx-auto max-w-7xl">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="FitLog logo"
              className="h-10 w-10 object-contain"
            />

            <span className="text-xl font-black tracking-tight text-white">
              FITLOG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="rounded-full bg-[#172500] px-4 py-2 text-sm font-bold uppercase text-[#CCFF00]"
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full px-4 py-2 text-sm font-bold uppercase text-zinc-400 transition hover:text-white"
            >
              My Plan
            </Link>

          </div>

          {/* Desktop Counters */}
          <div className="hidden items-center gap-5 md:flex">

            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-medium text-zinc-300"
            >
              <span>Plan</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#CCFF00] px-1 text-xs font-bold text-black">
                {plan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-medium text-zinc-400"
            >
              <span>Saved</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-600 px-1 text-xs font-bold text-white">
                {saved.length}
              </span>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-3xl">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-5 border-t border-zinc-800 pt-5 md:hidden">

            <div className="flex flex-col gap-4">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full bg-[#172500] px-4 py-2 text-sm font-bold uppercase text-[#CCFF00]"
              >
                Workout
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="w-fit px-4 py-2 text-sm font-bold uppercase text-zinc-400 hover:text-white"
              >
                My Plan
              </Link>

              <div className="flex gap-4 px-4 pt-2">

                <Link
                  href="/my-plan"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <span>Plan</span>

                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#CCFF00] px-1 text-xs font-bold text-black">
                    {plan.length}
                  </span>
                </Link>

                <Link
                  href="/my-plan"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-sm text-zinc-400"
                >
                  <span>Saved</span>

                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-600 px-1 text-xs font-bold text-white">
                    {saved.length}
                  </span>
                </Link>

              </div>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}