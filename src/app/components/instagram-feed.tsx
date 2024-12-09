import Image from "next/image"

const instagramImages = [
  { src: "/TCategories2.png", alt: "Wooden chairs" },
  { src: "/TCategories1.png", alt: "Gray chair" },
  { src: "/Product2.png", alt: "Pink chair" },
  { src: "/Product1.png", alt: "White chair" },
  { src: "/Product3.png", alt: "Orange chair" },
  { src: "/TCategories3.png", alt: "Office chair" },
]

export default function InstagramFeed() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {instagramImages.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

