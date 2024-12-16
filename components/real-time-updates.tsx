"use client"

import { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'

export function RealTimeUpdates() {
  const [notification, setNotification] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const updates = [
        "New item added to your wishlist!",
        "Price drop on an item in your cart!",
        "Limited time offer on bedroom furniture!",
        "New review on a product you viewed!",
        "Restocked: An item you were interested in is back!",
      ]
      const randomUpdate = updates[Math.floor(Math.random() * updates.length)]
      setNotification(randomUpdate)

      // Clear notification after 5 seconds
      setTimeout(() => setNotification(null), 5000)
    }, 30000) // Show a new notification every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (!notification) return null

  return (
    <div className="fixed bottom-20 right-4 bg-wood-brown-100 text-wood-brown-800 p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center">
        <Bell className="w-5 h-5 mr-2 text-wood-brown-600" />
        <p className="text-sm">{notification}</p>
      </div>
    </div>
  )
}

