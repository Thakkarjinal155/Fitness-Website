"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LogOut, TrendingUp, Users } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const quickLinks = [
    { title: "Workout Plans", href: "/workouts", icon: "💪" },
    { title: "Diet Plans", href: "/diet", icon: "🥗" },
    { title: "Trainers", href: "/trainers", icon: "👨‍🏫" },
    { title: "BMI Calculator", href: "/bmi-calculator", icon: "📏" },
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {user.name}! 💪</h1>
              <p className="text-gray-400">Keep pushing towards your fitness goals</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-red-600/30">
              <p className="text-gray-400 mb-2">Goal</p>
              <p className="text-2xl font-bold text-red-600 capitalize">{user.fitnessGoal?.replace("-", " ")}</p>
              <p className="text-gray-500 text-sm mt-2">Your selected fitness target</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-blue-600/30">
              <p className="text-gray-400 mb-2">Workouts Completed</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-gray-500 text-sm mt-2">This month</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-green-600/30">
              <p className="text-gray-400 mb-2">Calories Burned</p>
              <p className="text-2xl font-bold text-green-600">2,450</p>
              <p className="text-gray-500 text-sm mt-2">This week</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-red-600/50 transition text-center group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition">{link.icon}</div>
                  <h3 className="text-white font-semibold">{link.title}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity & Tips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Workouts */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp size={24} className="text-red-600" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {["Push-ups Challenge", "Cardio Session", "Strength Training", "Yoga Session"].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4 pb-4 border-b border-gray-800">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <p className="text-gray-300">{activity}</p>
                    <p className="text-gray-500 text-sm ml-auto">{idx + 1} day ago</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitness Tips */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users size={24} className="text-red-600" />
                Fitness Tips
              </h3>
              <div className="space-y-4">
                <div className="bg-red-600/10 border border-red-600/30 rounded p-4">
                  <p className="text-yellow-500 font-semibold mb-2">💡 Hydration</p>
                  <p className="text-gray-300 text-sm">
                    Drink at least 8 glasses of water daily to stay hydrated and boost performance.
                  </p>
                </div>
                <div className="bg-blue-600/10 border border-blue-600/30 rounded p-4">
                  <p className="text-blue-500 font-semibold mb-2">💡 Recovery</p>
                  <p className="text-gray-300 text-sm">
                    Get 7-9 hours of quality sleep for better recovery and muscle growth.
                  </p>
                </div>
                <div className="bg-green-600/10 border border-green-600/30 rounded p-4">
                  <p className="text-green-500 font-semibold mb-2">💡 Consistency</p>
                  <p className="text-gray-300 text-sm">
                    Regular training 3-4 times per week yields better results than sporadic intense sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
