export default function Hero() {
  return (
    <section className="bg-black text-white px-6 py-16 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-[#CCFF00] font-bold tracking-widest text-sm mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="text-zinc-400 text-base md:text-lg max-w-xl mt-6 leading-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          {/* CTA Button */}
          <a
            href="#library"
            className="inline-flex items-center gap-3 mt-8 bg-[#CCFF00] text-black font-bold px-6 py-3 uppercase tracking-wide hover:bg-white transition"
          >
            BROWSE WORKOUTS
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/banner.png"
            alt="FitLog workout banner"
            className="w-full max-w-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}