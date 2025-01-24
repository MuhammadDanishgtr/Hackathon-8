'use client';

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logomain.png" alt="Comforty" width={32} height={32} />
            <span className="text-xl sm:text-2xl font-semibold text-[#272343]">Comforty</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              <Link href="/" className="text-[#272343] hover:text-[#00BAB5]">Home</Link>
              <Link href="/components/products/contact" className="text-[#272343] hover:text-[#00BAB5]">Shop</Link>
              <Link href="/components/products" className="text-[#272343] hover:text-[#00BAB5]">Products</Link>
              <Link href="/" className="text-[#272343] hover:text-[#00BAB5]">Pages</Link>
              <Link href="/components/about" className="text-[#272343] hover:text-[#00BAB5]">About</Link>
            </div>
            <div className="text-[#272343]">0800 555 5555</div>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-[#272343]" />
              <span className="absolute -top-2 -right-2 bg-[#00BAB5] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                
              </span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-[#272343]" />
              <span className="absolute -top-2 -right-2 bg-[#00BAB5] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#272343]">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-[#272343] hover:text-[#00BAB5]">Home</Link>
            <Link href="/components/products/contact" className="block px-3 py-2 text-[#272343] hover:text-[#00BAB5]">Shop</Link>
            <Link href="/components/products" className="block px-3 py-2 text-[#272343] hover:text-[#00BAB5]">Products</Link>
            <Link href="/" className="block px-3 py-2 text-[#272343] hover:text-[#00BAB5]">Pages</Link>
            <Link href="/components/about" className="block px-3 py-2 text-[#272343] hover:text-[#00BAB5]">About</Link>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="text-[#272343]">0800 555 5555</div>
          </div>
        </div>
      )}
    </nav>
  )
}

// "use client"

// import Link from "next/link"
// import { ShoppingCart } from "lucide-react"
// import { useCart } from "../context/CartContext"
// import { useEffect, useState } from "react"
// import { urlFor } from "@/src/sanity/lib/image"

// export default function Navbar() {
//   const { getCartCount } = useCart()
//   const [cartCount, setCartCount] = useState(0)
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//     setCartCount(getCartCount())
//   }, [getCartCount])

//   return (
//     <header className="border-b">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="text-xl font-bold">
//               Dine Market
//             </Link>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <Link href="/" className="text-gray-600 hover:text-gray-900">
//               Home
//             </Link>
//             <Link href="/products" className="text-gray-600 hover:text-gray-900">
//               Products
//             </Link>
//             <Link href="/about" className="text-gray-600 hover:text-gray-900">
//               About
//             </Link>
//             <Link href="/contact" className="text-gray-600 hover:text-gray-900">
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center">
//             <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
//               <ShoppingCart className="h-6 w-6" />
//               {isClient && cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#00BAB5] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }



