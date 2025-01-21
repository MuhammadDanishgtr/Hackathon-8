// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useCart } from '../contexts/CartContext'
// import { Product } from '../../lib/sanity'

// export default function ProductCard({ product }: { product: Product }) {
//   const { addToCart } = useCart()

//   const handleAddToCart = () => {
//     addToCart({
//       id: product._id,
//       name: product.name,
//       price: product.price,
//       quantity: 1,
//     })
//   }

//   return (
//     <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
//       <Link href={`/product/${product.slug.current}`}>
//         <Image
//           src={product.image || "/placeholder.svg"}
//           alt={product.name}
//           width={200}
//           height={200}
//           className="w-full h-48 object-cover mb-4"
//         />
//         <h3 className="text-lg font-semibold">{product.name}</h3>
//         <p className="text-gray-600">${product.price}</p>
//         <p className="text-sm text-gray-500">



// M 70 l                                Stock' : 'Out of Stock'}
//         </p>
//       </Link>
//       <button
//         onClick={handleAddToCart}
//         className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//       >
//         Add to Cart
//       </button>
//     </div>
//   )
// }

