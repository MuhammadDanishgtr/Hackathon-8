import Link from "next/link"
import { ChevronDown, Clock } from 'lucide-react'

export default function Header() {
  return (
    <div className="bg-[#272343] text-white h-[45px] px-[300px] flex items-center justify-between text-sm ">
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Free Shipping On All Orders Over $50
      </div>
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-1">
          Eng
          <ChevronDown className="w-4 h-4" />
        </button>
        <Link href="/faqs" className="hover:text-gray-200">
          Faqs
        </Link>
        <Link href="/help" className="flex items-center gap-2 hover:text-gray-200">
          <Clock className="w-4 h-4" />
          Need Help
        </Link>
      </div>
    </div>
  )
}

