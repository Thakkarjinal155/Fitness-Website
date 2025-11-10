import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-white font-bold text-lg">FitZone</span>
            </div>
            <p className="text-gray-400 text-sm">Your complete fitness companion for a healthier lifestyle.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/workouts" className="hover:text-red-600 transition">
                  Workouts
                </Link>
              </li>
              <li>
                <Link href="/diet" className="hover:text-red-600 transition">
                  Diet Plans
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-red-600 transition">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/bmi-calculator" className="hover:text-red-600 transition">
                  BMI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-red-600 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-600 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-600 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 FitZone Gym. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-red-600 transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-red-600 transition">
                Terms
              </Link>
              <Link href="#" className="hover:text-red-600 transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
