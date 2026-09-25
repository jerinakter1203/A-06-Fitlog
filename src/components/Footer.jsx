export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="FitLog logo"
                className="h-10 w-10 object-contain"
              />

              <span className="text-2xl font-black">
                FITLOG
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
              A dark, no-nonsense workout companion to plan your
              training, save workouts, and track your progress.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#CCFF00]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              <a href="/" className="hover:text-white transition">
                Workout Library
              </a>

              <a href="/my-plan" className="hover:text-white transition">
                My Plan
              </a>

              <a href="/my-plan" className="hover:text-white transition">
                Saved Workouts
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#CCFF00]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition">
                About
              </a>

              <a href="#" className="hover:text-white transition">
                Contact
              </a>

              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 FitLog. All rights reserved.
          </p>

          <p>
            TRAIN WITH INTENT. LOG EVERY SET.
          </p>
        </div>

      </div>
    </footer>
  );
}