

import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import MainNav from "../app/components/main-nav";
import {ClerkProvider} from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Comforty - Furniture Store",
  description: "Best Furniture Collection For Your Interior",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1920px] mx-auto">
          <header>
            <Header />
            <MainNav />
          </header>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  )
}
