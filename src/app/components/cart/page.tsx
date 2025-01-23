// "use client"

// import { useCart } from "../../context/CartContext"
// import Image from "next/image"
// import { urlFor } from "../../../sanity/lib/image"
// import Link from "next/link"
// import { Minus, Plus, Trash2 } from "lucide-react"

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

//   if (cart.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
//         <p className="mb-8">Looks like you haven't added anything to your cart yet.</p>
//         <Link
//           href="/products"
//           className="inline-block bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
//       <div className="grid lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-4">
//           {cart.map((item) => (
//             <div key={item._id} className="flex gap-4 border p-4 rounded-lg">
//               <div className="relative h-24 w-24 flex-shrink-0">
//                 <Image
//                   src={urlFor(item.image).url() || "/placeholder.svg"}
//                   alt={item.name}
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h3 className="font-medium">{item.name}</h3>
//                 <p className="text-sm text-gray-500">{item.categoryName}</p>
//                 <p className="font-medium mt-1">${item.price}</p>
//                 <div className="flex items-center gap-4 mt-2">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                       className="p-1 rounded-md hover:bg-gray-100"
//                     >
//                       <Minus className="h-4 w-4" />
//                     </button>
//                     <span className="w-8 text-center">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                       className="p-1 rounded-md hover:bg-gray-100"
//                     >
//                       <Plus className="h-4 w-4" />
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="p-1 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md"
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-50 p-6 rounded-lg h-fit">
//           <h2 className="text-lg font-medium mb-4">Order Summary</h2>
//           <div className="space-y-2 mb-4">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>${getCartTotal().toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>
//             <div className="border-t pt-2 mt-2">
//               <div className="flex justify-between font-medium">
//                 <span>Total</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//           <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useCart } from "../../context/CartContext"
// import Image from "next/image"
// import { urlFor } from "../../../sanity/lib/image"
// import Link from "next/link"
// import { Minus, Plus, Trash2 } from "lucide-react"

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

//   if (cart.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold text-[#272343] mb-4">Your cart is empty</h1>
//         <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
//         <Link
//           href="/components/products"
//           className="inline-block bg-[#00BAB5] text-white py-2 px-6 rounded-lg hover:bg-[#009591] transition-colors"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-2xl font-bold text-[#272343] mb-8">Shopping Cart</h1>
//       <div className="grid lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-4">
//           {cart.map((item) => (
//             <div key={item._id} className="flex gap-4 border p-4 rounded-lg">
//               <div className="relative h-24 w-24 flex-shrink-0">
//                 <Image
//                   src={urlFor(item.image).url() || "/placeholder.svg"}
//                   alt={item.name}
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h3 className="font-medium text-[#272343]">{item.name}</h3>
//                 <p className="text-sm text-gray-500">{item.category}</p>
//                 <p className="font-medium mt-1 text-[#272343]">${item.price}</p>
//                 <div className="flex items-center gap-4 mt-2">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                       className="p-1 rounded-md hover:bg-gray-100 text-[#272343]"
//                     >
//                       <Minus className="h-4 w-4" />
//                     </button>
//                     <span className="w-8 text-center text-[#272343]">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                       className="p-1 rounded-md hover:bg-gray-100 text-[#272343]"
//                     >
//                       <Plus className="h-4 w-4" />
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="p-1 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md"
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-50 p-6 rounded-lg h-fit">
//           <h2 className="text-lg font-medium text-[#272343] mb-4">Order Summary</h2>
//           <div className="space-y-2 mb-4">
//             <div className="flex justify-between text-[#272343]">
//               <span>Subtotal</span>
//               <span>${getCartTotal().toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between text-[#272343]">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>
//             <div className="border-t pt-2 mt-2">
//               <div className="flex justify-between font-medium text-[#272343]">
//                 <span>Total</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//           <button className="w-full bg-[#00BAB5] text-white py-2 px-4 rounded-lg hover:bg-[#009591] transition-colors">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useCart } from "../../context/CartContext"
// import Image from "next/image"
// import { urlFor } from "../../../sanity/lib/image"
// import Link from "next/link"
// import { useEffect, useState } from "react"

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()
//   const [mounted, setMounted] = useState(false)

//   // Handle hydration mismatch
//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null // Prevent hydration mismatch
//   }

//   if (cart.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
//         <p className="mb-8">Looks like you haven't added anything to your cart yet.</p>
//         <Link href="/products">
//           <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Continue Shopping</button>
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2 space-y-4">
//           {cart.map((item) => (
//             <div key={item._id} className="flex gap-4 border p-4 rounded-lg">
//               <div className="relative h-24 w-24 flex-shrink-0">
//                 <Image
//                   src={urlFor(item.image).url() || "/placeholder.svg"}
//                   alt={item.name}
//                   fill
//                   className="object-cover rounded-md"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h3 className="font-medium">{item.name}</h3>
//                 <p className="text-sm text-gray-500">{item.categoryName}</p>
//                 <p className="font-medium mt-1">${item.price}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <button
//                     className="px-2 py-1 border rounded"
//                     onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                   >
//                     -
//                   </button>
//                   <span className="w-8 text-center">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 border rounded"
//                     onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                   >
//                     +
//                   </button>
//                   <button className="ml-4 text-red-500 hover:text-red-600" onClick={() => removeFromCart(item._id)}>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-50 p-6 rounded-lg h-fit">
//           <h2 className="text-lg font-medium mb-4">Order Summary</h2>
//           <div className="space-y-2 mb-4">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>${getCartTotal().toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>
//             <div className="border-t pt-2 mt-2">
//               <div className="flex justify-between font-medium">
//                 <span>Total</span>
//                 <span>${getCartTotal().toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//           <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex gap-4 border p-4 rounded-lg">
              {item.image && (
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={item.image ? urlFor(item.image).url() : "/placeholder.svg"}
                    alt={item.name || "Product image"}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-grow">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.categoryName}</p>
                <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 text-red-500 hover:text-red-600"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getCartTotal()?.toFixed(2) || "0.00"}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${getCartTotal()?.toFixed(2) || "0.00"}</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
