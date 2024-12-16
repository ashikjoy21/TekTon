"use client"

import { useCart } from "../contexts/cart-context"

export function CartCount() {
  const { cart } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  if (itemCount === 0) return null

  return (
    <div className="absolute -top-2 -right-2 bg-earth-500 text-earth-100 rounded-full w-5 h-5 flex items-center justify-center text-xs">
      {itemCount}
    </div>
  )
}

