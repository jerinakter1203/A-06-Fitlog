"use client";

import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "../../context/FitLogContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    done,
    removeFromPlan,
    removeSaved,
    markDone,
    loaded,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");

  if (!loaded) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-zinc-700 border-t-[#CCFF00] rounded-full animate-spin mx-auto"></div>

          <p className="text-zinc-400 mt-4">
            Loading your plan...
          </p>
        </div>
      </main>
    );
  }

  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned || 0),
    0
  );

  const workouts =
    activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:px-10 lg:px-16">

      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-400 hover:text-[#CCFF00] transition"
        >
          ← BACK TO WORKOUTS
        </Link>

        {/* Header */}
        <div className="mb-10">

          <p className="text-[#CCFF00] font-bold tracking-widest text-sm mb-3">
            YOUR WORKOUTS
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
            MY PLAN
          </h1>

          <p className="text-zinc-400 mt-4 max-w-2xl">
            Build your workout plan, save exercises for later,
            and keep track of your training.
          </p>

        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

          {/* Workouts */}
          <div className="border border-zinc-800 bg-zinc-900 p-6">

            <p className="text-zinc-500 text-sm uppercase font-bold">
              Workouts
            </p>

            <p className="text-4xl font-black mt-2 text-[#CCFF00]">
              {plan.length}
            </p>

          </div>

          {/* Minutes */}
          <div className="border border-zinc-800 bg-zinc-900 p-6">

            <p className="text-zinc-500 text-sm uppercase font-bold">
              Total Minutes
            </p>

            <p className="text-4xl font-black mt-2 text-[#CCFF00]">
              {totalMinutes}
            </p>

          </div>

          {/* Calories */}
          <div className="border border-zinc-800 bg-zinc-900 p-6">

            <p className="text-zinc-500 text-sm uppercase font-bold">
              Calories
            </p>

            <p className="text-4xl font-black mt-2 text-[#CCFF00]">
              {totalCalories}
            </p>

          </div>

        </div>

        {/* Tabs */}
        <div className="flex gap-3 border-b border-zinc-800 mb-8">

          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-3 font-bold uppercase text-sm transition ${
              activeTab === "plan"
                ? "bg-[#CCFF00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Today's Plan ({plan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-3 font-bold uppercase text-sm transition ${
              activeTab === "saved"
                ? "bg-[#CCFF00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>

        </div>

        {/* Empty State */}
        {workouts.length === 0 && (
          <div className="border border-zinc-800 bg-zinc-900 py-20 px-6 text-center">

            <h2 className="text-2xl md:text-3xl font-bold uppercase">
              {activeTab === "plan"
                ? "Your plan is empty"
                : "No saved workouts"}
            </h2>

            <p className="text-zinc-400 mt-3">
              {activeTab === "plan"
                ? "Choose workouts from the library and add them to your plan."
                : "Save workouts from the library to find them here later."}
            </p>

            <Link
              href="/"
              className="inline-block mt-6 bg-[#CCFF00] text-black px-6 py-3 font-bold uppercase hover:bg-white transition"
            >
              Browse Workouts
            </Link>

          </div>
        )}

        {/* Workout Cards */}
        {workouts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {workouts.map((workout) => {

              const isDone = done.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`bg-zinc-900 border overflow-hidden transition ${
                    isDone
                      ? "border-[#CCFF00]"
                      : "border-zinc-800"
                  }`}
                >

                  {/* Image */}
                  <div className="h-56 overflow-hidden relative">

                    <img
                      src={workout.image}
                      alt={workout.name}
                      className={`w-full h-full object-cover ${
                        isDone ? "opacity-60" : ""
                      }`}
                    />

                    {isDone && (
                      <div className="absolute top-4 right-4 bg-[#CCFF00] text-black px-3 py-1 text-xs font-black uppercase">
                        ✓ DONE
                      </div>
                    )}

                  </div>

                  {/* Content */}
                  <div className="p-5">

                    {/* Tags */}
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

                    {/* Name */}
                    <h2
                      className={`text-xl font-bold uppercase ${
                        isDone
                          ? "text-zinc-500 line-through"
                          : "text-white"
                      }`}
                    >
                      {workout.name}
                    </h2>

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

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 mt-6">

                      {/* Mark Done */}
                      {activeTab === "plan" && (
                        <button
                          onClick={() => markDone(workout.id)}
                          disabled={isDone}
                          className={`w-full px-4 py-3 text-sm font-bold uppercase transition ${
                            isDone
                              ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                              : "bg-[#CCFF00] text-black hover:bg-white"
                          }`}
                        >
                          {isDone
                            ? "✓ Workout Completed"
                            : "Mark as Done"}
                        </button>
                      )}

                      {/* View + Remove */}
                      <div className="flex gap-3">

                        <Link
                          href={`/workout/${workout.id}`}
                          className="flex-1 text-center border border-zinc-600 px-4 py-3 text-sm font-bold uppercase hover:border-[#CCFF00] hover:text-[#CCFF00] transition"
                        >
                          View
                        </Link>

                        <button
                          onClick={() =>
                            activeTab === "plan"
                              ? removeFromPlan(workout.id)
                              : removeSaved(workout.id)
                          }
                          className="flex-1 border border-red-500/50 text-red-400 px-4 py-3 text-sm font-bold uppercase hover:bg-red-500 hover:text-white transition"
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        )}

      </div>
    </main>
  );
}