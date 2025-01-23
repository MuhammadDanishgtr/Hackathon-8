"use client"

import { useCart } from "../../contexts/CartContext"
import Image from "next/image"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="flex items-center border-b py-4">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} width={100} height={100} className="mr-4" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Total: ${getCartTotal().toFixed(2)}</h2>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


