export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">

        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-[#CCFF00]"></div>

        <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[#CCFF00]">
          Loading FitLog...
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          Preparing your workouts
        </p>

      </div>
    </main>
  );
}