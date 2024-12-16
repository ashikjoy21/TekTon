"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, Trash2, X } from 'lucide-react'
import Image from 'next/image'
import { useToast } from "@/components/ui/use-toast"
import { SimpleRoomCanvas } from "../components/simple-room-canvas"
import { SimilarProducts } from "../components/similar-products"
import { ProductGrid } from "../components/product-grid"

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function VisualizePage() {
  const [roomImage, setRoomImage] = useState<string | null>(null)
  const [productImage, setProductImage] = useState<string | null>(null)
  const [furnitureItems, setFurnitureItems] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([])
  const { toast } = useToast()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setImage: (image: string | null) => void) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size should not exceed 5MB",
          variant: "destructive",
        })
        return
      }

      setIsLoading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
        setIsLoading(false)
      
        // Simulate product suggestions based on the uploaded image
        // In a real application, this would be an API call to an image recognition service
        const mockSuggestedProducts = [
          { id: "1", name: "Modern Sofa", price: 45000, imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
          { id: "2", name: "Floor Lamp", price: 5000, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
          { id: "3", name: "Coffee Table", price: 12000, imageUrl: "https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
        ]
        setSuggestedProducts(mockSuggestedProducts)
      }
      reader.onerror = () => {
        toast({
          title: "Error",
          description: "Failed to read the file",
          variant: "destructive",
        })
        setIsLoading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddFurniture = (item: any) => {
    setFurnitureItems(prevItems => [...prevItems, { ...item, id: Date.now() }])
  }

  const handleRemoveFurniture = (id: number) => {
    setFurnitureItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const handleRemoveRoomImage = () => {
    setRoomImage(null)
    setSuggestedProducts([])
  }

  const handleRemoveProductImage = () => {
    setProductImage(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif text-earth-800">Visualize Your Space</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-700">Room Preview</h2>
          <div className="mb-4">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setRoomImage)}
              className="hidden"
              id="room-upload"
            />
            <label htmlFor="room-upload">
              <Button variant="outline" className="w-full" asChild>
                <span>
                  <Upload className="mr-2 h-4 w-4" /> {isLoading ? 'Uploading...' : 'Upload Room Image'}
                </span>
              </Button>
            </label>
          </div>
          {roomImage && (
            <div className="relative">
              <Button
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 z-10"
                onClick={handleRemoveRoomImage}
              >
                <X className="h-4 w-4" />
              </Button>
              <SimpleRoomCanvas roomImage={roomImage} furnitureItems={furnitureItems} />
            </div>
          )}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 font-serif text-earth-700">Suggested Products</h3>
            <ProductGrid products={suggestedProducts} />
          </div>
          {furnitureItems.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 font-serif text-earth-700">Placed Furniture</h3>
              <ul>
                {furnitureItems.map(item => (
                  <li key={item.id} className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <Button variant="destructive" size="sm" onClick={() => handleRemoveFurniture(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-700">Product Search</h2>
          <div className="mb-4">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setProductImage)}
              className="hidden"
              id="product-upload"
            />
            <label htmlFor="product-upload">
              <Button variant="outline" className="w-full" asChild>
                <span>
                  <Upload className="mr-2 h-4 w-4" /> {isLoading ? 'Uploading...' : 'Upload Product Image'}
                </span>
              </Button>
            </label>
          </div>
          {productImage && (
            <div className="relative mb-4">
              <Button
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 z-10"
                onClick={handleRemoveProductImage}
              >
                <X className="h-4 w-4" />
              </Button>
              <Image src={productImage} alt="Uploaded Product" width={200} height={200} className="rounded-lg" />
            </div>
          )}
          <SimilarProducts productImage={productImage} onAddFurniture={handleAddFurniture} />
        </div>
      </div>
    </div>
  )
}

