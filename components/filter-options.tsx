"use client"

import { useState, useEffect, useMemo } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterOptionsProps {
  onFilterChange: (filters: any) => void;
}

export function FilterOptions({ onFilterChange }: FilterOptionsProps) {
  const categories = [
    "Furniture",
    "Lighting",
    "Decor",
    "Handwoven textiles",
    "Pottery",
    "Wooden carvings",
    "Metal crafts",
    "Traditional jewelry",
    "Other artisan-made goods",
  ]
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [material, setMaterial] = useState("")
  const [style, setStyle] = useState("")
  const [size, setSize] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [sellerType, setSellerType] = useState("")

  const currentFilters = useMemo(() => ({
    category,
    priceRange,
    material,
    style,
    size,
    brand,
    sellerType
  }), [category, priceRange, material, style, size, brand, sellerType])

  useEffect(() => {
    onFilterChange(currentFilters)
  }, [currentFilters, onFilterChange])

  return (
    <div className="space-y-4">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <label className="text-sm font-medium">Price Range (₹)</label>
        <Slider
          min={0}
          max={100000}
          step={1000}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-2"
        />
        <div className="flex justify-between mt-1 text-sm text-gray-500">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
      <Select value={material} onValueChange={setMaterial}>
        <SelectTrigger>
          <SelectValue placeholder="Material" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="wood">Wood</SelectItem>
          <SelectItem value="metal">Metal</SelectItem>
          <SelectItem value="fabric">Fabric</SelectItem>
          <SelectItem value="leather">Leather</SelectItem>
        </SelectContent>
      </Select>
      <Select value={style} onValueChange={setStyle}>
        <SelectTrigger>
          <SelectValue placeholder="Style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="modern">Modern</SelectItem>
          <SelectItem value="traditional">Traditional</SelectItem>
          <SelectItem value="contemporary">Contemporary</SelectItem>
          <SelectItem value="rustic">Rustic</SelectItem>
        </SelectContent>
      </Select>
      <Select value={size} onValueChange={setSize}>
        <SelectTrigger>
          <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="small">Small</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="large">Large</SelectItem>
        </SelectContent>
      </Select>
      <Select value={brand} onValueChange={setBrand}>
        <SelectTrigger>
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="brand1">Brand 1</SelectItem>
          <SelectItem value="brand2">Brand 2</SelectItem>
          <SelectItem value="brand3">Brand 3</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex space-x-2">
        <Button variant="outline" className={`w-1/2 ${sellerType === 'online' ? 'bg-earth-200' : ''}`} onClick={() => setSellerType(sellerType === 'online' ? '' : 'online')}>Online Sellers</Button>
        <Button variant="outline" className={`w-1/2 ${sellerType === 'offline' ? 'bg-earth-200' : ''}`} onClick={() => setSellerType(sellerType === 'offline' ? '' : 'offline')}>Offline Sellers</Button>
      </div>
    </div>
  )
}

