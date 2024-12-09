import Image from "next/image"
import { ShoppingCart } from 'lucide-react'
import { Button } from "../../app/components/ui/button"

const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    image: "/FProduct1.png",
    tag: "New"
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    image: "/FProduct2.png",
    tag: "Sale"
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    image: "/FProduct3.png"
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    image: "/Fproduct4.png"
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 20,
    image: "/TCategories2.png",
    tag: "New"
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: 20,
    image: "/Product6.png",
    tag: "Sale"
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: 20,
    image: "/Product7.png"
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: 20,
    image: "/FProduct1.png"
  },
  {
    id: 9,
    name: "Library Stool Chair",
    price: 20,
    image: "/Product5.png",
    tag: "New"

  },
  {
    id: 10,
    name: "Library Stool Chair",
    price: 20,
    image: "/FProduct2.png",
    tag: "Sale"

  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: 20,
    image: "/FProduct3.png"
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: 20,
    image: "/TCategories3.png"
  }
  
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="relative aspect-square bg-[#F7F7F7] rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.tag && (
              <span className={`absolute top-4 left-4 px-3 py-1 text-xs text-white rounded ${
                product.tag === "New" ? "bg-[#00BAB5]" : "bg-[#FF8A8A]"
              }`}>
                {product.tag}
              </span>
            )}
            <Button
              className="absolute bottom-4 right-4 bg-white text-black hover:bg-[#00BAB5] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
              size="icon"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-[#272343]">{product.name}</h3>
              <p className="text-[#00BAB5]">${product.price}</p>
            </div>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

