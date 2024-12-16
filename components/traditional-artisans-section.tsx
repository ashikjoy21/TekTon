import { ProductGrid } from "./product-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const artisanProducts = [
  { id: "a2", name: "Terracotta Vase", price: 2500, imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Pottery" },
  { id: "a3", name: "Wooden Elephant Carving", price: 5000, imageUrl: "https://images.unsplash.com/photo-1602513292202-7eb50df53c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Wooden carvings" },
  { id: "a4", name: "Brass Diya Lamp", price: 1800, imageUrl: "https://images.unsplash.com/photo-1609159125016-a1fc58f00675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Metal crafts" },
  { id: "a6", name: "Madhubani Painting", price: 8000, imageUrl: "https://images.unsplash.com/photo-1582738412145-b8e4ade6a374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Other artisan-made goods" },
  { id: "a7", name: "Wooden Serving Tray", price: 3500, imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Wooden crafts" },
  { id: "a8", name: "Wooden Wall Clock", price: 4500, imageUrl: "https://images.unsplash.com/photo-1602153508753-4e8b6047f02e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Wooden crafts" },
]

export function TraditionalArtisansSection() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-800">Traditional Artisan Products</h2>
      <ProductGrid products={artisanProducts} />
      <div className="mt-8 text-center">
        <Link href="/traditional-artisans">
          <Button className="bg-earth-600 hover:bg-earth-700 text-earth-100">
            Explore All Artisan Products
          </Button>
        </Link>
      </div>
    </div>
  )
}

