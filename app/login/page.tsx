"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email && password.length >= 6) {
        // Store user data in localStorage (for demo purposes)
        localStorage.setItem("user", JSON.stringify({ email }))
        router.push("/dashboard")
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
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
            <h1 className="text-3xl font-bold text-white mb-2 text-center">Welcome Back</h1>
            <p className="text-gray-400 text-center mb-8">Login to your FitZone account</p>

            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded text-sm">{error}</div>
              )}

              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-gray-300">
                  <input type="checkbox" className="rounded border-gray-700" />
                  Remember me
                </label>
                <Link href="#" className="text-red-600 hover:text-red-700">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-3 rounded transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-center text-gray-400 mt-8">
              Don't have an account?{" "}
              <Link href="/register" className="text-red-600 hover:text-red-700 font-semibold">
                Sign up here
              </Link>
            </p>

            <div className="border-t border-gray-800 mt-8 pt-8">
              <p className="text-gray-500 text-center text-sm">Demo credentials:</p>
              <p className="text-gray-400 text-center text-sm">Email: demo@fitzone.com</p>
              <p className="text-gray-400 text-center text-sm">Password: password123</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
