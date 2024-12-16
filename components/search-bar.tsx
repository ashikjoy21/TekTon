"use client"

import { useState } from "react"
import { Search } from 'lucide-react'

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery) // This will update the search results in real-time as the user types
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products, categories..."
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-earth-600 focus:border-transparent"
      />
      <button type="submit" className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="w-5 h-5 text-gray-400" />
      </button>
    </form>
  )
}

