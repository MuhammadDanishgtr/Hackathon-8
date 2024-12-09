import { Trophy, ShieldCheck, Headphones } from 'lucide-react'

export default function FeatureBoxes() {
  return (
    <div className="grid md:grid-cols-3 gap-8 bg-gray-50 p-8 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Trophy className="w-12 h-12 text-[#272343]" />
        </div>
        <div>
          <h3 className="font-bold text-[#272343] mb-1">High Quality</h3>
          <p className="text-gray-600 text-sm">crafted from top materials</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <ShieldCheck className="w-12 h-12 text-[#272343]" />
        </div>
        <div>
          <h3 className="font-bold text-[#272343] mb-1">Warranty Protection</h3>
          <p className="text-gray-600 text-sm">Over 2 years</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Headphones className="w-12 h-12 text-[#272343]" />
        </div>
        <div>
          <h3 className="font-bold text-[#272343] mb-1">24 / 7 Support</h3>
          <p className="text-gray-600 text-sm">Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

