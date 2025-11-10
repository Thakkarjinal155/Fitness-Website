export function FeaturesSection() {
  const features = [
    {
      title: "Personalized Workouts",
      description: "Choose from beginner, intermediate, or advanced workout plans tailored to your goals",
      icon: "🎯",
    },
    {
      title: "Expert Trainers",
      description: "Learn from certified fitness professionals with years of experience",
      icon: "👨‍🏫",
    },
    {
      title: "Nutrition Tracking",
      description: "Custom diet plans and calorie tracking to support your fitness journey",
      icon: "📊",
    },
    {
      title: "BMI Calculator",
      description: "Monitor your body metrics and track progress over time",
      icon: "📏",
    },
    {
      title: "Progress Tracking",
      description: "Save your workouts and monitor improvements in real-time",
      icon: "📈",
    },
    {
      title: "Mobile Friendly",
      description: "Access your fitness plans anytime, anywhere on any device",
      icon: "📱",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
          Why Choose <span className="text-red-600">FitZone</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-red-600/50 transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
