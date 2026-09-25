"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Library() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch workouts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="library"
      className="bg-black text-white px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-[#CCFF00] font-bold tracking-widest text-sm mb-3">
            WORKOUTS
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
            THE LIBRARY
          </h2>

          <p className="text-zinc-400 mt-3">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#CCFF00] rounded-full animate-spin"></div>

            <p className="text-zinc-400 mt-4">
              Loading workouts...
            </p>
          </div>
        )}

        {/* Workout Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {workouts.map((workout) => (
              <Link
                key={workout.id}
                href={`/workout/${workout.id}`}
                className="block bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-[#CCFF00] transition"
              >

                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">

                  {/* Muscle Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {workout.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="text-xs font-bold bg-[#CCFF00] text-black px-2 py-1 uppercase"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  {/* Workout Name */}
                  <h3 className="text-xl font-bold uppercase">
                    {workout.name}
                  </h3>

                  {/* Equipment */}
                  <p className="text-zinc-400 text-sm mt-2">
                    {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mt-5 text-sm text-zinc-300">
                    <span>
                      ⏱ {workout.duration} min
                    </span>

                    <span>
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      ★ {workout.rating}
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}