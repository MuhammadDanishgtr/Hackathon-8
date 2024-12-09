"use client"

import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'
import { Button } from "../components/ui/button"

const cartItems = [
  {
    id: 1,
    name: "Library Stool Chair",
    color: "Ashen Slate/Cobalt Bliss",
    size: "L",
    quantity: 1,
    price: 99,
    image: "/FProduct3.png"
  },
  {
    id: 2,
    name: "Library Stool Chair",
    color: "Ashen Slate/Cobalt Bliss",
    size: "L",
    quantity: 1,
    price: 99,
    image: "/Product5.png"
  }
]

export default function CartItems() {
  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <div 
          key={item.id}
          className="flex gap-6 p-4 bg-white rounded-lg border border-gray-100"
        >
          <div className="relative w-24 h-24 bg-[#F7F7F7] rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium text-[#272343]">{item.name}</h3>
              <p className="text-[#272343]">MRP: ${item.price}</p>
            </div>
            <p className="text-gray-500 text-sm mb-2">{item.color}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span>Size</span>
                <span className="font-medium text-[#272343]">{item.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Quantity</span>
                <span className="font-medium text-[#272343]">{item.quantity}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

