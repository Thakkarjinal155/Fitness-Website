"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">FitZone</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/workouts" className="text-gray-300 hover:text-red-600 transition">
              Workouts
            </Link>
            <Link href="/diet" className="text-gray-300 hover:text-red-600 transition">
              Diet Plans
            </Link>
            <Link href="/trainers" className="text-gray-300 hover:text-red-600 transition">
              Trainers
            </Link>
            <Link href="/bmi-calculator" className="text-gray-300 hover:text-red-600 transition">
              BMI Calc
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-red-600 transition">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-white hover:text-red-600 transition">
              Login
            </Link>
            <Link href="/register" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4">
            <div className="flex flex-col gap-4">
              <Link href="/workouts" className="text-gray-300 hover:text-red-600 px-4 py-2">
                Workouts
              </Link>
              <Link href="/diet" className="text-gray-300 hover:text-red-600 px-4 py-2">
                Diet Plans
              </Link>
              <Link href="/trainers" className="text-gray-300 hover:text-red-600 px-4 py-2">
                Trainers
              </Link>
              <Link href="/bmi-calculator" className="text-gray-300 hover:text-red-600 px-4 py-2">
                BMI Calc
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-red-600 px-4 py-2">
                Contact
              </Link>
              <Link href="/login" className="text-gray-300 hover:text-red-600 px-4 py-2">
                Login
              </Link>
              <Link href="/register" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mx-4">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
