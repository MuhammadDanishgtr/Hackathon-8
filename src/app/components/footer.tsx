import Image from "next/image"
import Link from "next/link"
import { Input } from "../../app/components/ui/input"
import { Button } from "../../app/components/ui/button";


export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/logomain.png" alt="Comforty" width={32} height={32} />
              <span className="text-2xl font-semibold">Comforty</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="#" className="text-gray-400 hover:text-[#00BAB5]">
                <img src="/Fblogo.png" alt="" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#00BAB5]">
              <img src="/Twiterlogo.png" alt="" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#00BAB5]">
              <img src="/Youtubelogo.png" alt="" />
              </Link>
              
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-[#00BAB5]">Sofa</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#00BAB5]">Wing Chair</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#00BAB5]">Desk Chair</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#00BAB5]">Park Bench</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6">Help & Support</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 hover:text-[#00BAB5]">Shipping Info</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#00BAB5]">Refund Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#00BAB5]">Privacy Policy</Link></li>
              <li><Link href="./components/products/contact" className="text-gray-600 hover:text-[#00BAB5]">Help</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get updates about our latest products and offers
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-[#00BAB5]"
              />
              <Button className="bg-[#00BAB5] hover:bg-[#00A29D]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
          @ 2021 - Blogy - Designed & Develop by Zakirsoft
          </p>
          <div className="flex gap-4">
            <Image src="/Link1.png" alt="Payment method" width={40} height={24} />
            <Image src="/Paypal.png" alt="Payment method" width={40} height={24} />
            <Image src="/Vector.png" alt="Payment method" width={40} height={24} />
            <Image src="/Union.png" alt="Payment method" width={40} height={24} />
            
          </div>
        </div>
      </div>
    </footer>
  )
}

