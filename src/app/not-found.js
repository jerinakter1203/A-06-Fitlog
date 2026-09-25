import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">

        <p className="text-[#CCFF00] font-bold tracking-widest text-sm">
          FITLOG
        </p>

        <h1 className="mt-4 text-7xl md:text-9xl font-black">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold uppercase">
          WORKOUT NOT FOUND
        </h2>

        <p className="mt-4 max-w-md mx-auto text-zinc-400">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#CCFF00] text-black px-6 py-3 font-bold uppercase hover:bg-white transition"
        >
          Back to Workouts
        </Link>

      </div>
    </main>
  );
}