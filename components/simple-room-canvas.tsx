import Image from 'next/image'

interface FurnitureItem {
  id: number
  name: string
  color: string
}

interface SimpleRoomCanvasProps {
  roomImage: string
  furnitureItems: FurnitureItem[]
}

export function SimpleRoomCanvas({ roomImage, furnitureItems }: SimpleRoomCanvasProps) {
  return (
    <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <Image
        src={roomImage}
        alt="Room"
        layout="fill"
        objectFit="cover"
      />
      {furnitureItems.map((item, index) => (
        <div
          key={item.id}
          className="absolute w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{
            backgroundColor: item.color,
            top: `${(index * 20) % 80 + 10}%`,
            left: `${(index * 20) % 80 + 10}%`,
          }}
        >
          {item.name[0]}
        </div>
      ))}
    </div>
  )
}

