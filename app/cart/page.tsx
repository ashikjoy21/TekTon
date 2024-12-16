"use client"

import { useCart } from "../contexts/cart-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-serif text-wood-brown-700">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                {item.imageUrl && (
                  <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="rounded-md mr-4" />
                )}
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: ₹{item.price.toLocaleString()}</p>
                </div>
              </div>
              <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ₹{total.toLocaleString()}</p>
            <div className="mt-4 space-x-4">
              <Link href="/checkout">
                <Button className="bg-black hover:bg-gray-800 text-white">Proceed to Checkout</Button>
              </Link>
              <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

