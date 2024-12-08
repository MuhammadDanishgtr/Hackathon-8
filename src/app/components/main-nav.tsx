import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from 'lucide-react'

export default function MainNav() {
  return (
    <>
    <nav className="bg-white py-5 px-[300px] flex justify-between items-center">
      <div>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logomain.png" alt="Comforty" width={32} height={32} />
        <span className="text-2xl font-semibold text-[#272343]">Comforty</span>
      </Link>
      </div>
      <div>
      <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-[#272343] " />
          <span className="absolute -top-2 -right-2 bg-[#00BAB5] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </Link>
        </div>
    </nav>
    <div className="flex justify-between items-center">
      <div className="flex gap-8">
        <Link href="/" className="text-[#272343] hover:text-[#00BAB5]">Home</Link>
        <Link href="/shop" className="text-[#272343] hover:text-[#00BAB5]">Shop</Link>
        <Link href="/products" className="text-[#272343] hover:text-[#00BAB5]">Products</Link>
        <Link href="/pages" className="text-[#272343] hover:text-[#00BAB5]">Pages</Link>
        <Link href="/about" className="text-[#272343] hover:text-[#00BAB5]">About</Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-[#272343]">0800 555 5555</div>
        
      </div>
      </div>
      </>
  )
}

