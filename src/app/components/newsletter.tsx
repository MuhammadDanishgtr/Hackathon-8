import { Input } from "../../app/components/ui/input"
import { Button } from "../../app/components/ui/button";


export default function Newsletter() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Or Subscribe To The Newsletter</h2>
      <div className="max-w-md mx-auto flex gap-4">
        <Input
          type="email"
          placeholder="Email Address..."
          className="flex-1"
        />
        <Button className="bg-[#272343] hover:bg-[#1a1b2e] text-white">
          SUBMIT
        </Button>
      </div>
    </section>
  )
}

