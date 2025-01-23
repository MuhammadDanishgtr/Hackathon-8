// "use client"

// import type React from "react"
// import { createContext, useContext, useState, useEffect } from "react"
// import { toast } from "sonner"
// import type { CartItem, CartContextType } from "@/types/cart"

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([])

//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem("cart")
//       if (savedCart) {
//         setCart(JSON.parse(savedCart))
//       }
//     } catch (error) {
//       console.error("Error loading cart:", error)
//     }
//   }, [])

//   useEffect(() => {
//     try {
//       localStorage.setItem("cart", JSON.stringify(cart))
//     } catch (error) {
//       console.error("Error saving cart:", error)
//     }
//   }, [cart])

//   const addToCart = (product: any) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item._id === product._id)
//       if (existingItem) {
//         toast.success("Updated quantity in cart")
//         return prevCart.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item))
//       }
//       toast.success("Added to cart")
//       return [
//         ...prevCart,
//         {
//           _id: product._id,
//           name: product.name,
//           price: product.price,
//           image: product.image,
//           categoryName: product.categoryName,
//           quantity: 1,
//         },
//       ]
//     })
//   }

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== id))
//     toast.success("Removed from cart")
//   }

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) {
//       removeFromCart(id)
//       return
//     }
//     setCart((prevCart) => prevCart.map((item) => (item._id === id ? { ...item, quantity } : item)))
//   }

//   const clearCart = () => {
//     setCart([])
//     localStorage.removeItem("cart")
//     toast.success("Cart cleared")
//   }

//   const getCartTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0)
//   }

//   const getCartCount = () => {
//     return cart.reduce((count, item) => count + item.quantity, 0)
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         getCartTotal,
//         getCartCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export function useCart() {
//   const context = useContext(CartContext)
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }

"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "sonner"

export interface CartItem {
  _id: string
  name: string
  price: number
  quantity: number
  image: any
  category: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: any) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error("Error loading cart:", error)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart))
    } catch (error) {
      console.error("Error saving cart:", error)
    }
  }, [cart])

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id)
      if (existingItem) {
        toast.success("Updated quantity in cart")
        return prevCart.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      toast.success("Added to cart")
      return [
        ...prevCart,
        {
          _id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: 1,
        },
      ]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id))
    toast.success("Removed from cart")
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }
    setCart((prevCart) => prevCart.map((item) => (item._id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
    toast.success("Cart cleared")
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

