import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Your Fitness Journey <span className="text-red-600">Starts Here</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            FitZone is your complete fitness companion. Get personalized workout plans, nutrition guidance, and expert
            trainer support to transform your body and mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Get Started Free
            </Link>
            <Link
              href="/workouts"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-3 rounded-lg font-semibold transition"
            >
              Explore Workouts
            </Link>
          </div>
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg h-48 flex items-center justify-center border border-red-600/20 hover:border-red-600/50 transition">
            <div className="text-center">
              <div className="text-4xl mb-2">💪</div>
              <p className="text-gray-300">Strength Training</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg h-48 flex items-center justify-center border border-red-600/20 hover:border-red-600/50 transition">
            <div className="text-center">
              <div className="text-4xl mb-2">🏃</div>
              <p className="text-gray-300">Cardio Programs</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg h-48 flex items-center justify-center border border-red-600/20 hover:border-red-600/50 transition">
            <div className="text-center">
              <div className="text-4xl mb-2">🥗</div>
              <p className="text-gray-300">Nutrition Plans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
