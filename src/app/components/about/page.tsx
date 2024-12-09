import Image from "next/image"
import { Button } from "../../../app/components/ui/button"
import BrandFeatures from "../../../app/components/brand-features"
import PopularProducts from "../../../app/components/popular-products"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#007C7C] text-white p-16">
          <h1 className="text-4xl font-bold mb-6">About Us - Comforty</h1>
          <p className="text-lg mb-8 leading-relaxed">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-[#007C7C]"
          >
            View collection
          </Button>
        </div>
        <div className="relative min-h-[400px] bg-[#E5E7EB]">
          <Image
            src="/FProduct1.png"
            alt="Comforty Chair"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Brand Features */}
      <BrandFeatures />

      {/* Popular Products */}
      <PopularProducts />
    </main>
  )
}

