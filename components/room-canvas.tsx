"use client"

import { useEffect, useState, useCallback } from 'react'
import { Stage, Layer, Image as KonvaImage, Rect, Transformer } from 'react-konva'
import useImage from 'use-image'

interface FurnitureItem {
  id: number
  x: number
  y: number
  width: number
  height: number
  color: string
  name: string
}

interface RoomCanvasProps {
  roomImage: string
  furnitureItems: FurnitureItem[]
  setFurnitureItems: React.Dispatch<React.SetStateAction<FurnitureItem[]>>
}

const RoomCanvas: React.FC<RoomCanvasProps> = ({ roomImage, furnitureItems, setFurnitureItems }) => {
  const [image] = useImage(roomImage)
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 })
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [selectedId, selectShape] = useState<number | null>(null)

  useEffect(() => {
    if (image) {
      const aspectRatio = image.width / image.height
      const maxWidth = 600
      const maxHeight = 400
      let width = maxWidth
      let height = width / aspectRatio

      if (height > maxHeight) {
        height = maxHeight
        width = height * aspectRatio
      }

      setStageSize({ width, height })
    }
  }, [image])

  const handleWheel = (e: any) => {
    e.evt.preventDefault()
    const scaleBy = 1.1
    const stage = e.target.getStage()
    const oldScale = stage.scaleX()
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    }

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy
    setScale(newScale)
    setPosition({
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    })
  }

  const handleDragEnd = useCallback((e: any, id: number) => {
    const updatedItems = furnitureItems.map(item =>
      item.id === id ? { ...item, x: e.target.x(), y: e.target.y() } : item
    )
    setFurnitureItems(updatedItems)
  }, [furnitureItems, setFurnitureItems])

  const handleTransformEnd = useCallback((e: any, id: number) => {
    const node = e.target
    const scaleX = node.scaleX()
    const scaleY = node.scaleY()

    node.scaleX(1)
    node.scaleY(1)

    const updatedItems = furnitureItems.map(item =>
      item.id === id
        ? {
            ...item,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(5, node.height() * scaleY),
          }
        : item
    )
    setFurnitureItems(updatedItems)
  }, [furnitureItems, setFurnitureItems])

  return (
    <Stage
      width={stageSize.width}
      height={stageSize.height}
      onWheel={handleWheel}
      scaleX={scale}
      scaleY={scale}
      x={position.x}
      y={position.y}
      draggable
    >
      <Layer>
        {image && (
          <KonvaImage image={image} width={stageSize.width} height={stageSize.height} />
        )}
        {furnitureItems.map(item => (
          <Rect
            key={item.id}
            id={item.id.toString()}
            x={item.x}
            y={item.y}
            width={item.width}
            height={item.height}
            fill={item.color}
            draggable
            onClick={() => selectShape(item.id)}
            onTap={() => selectShape(item.id)}
            onDragEnd={(e) => handleDragEnd(e, item.id)}
            onTransformEnd={(e) => handleTransformEnd(e, item.id)}
          />
        ))}
        {selectedId && (
          <Transformer
            nodes={[document.getElementById(selectedId.toString()) as unknown as import('konva/lib/Node').Node]}
            keepRatio={false}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox
              }
              return newBox
            }}
          />
        )}
      </Layer>
    </Stage>
  )
}

export default RoomCanvas

