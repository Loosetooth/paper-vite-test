import React, { useRef } from "react"
import { Line } from "react-paper-bindings"
import { ArrayPoint } from "./types2D"

const width = 100
const height = 100
const step = 10

const generateLines = () => {
  // start and end points of each line
  const lines: [ArrayPoint, ArrayPoint][] = []
  // vertical lines
  for (let x = -width; x <= width; x += step) {
    lines.push([[x, -height], [x, height]])
  }

  // horizontal lines
  for (let y = -height; y <= height; y += step) {
    lines.push([[-width, y], [width, y]])
  }

  return lines
}

export const Grid = () => {
  const linesRef = useRef<[ArrayPoint, ArrayPoint][]>(generateLines())

  return <>
    {
      linesRef.current?.map((points, i) => <Line
        key={i}
        from={points[0]}
        to={points[1]}
        strokeColor="lightgrey"
        strokeWidth={0.5}
        strokeCap='square'
      />)
    }
    {/* thick center lines */}
    <Line 
      from={[-width, 0]}
      to={[width, 0]}
      strokeColor="lightgrey"
    />
    <Line 
      from={[0, -height]}
      to={[0, height]}
      strokeColor="lightgrey"
    />
  </>
}