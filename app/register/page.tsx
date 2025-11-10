"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    fitnessGoal: "muscle-gain",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        setLoading(false)
        return
      }

      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters")
        setLoading(false)
        return
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store user data in localStorage (for demo purposes)
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          fitnessGoal: formData.fitnessGoal,
        }),
      )

      router.push("/dashboard")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">Join FitZone</h1>
            <p className="text-gray-400 text-center mb-8">Start your fitness journey today</p>

            <form onSubmit={handleRegister} className="space-y-5">
              {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded text-sm">{error}</div>
              )}

              <div>
                <label className="block text-white font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Fitness Goal</label>
                <select
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:border-red-600 focus:outline-none transition"
                >
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="fat-loss">Fat Loss</option>
                  <option value="strength">Strength Building</option>
                  <option value="endurance">Endurance</option>
                  <option value="flexibility">Flexibility</option>
                </select>
              </div>

              <label className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer">
                <input type="checkbox" className="rounded border-gray-700" required />I agree to the Terms of Service
                and Privacy Policy
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-3 rounded transition"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <p className="text-center text-gray-400 mt-8">
              Already have an account?{" "}
              <Link href="/login" className="text-red-600 hover:text-red-700 font-semibold">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
