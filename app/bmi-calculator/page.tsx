"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AlertCircle } from "lucide-react"

export default function BMICalculatorPage() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [heightUnit, setHeightUnit] = useState("cm")
  const [weightUnit, setWeightUnit] = useState("kg")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState("")

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter both height and weight")
      return
    }

    let heightInMeters = Number.parseFloat(height)
    let weightInKg = Number.parseFloat(weight)

    // Convert to metric if needed
    if (heightUnit === "ft") {
      heightInMeters = heightInMeters * 0.3048
    } else if (heightUnit === "in") {
      heightInMeters = heightInMeters * 0.0254
    } else if (heightUnit === "cm") {
      heightInMeters = heightInMeters / 100
    }

    if (weightUnit === "lbs") {
      weightInKg = weightInKg * 0.453592
    }

    const calculatedBmi = weightInKg / (heightInMeters * heightInMeters)
    setBmi(calculatedBmi)

    // Determine category
    if (calculatedBmi < 18.5) {
      setCategory("Underweight")
    } else if (calculatedBmi < 25) {
      setCategory("Normal Weight")
    } else if (calculatedBmi < 30) {
      setCategory("Overweight")
    } else {
      setCategory("Obese")
    }
  }

  const categoryColors: { [key: string]: string } = {
    Underweight: "text-blue-500 bg-blue-500/10",
    "Normal Weight": "text-green-500 bg-green-500/10",
    Overweight: "text-yellow-500 bg-yellow-500/10",
    Obese: "text-red-600 bg-red-600/10",
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">BMI Calculator</h1>
            <p className="text-gray-400">Calculate your Body Mass Index to understand your health metrics.</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="space-y-6">
              {/* Height Input */}
              <div>
                <label className="block text-white font-semibold mb-3">Height</label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Enter height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="flex-grow bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  />
                  <select
                    value={heightUnit}
                    onChange={(e) => setHeightUnit(e.target.value)}
                    className="bg-black border border-gray-700 rounded px-4 py-3 text-white focus:border-red-600 focus:outline-none transition"
                  >
                    <option>cm</option>
                    <option>m</option>
                    <option>ft</option>
                    <option>in</option>
                  </select>
                </div>
              </div>

              {/* Weight Input */}
              <div>
                <label className="block text-white font-semibold mb-3">Weight</label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="flex-grow bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-red-600 focus:outline-none transition"
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                    className="bg-black border border-gray-700 rounded px-4 py-3 text-white focus:border-red-600 focus:outline-none transition"
                  >
                    <option>kg</option>
                    <option>lbs</option>
                  </select>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateBMI}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
              >
                Calculate BMI
              </button>

              {/* Results */}
              {bmi !== null && (
                <div className="bg-black rounded-lg p-6 border border-red-600/30">
                  <div className="text-center mb-4">
                    <p className="text-gray-400 text-sm mb-2">Your BMI is</p>
                    <p className="text-5xl font-bold text-red-600 mb-2">{bmi.toFixed(1)}</p>
                    <p className={`text-lg font-bold px-4 py-2 rounded inline-block ${categoryColors[category] || ""}`}>
                      {category}
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                      <div className="text-gray-300 text-sm">
                        <p className="font-semibold mb-2">BMI Categories:</p>
                        <ul className="space-y-1">
                          <li>
                            • <span className="text-blue-500">Underweight</span>: Below 18.5
                          </li>
                          <li>
                            • <span className="text-green-500">Normal</span>: 18.5 - 24.9
                          </li>
                          <li>
                            • <span className="text-yellow-500">Overweight</span>: 25 - 29.9
                          </li>
                          <li>
                            • <span className="text-red-600">Obese</span>: 30 and above
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      💡 Tip: BMI is a screening tool. Consult a healthcare professional for personalized advice.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
