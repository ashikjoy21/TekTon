"use client"

import { useState, useEffect, useCallback } from 'react'
import { SearchBar } from "../components/search-bar"
import { FilterOptions } from "../components/filter-options"
import { ProductGrid } from "../components/product-grid"

const sampleProducts = [
  { id: "9", name: "Desk Chair", price: 8000, imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Furniture" },
  { id: "10", name: "Wardrobe", price: 35000, imageUrl: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Furniture" },
  { id: "11", name: "Ceiling Fan", price: 4500, imageUrl: "https://images.unsplash.com/photo-1633998860517-29b9ada37476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Lighting" },
  { id: "12", name: "Rug", price: 6000, imageUrl: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Decor" },
  { id: "13", name: "Side Table", price: 7500, imageUrl: "https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Furniture" },
  { id: "14", name: "Mirror", price: 9000, imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Decor" },
  { id: "15", name: "Plant Stand", price: 2000, imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Decor" },
  { id: "16", name: "Throw Pillow", price: 1500, imageUrl: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Decor" },
  { id: "17", name: "Bookcase", price: 12000, imageUrl: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Furniture" },
  { id: "18", name: "Table Lamp", price: 3500, imageUrl: "https://images.unsplash.com/photo-1543198126-a1bf52634f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Lighting" },
  { id: "19", name: "Wall Shelf", price: 4000, imageUrl: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "online", category: "Decor" },
  { id: "20", name: "Floor Vase", price: 5500, imageUrl: "https://images.unsplash.com/photo-1582643381669-0ad30d76cee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", sellerType: "offline", category: "Decor" },
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 100000],
    material: "",
    style: "",
    size: "",
    brand: "",
    sellerType: ""
  })

  useEffect(() => {
    const filtered = sampleProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !filters.category || product.category === filters.category
      const matchesPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      const matchesSellerType = !filters.sellerType || product.sellerType === filters.sellerType

      return matchesSearch && matchesCategory && matchesPriceRange && matchesSellerType
    })

    setFilteredProducts(filtered)
  }, [searchQuery, filters])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = useCallback((newFilters: Partial<typeof filters>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }))
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif text-wood-brown-700">All Products</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        <FilterOptions onFilterChange={handleFilterChange} />
      </div>
      <div className="mt-8">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}

