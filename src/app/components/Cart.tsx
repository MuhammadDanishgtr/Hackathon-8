'use client'

import { useCart } from '../contexts/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart } = useCart()

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</div>
          <button className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Checkout
          </button>
        </>
      )}
    </div>
  )
}

