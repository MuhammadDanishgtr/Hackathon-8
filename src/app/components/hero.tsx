import Image from "next/image"
import { Button } from "../../app/components/ui/button";


export default function Hero() {
  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <p className="text-[#00BAB5] uppercase tracking-wider">Welcome to comfy</p>
            <h1 className="text-5xl font-bold leading-tight">
              Best Furniture Collection For Your Interior.
            </h1>
            <Button className="bg-[#00BAB5] hover:bg-[#00A29D] text-white px-8">
              Shop Now
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/Productimage.png.png"
              alt="Featured Chair"
              width={434}
              height={584}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

