"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown, Zap } from "lucide-react"

const workoutPlans = {
  beginner: {
    title: "Beginner",
    description: "Perfect for newcomers to fitness",
    color: "blue",
    exercises: [
      { name: "Push-ups", reps: "3 x 10", calories: 7, tip: "Start with wall push-ups if too difficult" },
      { name: "Squats", reps: "3 x 15", calories: 10, tip: "Keep your back straight and chest up" },
      { name: "Walking Lunges", reps: "3 x 12", calories: 8, tip: "Take controlled steps" },
      { name: "Plank", reps: "3 x 20s", calories: 5, tip: "Engage your core throughout" },
      { name: "Jumping Jacks", reps: "3 x 20", calories: 6, tip: "Good cardio warm-up" },
    ],
  },
  intermediate: {
    title: "Intermediate",
    description: "For those with some fitness experience",
    color: "yellow",
    exercises: [
      { name: "Burpees", reps: "3 x 12", calories: 15, tip: "Focus on form over speed" },
      { name: "Diamond Push-ups", reps: "3 x 15", calories: 10, tip: "Harder variation targeting triceps" },
      { name: "Bulgarian Split Squats", reps: "3 x 12", calories: 12, tip: "Use a chair or bench" },
      { name: "Mountain Climbers", reps: "3 x 30s", calories: 11, tip: "Keep your core tight" },
      { name: "Tricep Dips", reps: "3 x 12", calories: 8, tip: "Use a bench or chair" },
    ],
  },
  advanced: {
    title: "Advanced",
    description: "For experienced fitness enthusiasts",
    color: "red",
    exercises: [
      { name: "Pistol Squats", reps: "3 x 8", calories: 18, tip: "Master bodyweight squats first" },
      { name: "Handstand Push-ups", reps: "3 x 8", calories: 16, tip: "Practice against a wall" },
      { name: "Muscle-ups", reps: "3 x 5", calories: 20, tip: "Advanced pull-up variation" },
      { name: "Archer Push-ups", reps: "3 x 10", calories: 12, tip: "Shifts weight side to side" },
      { name: "Human Flag", reps: "3 x 15s", calories: 14, tip: "Extreme core and shoulder strength" },
    ],
  },
}

export default function WorkoutsPage() {
  const [expanded, setExpanded] = useState("beginner")

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Workout Plans</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose a workout plan that matches your fitness level and start your transformation today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(workoutPlans).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setExpanded(expanded === key ? "" : key)}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  expanded === key
                    ? "border-red-600 bg-red-600/5"
                    : "border-gray-800 bg-gray-900/50 hover:border-red-600/50"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {plan.title}
                  <ChevronDown className={`transition ${expanded === key ? "rotate-180" : ""}`} size={20} />
                </h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <p className="text-red-600 font-semibold">{plan.exercises.length} Exercises</p>
              </button>
            ))}
          </div>

          {/* Expanded Workout Details */}
          {expanded && (
            <div className="bg-gray-900 rounded-lg border border-red-600/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                {workoutPlans[expanded as keyof typeof workoutPlans].title} Workout Plan
              </h2>

              <div className="space-y-6">
                {workoutPlans[expanded as keyof typeof workoutPlans].exercises.map((exercise, idx) => (
                  <div
                    key={idx}
                    className="bg-black rounded-lg p-6 border border-gray-800 hover:border-red-600/30 transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {idx + 1}. {exercise.name}
                        </h4>
                        <p className="text-red-600 font-semibold flex items-center gap-2">
                          <Zap size={16} /> {exercise.calories} cal/set
                        </p>
                      </div>
                      <span className="bg-red-600/20 text-red-600 px-4 py-2 rounded font-semibold">
                        {exercise.reps}
                      </span>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded">
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold text-yellow-500">💡 Tip:</span> {exercise.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-red-600/10 border border-red-600/30 rounded-lg p-6">
                <p className="text-white">
                  <span className="font-bold text-red-600">Total Calories:</span>{" "}
                  {workoutPlans[expanded as keyof typeof workoutPlans].exercises.reduce(
                    (sum, ex) => sum + ex.calories,
                    0,
                  )}{" "}
                  cal per complete workout
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
