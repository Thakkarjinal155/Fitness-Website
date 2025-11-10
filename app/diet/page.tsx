"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";


const dietData = {
  daily: [
    { time: "Breakfast", calories: 400, protein: 30 },
    { time: "Snack", calories: 150, protein: 10 },
    { time: "Lunch", calories: 600, protein: 50 },
    { time: "Snack", calories: 150, protein: 10 },
    { time: "Dinner", calories: 500, protein: 45 },
  ],
  macros: [
    { name: "Protein", value: 30, color: "#ef4444" },
    { name: "Carbs", value: 45, color: "#3b82f6" },
    { name: "Fat", value: 25, color: "#f59e0b" },
  ],
}

export default function DietPage() {
  const totalCalories = dietData.daily.reduce((sum, meal) => sum + meal.calories, 0)
  const totalProtein = dietData.daily.reduce((sum, meal) => sum + meal.protein, 0)

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Diet Plans</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nutrition is key to achieving your fitness goals. Track your meals and macros.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-red-600/30">
              <p className="text-gray-400 mb-2">Total Daily Calories</p>
              <p className="text-4xl font-bold text-red-600">{totalCalories}</p>
              <p className="text-gray-500 text-sm mt-2">kcal/day recommended</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-blue-600/30">
              <p className="text-gray-400 mb-2">Total Protein</p>
              <p className="text-4xl font-bold text-blue-600">{totalProtein}g</p>
              <p className="text-gray-500 text-sm mt-2">per day</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-yellow-600/30">
              <p className="text-gray-400 mb-2">Meals Per Day</p>
              <p className="text-4xl font-bold text-yellow-600">{dietData.daily.length}</p>
              <p className="text-gray-500 text-sm mt-2">balanced meals</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Daily Meal Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dietData.daily}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #ef4444" }} />
                  <Legend />
                  <Bar dataKey="calories" fill="#ef4444" />
                  <Bar dataKey="protein" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Macro Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dietData.macros}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dietData.macros.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #ef4444" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Diet Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Muscle Gain", focus: "High Protein", cals: 3000, protein: 180 },
              { name: "Fat Loss", focus: "Calorie Deficit", cals: 2000, protein: 120 },
              { name: "Maintenance", focus: "Balanced Diet", cals: 2500, protein: 150 },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-red-600/50 transition"
              >
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-red-600 mb-4">{plan.focus}</p>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="font-semibold">Calories:</span> {plan.cals} kcal/day
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Protein:</span> {plan.protein}g/day
                  </p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition mt-4">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
