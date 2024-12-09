import { Button } from "../components/ui/button"

export default function CartSummary() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-[#272343] mb-6">Summary</h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-[#272343]">$198.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Delivery & Handling</span>
          <span className="font-medium text-green-600">Free</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span className="font-medium text-[#272343]">Total</span>
            <span className="font-medium text-[#272343]">$198.00</span>
          </div>
        </div>
      </div>
      <Button 
        className="w-full bg-[#00BAB5] hover:bg-[#009B97] text-white"
        size="lg"
      >
        Member Checkout
      </Button>
    </div>
  )
}

