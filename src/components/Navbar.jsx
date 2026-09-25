import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black px-6 py-5">
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
          <a
            href="/my-plan"
            className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-bold text-black"
          >
            PLAN 0
          </a>

          <a
            href="/my-plan"
            className="rounded-full border border-zinc-600 px-3 py-1 text-xs font-bold text-white"
          >
            SAVED 0
          </a>
        </div>

      </div>
    </nav>
  );
}