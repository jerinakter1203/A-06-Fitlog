import Link from "next/link";
import WorkoutActions from "../../../components/WorkoutActions";

async function getWorkout(id) {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts = await res.json();

  return workouts.find((workout) => workout.id === Number(id));
}

export default async function WorkoutDetails({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#CCFF00]">
            WORKOUT NOT FOUND
          </h1>

          <Link
            href="/"
            className="inline-block mt-6 bg-[#CCFF00] text-black px-6 py-3 font-bold"
          >
            BACK TO LIBRARY
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-400 hover:text-[#CCFF00]"
        >
          ← BACK TO LIBRARY
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT - IMAGE */}
          <div>
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-[#CCFF00] font-bold tracking-widest text-sm mb-4">
              WORKOUT DETAILS
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
              {workout.name}
            </h1>

            <p className="text-zinc-400 mt-5 leading-7">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#CCFF00] text-black px-3 py-1 text-xs font-bold uppercase"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-8 border border-zinc-800">

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <p className="p-4 text-zinc-500">EQUIPMENT</p>
                <p className="p-4 font-bold">
                  {workout.equipment}
                </p>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <p className="p-4 text-zinc-500">DIFFICULTY</p>
                <p className="p-4 font-bold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <p className="p-4 text-zinc-500">SETS</p>
                <p className="p-4 font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <p className="p-4 text-zinc-500">REPS</p>
                <p className="p-4 font-bold">
                  {workout.reps}
                </p>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <p className="p-4 text-zinc-500">DURATION</p>
                <p className="p-4 font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="grid grid-cols-2 border-b border-zinc-800">
                <p className="p-4 text-zinc-500">CALORIES</p>
                <p className="p-4 font-bold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="grid grid-cols-2">
                <p className="p-4 text-zinc-500">RATING</p>
                <p className="p-4 font-bold">
                  ★ {workout.rating}
                </p>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold uppercase">
                INSTRUCTIONS
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4"
                  >
                    <span className="text-[#CCFF00] font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-zinc-400">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>

            </div>

            {/* Functional Buttons */}
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
}