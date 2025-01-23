// "use client"

// import Image from "next/image"
// import { urlFor } from "../../sanity/lib/image"
// import { useCart } from "../context/CartContext"
// import { ShoppingCart } from "lucide-react"

// export default function ProductCard({ product }: { product: any }) {
//   const { addToCart } = useCart()

//   const handleAddToCart = () => {
//     addToCart(product)
//   }

//   return (
//     <div className="group">
//       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//         <Image
//           src={urlFor(product.image).url() || "/placeholder.svg"}
//           alt={product.name}
//           width={300}
//           height={400}
//           className="h-full w-full object-cover object-center group-hover:opacity-75"
//         />
//       </div>
//       <div className="mt-4 flex justify-between">
//         <div>
//           <h3 className="text-sm text-gray-700">{product.name}</h3>
//           <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
//         </div>
//         <p className="text-sm font-medium text-gray-900">${product.price}</p>
//       </div>
//       <button
//         onClick={handleAddToCart}
//         className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
//       >
//         <ShoppingCart className="h-5 w-5" />
//         Add to Cart
//       </button>
//     </div>
//   )
// }
"use client"

import Image from "next/image"
import { urlFor } from "../../sanity/lib/image"
import { useCart } from "../context/CartContext"

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={urlFor(product.image).url() || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={400}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-[#272343]">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-[#272343]">${product.price}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-[#00BAB5] text-white py-2 px-4 rounded-lg hover:bg-[#009591] transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}





