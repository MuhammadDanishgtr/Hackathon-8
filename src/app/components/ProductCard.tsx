"use client"

import Image from "next/image"
import { urlFor } from "../../sanity/lib/image"
import { useCart } from "../contexts/CartContext"

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: urlFor(product.image).url(),
    })
  }

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={urlFor(product.image).url() || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/products/${product.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}


