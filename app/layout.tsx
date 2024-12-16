import type { Metadata } from "next"
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css"
import { BottomNav } from "./components/bottom-nav"
import { RealTimeUpdates } from "./components/real-time-updates"
import { CartProvider } from "./contexts/cart-context"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { ShoppingCart } from 'lucide-react'
import { CartCount } from "./components/cart-count"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "TekTon - Furniture & Home Decor Marketplace",
  description: "Discover and visualize beautiful furniture and home decor for your space.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-earth-100`}>
        <CartProvider>
          <header className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold font-serif text-earth-800">TekTon</Link>
              <Link href="/cart" className="flex items-center text-earth-700 hover:text-earth-900 transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 mr-2" />
                  <CartCount />
                </div>
                <span>Cart</span>
              </Link>
            </div>
          </header>
          <main className="min-h-screen pb-16">
            {children}
          </main>
          <BottomNav />
          <RealTimeUpdates />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

