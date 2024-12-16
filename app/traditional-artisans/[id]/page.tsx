"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Heart, ChevronLeft, ChevronRight, Globe, MapPin, Truck } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/app/contexts/cart-context"
import { useToast } from "@/components/ui/use-toast"

// This would typically come from a database or API
const product = {
  id: "a1",
  name: "Handcrafted Terracotta Vase",
  price: 2500,
  rating: 4.8,
  description: "A beautifully handcrafted terracotta vase, showcasing the rich tradition of Indian pottery. This elegant piece features intricate designs and a natural, earthy finish that adds warmth to any space.",
  dimensions: "25cm H x 15cm W",
  materials: "Natural terracotta clay",
  careInstructions: "Dust with a soft, dry cloth. Avoid exposure to direct sunlight and excessive moisture.",
  availability: "Made to order (7-10 days for delivery)",
  customizationOptions: ["Natural", "Painted", "Glazed"],
  deliveryTime: "7-10 days",
  warranty: "30-day warranty against manufacturing defects",
  category: "Home Decor",
  artisan: {
    name: "Ramesh Kumar",
    location: "Jaipur, Rajasthan",
    story: "Ramesh Kumar is a third-generation potter from Jaipur, known for his exquisite terracotta creations. He learned the art from his father and has been perfecting his craft for over 30 years, blending traditional techniques with contemporary designs.",
  },
  craftsmanship: "Each vase is meticulously hand-thrown on a potter's wheel using locally sourced terracotta clay. The intricate designs are carefully etched by hand, showcasing the artisan's skill and attention to detail. The vase is then fired in a traditional kiln, resulting in its distinctive earthy color and durability.",
  culturalSignificance: "Terracotta pottery has been an integral part of Indian culture for thousands of years, used for both functional and decorative purposes. This vase represents the continuation of this ancient craft, adapted for modern homes while preserving traditional techniques and cultural heritage.",
  seller: {
    name: "Rajasthan Handicrafts Emporium",
    profile: "A curated collection of authentic Rajasthani handicrafts",
    story: "Rajasthan Handicrafts Emporium works directly with local artisans to bring their creations to a wider audience. We are committed to fair trade practices and preserving traditional crafts.",
    type: "offline",
    location: "Jaipur, Rajasthan"
  },
  reviews: [
    { id: 1, author: "Anita R.", rating: 5, comment: "Absolutely beautiful vase! The craftsmanship is exquisite, and it looks even better in person." },
    { id: 2, author: "Vikram S.", rating: 4, comment: "Lovely piece of art. Delivery took a bit longer than expected, but it was worth the wait." },
    { id: 3, author: "Meera P.", rating: 5, comment: "I'm in love with this vase. It's the perfect addition to my living room and supports local artisans!" },
  ],
  images: [
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1604593716233-e489aa3e0a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  ],
}

const similarProducts = [
  { id: "a2", name: "Hand-painted Ceramic Plate", price: 1800, imageUrl: "https://images.unsplash.com/photo-1590502593389-d55c79d0dc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Home Decor" },
  { id: "a3", name: "Woven Jute Wall Hanging", price: 3500, imageUrl: "https://images.unsplash.com/photo-1582643381669-0ad30d76cee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Home Decor" },
  { id: "a4", name: "Brass Diya Lamp", price: 1200, imageUrl: "https://images.unsplash.com/photo-1609159125019-b7e2b0c84500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Home Decor" },
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
              <TabsTrigger value="artisan">Artisan</TabsTrigger>
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

