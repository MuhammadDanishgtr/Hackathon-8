import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "The Poplar suede sofa",
    price: 99.00,
    image: "/PProduct1.png",
    gridClass: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    name: "The Dandy chair",
    price: 99.00,
    image: "/PProduct2.png"
  },
  {
    id: 3,
    name: "The Dandy chair",
    price: 99.00,
    image: "/PProduct3.png"
  }
]

export default function PopularProducts() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#272343] mb-12">
          Our Popular Products
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={`group relative ${product.gridClass || ""}`}
            >
              <div className="relative aspect-[4/3] bg-[#F7F7F7] rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-[#272343] mb-2">
                {product.name}
              </h3>
              <p className="text-[#007C7C] font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

