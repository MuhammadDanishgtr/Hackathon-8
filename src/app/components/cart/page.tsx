import CartItems from "../../components/cart-items"
import CartSummary from "../../components/cart-summary"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-[#272343] mb-6">Bag</h1>
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}

