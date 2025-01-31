// "use client"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[#272343] font-medium mb-2">
          Your name
        </label>
        <Input
          id="name"
          placeholder="Abc"
          className="w-full border-gray-200 rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[#272343] font-medium mb-2">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Abc@def.com"
          className="w-full border-gray-200 rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-[#272343] font-medium mb-2">
          Subject
        </label>
        <Input
          id="subject"
          placeholder="This is an optional"
          className="w-full border-gray-200 rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[#272343] font-medium mb-2">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Hi! I'd like to ask about"
          className="w-full border-gray-200 rounded-lg min-h-[150px]"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#00BAB5] hover:bg-[#009B97] text-white py-6"
      >
        Submit
      </Button>
    </form>
  )
}

