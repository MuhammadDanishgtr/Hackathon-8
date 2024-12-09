import { Clock, PenToolIcon as Tool, PiggyBank, Recycle } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: Tool,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon: PiggyBank,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: Recycle,
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable"
  }
]

export default function BrandFeatures() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-[#272343] mb-16">
        What Makes Our Brand Different
      </h2>
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-[#F7F7F7] rounded-lg mb-4">
                <Icon className="w-6 h-6 text-[#007C7C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#272343] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

