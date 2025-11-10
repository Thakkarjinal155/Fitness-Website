"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-400">Have questions? We'd love to hear from you. Reach out anytime!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-600/50 transition">
                <div className="flex items-start gap-4">
                  <Mail className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-400">support@fitzone.com</p>
                    <p className="text-gray-400">info@fitzone.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-600/50 transition">
                <div className="flex items-start gap-4">
                  <Phone className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+91 12345-67890</p>
                    <p className="text-gray-400">Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-600/50 transition">
                <div className="flex items-start gap-4">
                  <MapPin className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-gray-400">123 Fitness Street</p>
                    <p className="text-gray-400">Gym City, GC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={4}
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-500/10 border border-green-500 text-green-500 p-4 rounded text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
