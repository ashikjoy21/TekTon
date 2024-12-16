import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "../contexts/cart-context"
import { Globe, MapPin } from 'lucide-react'

type Product = {
  id: string
  name: string
  price: number
  imageUrl: string
  sellerType: 'online' | 'offline'
  category?: string
}

type ProductGridProps = {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart()

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <Link href={`/products/${product.id}`}>
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-earth-200">
              {product.imageUrl && (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              )}
            </div>
            <h3 className="mt-4 text-sm text-earth-700">{product.name}</h3>
            <p className="text-xs text-earth-500">{product.category}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-lg font-medium text-earth-900">₹{product.price.toLocaleString()}</p>
              {product.sellerType === 'online' ? (
                <Globe className="w-5 h-5 text-earth-600" />
              ) : (
                <MapPin className="w-5 h-5 text-earth-600" />
              )}
            </div>
          </Link>
          <Button 
            onClick={() => addToCart(product)} 
            className="mt-2 w-full bg-black hover:bg-gray-800 text-white"
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  )
}

