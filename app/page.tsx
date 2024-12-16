"use client"

import { useState } from 'react'
import { SearchBar } from "./components/search-bar"
import { ProductGrid } from "./components/product-grid"
import { PersonalizedRecommendations } from "./components/personalized-recommendations"
import { CategoryIcons } from "./components/category-icons"
import { TraditionalArtisansSection } from "./components/traditional-artisans-section"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const allProducts = [
  { id: "1", name: "Modern Sofa", price: 45000, imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Furniture", sellerType: "online" },
  { id: "2", name: "Dining Table", price: 30000, imageUrl: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80", category: "Furniture", sellerType: "offline" },
  { id: "3", name: "Bedside Lamp", price: 2500, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Lighting", sellerType: "online" },
  { id: "4", name: "Bookshelf", price: 15000, imageUrl: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80", category: "Furniture", sellerType: "offline" },
  { id: "5", name: "Armchair", price: 20000, imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80", category: "Furniture", sellerType: "online" },
  { id: "6", name: "Coffee Table", price: 12000, imageUrl: "https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Furniture", sellerType: "offline" },
  { id: "7", name: "Floor Lamp", price: 5000, imageUrl: "https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80", category: "Lighting", sellerType: "online" },
  { id: "8", name: "Wall Art", price: 3500, imageUrl: "https://images.unsplash.com/photo-1582045253062-f63cfbd45bcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Decor", sellerType: "offline" },
  { id: "9", name: "Dining Chairs Set", price: 25000, imageUrl: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Furniture", sellerType: "online" },
  { id: "10", name: "Ceiling Fan", price: 8000, imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Lighting", sellerType: "offline" },
  { id: "11", name: "Throw Pillows Set", price: 2000, imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Decor", sellerType: "online" },
  { id: "12", name: "Wardrobe", price: 40000, imageUrl: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Furniture", sellerType: "offline" },
  { id: "13", name: "Table Lamp", price: 3000, imageUrl: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Lighting", sellerType: "online" },
  { id: "14", name: "Wall Clock", price: 1500, imageUrl: "https://images.unsplash.com/photo-1594579863-a9e8e2c4b9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Decor", sellerType: "offline" },
  { id: "15", name: "Desk", price: 18000, imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Furniture", sellerType: "online" },
  { id: "16", name: "Pendant Light", price: 6000, imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", category: "Lighting", sellerType: "offline" },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSellerType, setSelectedSellerType] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = allProducts.filter(product => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    (selectedSellerType === "all" || product.sellerType === selectedSellerType) &&
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     product.category.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        <CategoryIcons onSelectCategory={setSelectedCategory} />
      </div>
      <div className="mt-8">
        <Tabs defaultValue="all" onValueChange={(value) => setSelectedSellerType(value as "all" | "online" | "offline")}>
          <TabsList className="grid w-full grid-cols-3 bg-earth-100">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-earth-300 data-[state=active]:text-earth-800"
            >
              All Sellers
            </TabsTrigger>
            <TabsTrigger 
              value="online"
              className="data-[state=active]:bg-earth-300 data-[state=active]:text-earth-800"
            >
              Online Sellers
            </TabsTrigger>
            <TabsTrigger 
              value="offline"
              className="data-[state=active]:bg-earth-300 data-[state=active]:text-earth-800"
            >
              Offline Sellers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-800">All Products</h2>
            <ProductGrid products={filteredProducts} />
          </TabsContent>
          <TabsContent value="online">
            <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-800">Online Seller Products</h2>
            <ProductGrid products={filteredProducts.filter(p => p.sellerType === 'online')} />
          </TabsContent>
          <TabsContent value="offline">
            <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-800">Offline Seller Products</h2>
            <ProductGrid products={filteredProducts.filter(p => p.sellerType === 'offline')} />
          </TabsContent>
        </Tabs>
      </div>
      <TraditionalArtisansSection />
      <PersonalizedRecommendations />
      <div className="mt-8 text-center">
        <Button 
          onClick={() => window.location.href = '/products'}
          className="bg-black hover:bg-gray-800 text-white"
        >
          View All Products
        </Button>
      </div>
    </div>
  )
}

