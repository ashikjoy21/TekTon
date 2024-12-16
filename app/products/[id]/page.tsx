"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Heart, ChevronLeft, ChevronRight, Globe, MapPin, Truck, Box } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/app/contexts/cart-context"
import { useToast } from "@/components/ui/use-toast"

// This would typically come from a database or API
const product = {
  id: "a1",
  name: "Modern Leather Sofa",
  price: 150000,
  rating: 4.7,
  description: "A luxurious modern leather sofa crafted with premium materials. This elegant piece features clean lines, comfortable seating, and durable construction for long-lasting use.",
  dimensions: "220cm L x 95cm W x 85cm H",
  materials: "Top-grain leather, solid wood frame, high-density foam",
  careInstructions: "Vacuum regularly. Clean spills immediately with a damp cloth. Use leather conditioner every 6-12 months.",
  availability: "In stock (2-3 days for delivery)",
  customizationOptions: ["Black", "Brown", "Tan"],
  deliveryTime: "2-3 days",
  warranty: "5-year warranty on frame and cushions",
  category: "Furniture",
  artisan: {
    name: "Modern Comfort Designs",
    location: "Mumbai, Maharashtra",
    story: "Modern Comfort Designs is a team of skilled furniture makers who blend traditional craftsmanship with contemporary aesthetics. Their attention to detail and commitment to quality have earned them recognition in the furniture industry.",
  },
  craftsmanship: "This sofa is meticulously crafted using premium top-grain leather and a solid wood frame. The cushions are made with high-density foam for optimal comfort and durability. Each piece is carefully assembled and inspected to ensure the highest quality standards.",
  culturalSignificance: "While rooted in modern design, this sofa represents the evolution of Indian furniture craftsmanship. It showcases how traditional skills can be applied to create contemporary pieces that cater to modern urban lifestyles.",
  seller: {
    name: "Urban Living Furniture",
    profile: "A curated collection of modern and contemporary furniture",
    story: "Urban Living Furniture works with skilled artisans and designers to bring high-quality, stylish furniture to urban homes. We focus on sustainable practices and supporting local craftsmanship.",
    type: "online",
    location: "Mumbai, Maharashtra"
  },
  reviews: [
    { id: 1, author: "Rahul M.", rating: 5, comment: "Excellent quality sofa! The leather is soft yet durable, and the design fits perfectly in my living room." },
    { id: 2, author: "Priya S.", rating: 4, comment: "Very comfortable and stylish. Delivery was prompt, but assembly took a bit longer than expected." },
    { id: 3, author: "Amit K.", rating: 5, comment: "Impressed with the craftsmanship. It's a bit pricey, but worth the investment for the quality you get." },
  ],
  images: [
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  ],
}

const similarProducts = [
  { id: "a2", name: "Modern Fabric Armchair", price: 45000, imageUrl: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Furniture" },
  { id: "a3", name: "Minimalist Coffee Table", price: 25000, imageUrl: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Furniture" },
  { id: "a4", name: "Contemporary Floor Lamp", price: 12000, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Lighting" },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  const handleAddToFavorites = () => {
    toast({
      title: "Added to Favorites",
      description: `${product.name} has been added to your favorites.`,
    })
  }

  const handlePreviewInSpace = () => {
    toast({
      title: "Preview in Your Space",
      description: "This feature is coming soon!"
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-earth-200">
            <Image
              src={product.images[currentImageIndex]}
              alt={`${product.name} - View ${currentImageIndex + 1}`}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-earth-100 rounded-full p-2">
            <ChevronLeft className="w-6 h-6 text-earth-800" />
          </button>
          <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-earth-100 rounded-full p-2">
            <ChevronRight className="w-6 h-6 text-earth-800" />
          </button>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-serif text-earth-800">{product.name}</h1>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-earth-700">₹{product.price.toLocaleString()}</p>
            {product.seller.type === 'online' ? (
              <div className="flex items-center text-earth-600">
                <Globe className="w-5 h-5 mr-1" />
                <span>Online</span>
              </div>
            ) : (
              <div className="flex items-center text-earth-600">
                <MapPin className="w-5 h-5 mr-1" />
                <span>Offline</span>
              </div>
            )}
          </div>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-earth-300'}`} />
            ))}
            <span className="ml-2 text-sm text-earth-600">{product.rating} out of 5</span>
          </div>
          <p className="text-earth-600">{product.description}</p>
          <div className="flex items-center text-earth-600">
            <Truck className="w-5 h-5 mr-2" />
            <span>Delivery: {product.deliveryTime}</span>
          </div>
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="artisan">Maker</TabsTrigger>
              <TabsTrigger value="craftsmanship">Craftsmanship</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-2">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Dimensions:</strong> {product.dimensions}</p>
              <p><strong>Materials:</strong> {product.materials}</p>
              <p><strong>Care:</strong> {product.careInstructions}</p>
              <p><strong>Availability:</strong> {product.availability}</p>
              <p><strong>Warranty:</strong> {product.warranty}</p>
              <div>
                <strong>Customization:</strong>
                <div className="flex gap-2 mt-2">
                  {product.customizationOptions.map((option) => (
                    <Button key={option} variant="outline" size="sm">{option}</Button>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="artisan" className="space-y-2">
              <h3 className="font-semibold">{product.artisan.name}</h3>
              <p><strong>Location:</strong> {product.artisan.location}</p>
              <p>{product.artisan.story}</p>
            </TabsContent>
            <TabsContent value="craftsmanship" className="space-y-2">
              <p>{product.craftsmanship}</p>
              <p><strong>Cultural Significance:</strong> {product.culturalSignificance}</p>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b pb-2">
                  <div className="flex items-center">
                    <p className="font-semibold">{review.author}</p>
                    <div className="ml-2 flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-earth-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
          <div className="flex space-x-4">
            <Button onClick={() => addToCart(product)} className="flex-1 bg-earth-600 hover:bg-earth-700 text-earth-100">Add to Cart</Button>
            <Button onClick={handleAddToFavorites} variant="outline" className="flex-1">
              <Heart className="w-4 h-4 mr-2" /> Add to Favorites
            </Button>
          </div>
          <Button onClick={handlePreviewInSpace} variant="outline" className="w-full">
            Preview in Your Space
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-800">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="border rounded-lg p-4">
              <Image
                src={similarProduct.imageUrl}
                alt={similarProduct.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{similarProduct.name}</h3>
              <p className="text-sm text-earth-600">{similarProduct.category}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-earth-600">₹{similarProduct.price.toLocaleString()}</p>
                {similarProduct.sellerType === 'online' ? (
                  <Globe className="w-5 h-5 text-earth-600" />
                ) : (
                  <MapPin className="w-5 h-5 text-earth-600" />
                )}
              </div>
              <Button 
                onClick={() => addToCart(similarProduct)} 
                className="mt-2 w-full bg-earth-600 hover:bg-earth-700 text-earth-100"
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

