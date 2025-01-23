import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface CartItem {
  _id: string
  name: string
  price: number
  quantity: number
  image: SanityImageSource
  categoryName: string
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (product: any) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
}

