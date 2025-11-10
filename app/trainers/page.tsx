import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

const trainers = [
  {
    name: "John Smith",
    specialty: "Strength Training",
    experience: "8+ years",
    rating: 4.9,
    reviews: 142,
    image: "👨‍🏫",
  },
  {
    name: "Sarah Johnson",
    specialty: "Cardio & HIIT",
    experience: "6+ years",
    rating: 4.8,
    reviews: 98,
    image: "👩‍🏫",
  },
  {
    name: "Mike Davis",
    specialty: "Bodybuilding",
    experience: "10+ years",
    rating: 4.9,
    reviews: 156,
    image: "👨‍🏫",
  },
  {
    name: "Emily Wilson",
    specialty: "Flexibility & Yoga",
    experience: "7+ years",
    rating: 4.7,
    reviews: 87,
    image: "👩‍🏫",
  },
  {
    name: "Alex Rodriguez",
    specialty: "CrossFit",
    experience: "5+ years",
    rating: 4.8,
    reviews: 112,
    image: "👨‍🏫",
  },
  {
    name: "Jessica Lee",
    specialty: "Weight Loss Programs",
    experience: "9+ years",
    rating: 4.9,
    reviews: 178,
    image: "👩‍🏫",
  },
]

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Expert Trainers</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get professional guidance from certified fitness trainers with years of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-red-600/50 transition"
              >
                <div className="text-6xl mb-4 text-center">{trainer.image}</div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{trainer.name}</h3>
                <p className="text-red-600 text-center font-semibold mb-4">{trainer.specialty}</p>

                <div className="bg-black rounded-lg p-4 mb-4 space-y-3">
                  <p className="text-gray-300 text-center">
                    <span className="font-semibold">Experience:</span> {trainer.experience}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(trainer.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-yellow-500 font-semibold">{trainer.rating}</span>
                    <span className="text-gray-400 text-sm">({trainer.reviews} reviews)</span>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
