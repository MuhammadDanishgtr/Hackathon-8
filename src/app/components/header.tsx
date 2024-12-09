
import Link from "next/link"
import { ChevronDown, Clock, Menu } from 'lucide-react'

export default function Header() {
  return (
    <div className="bg-[#272343] text-white py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[300px]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="hidden sm:inline">Free Shipping On All Orders Over $50</span>
          <span className="sm:hidden">Free Shipping Over $50</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm">
          <button className="flex items-center gap-1">
            Eng
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <Link href="./components/faq" className="hover:text-gray-200">
            Faqs
          </Link>
          <Link href="./components/products/contact" className="flex items-center gap-1 sm:gap-2 hover:text-gray-200">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Need Help</span>
            <span className="sm:hidden">Help</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

