import { ProductGrid } from "./product-grid"

const recommendedProducts = [
  { id: "9", name: "Elegant Armchair", price: 22000, imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80", category: "Furniture", sellerType: "online" },
  { id: "10", name: "Minimalist Desk", price: 18000, imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Furniture", sellerType: "offline" },
  { id: "11", name: "Cozy Throw Blanket", price: 3500, imageUrl: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Decor", sellerType: "online" },
  { id: "12", name: "Modern Floor Lamp", price: 6500, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Lighting", sellerType: "offline" },
]

export function PersonalizedRecommendations() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 font-serif text-earth-800">Recommended for You</h2>
      <ProductGrid products={recommendedProducts} />
    </div>
  )
}

