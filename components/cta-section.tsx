import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-600/10 to-red-600/5 border-y border-red-600/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Body?</h2>
        <p className="text-gray-300 mb-8">
          Join thousands of members who have achieved their fitness goals with FitZone.
        </p>
        <Link
          href="/register"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
        >
          Start Your Free Trial Today
        </Link>
      </div>
    </section>
  )
}
