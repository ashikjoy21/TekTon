import { Sofa, Lamp, PaintBucket, Utensils, BedDouble, Grid, Palette } from 'lucide-react'

const categories = [
  { name: "All", icon: Grid },
  { name: "Furniture", icon: Sofa },
  { name: "Lighting", icon: Lamp },
  { name: "Decor", icon: PaintBucket },
  { name: "Kitchenware", icon: Utensils },
  { name: "Mattresses", icon: BedDouble },
  { name: "Traditional Artisans", icon: Palette },
]

export function CategoryIcons({ onSelectCategory }: { onSelectCategory: (category: string) => void }) {
  return (
    <div className="flex justify-between items-center overflow-x-auto py-4">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onSelectCategory(category.name)}
          className="flex items-center"
          title={category.name}
        >
          <div className="w-12 h-12 rounded-full bg-earth-300 flex items-center justify-center">
            <category.icon className="w-8 h-8 text-earth-700" />
          </div>
        </button>
      ))}
    </div>
  )
}

