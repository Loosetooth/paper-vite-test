
export type ArrayPoint = [number, number]

export enum TOOL_2D {
  RECTANGLE = 'RECTANGLE',
  CIRCLE = 'CIRCLE',
  SELECTION = 'SELECTION'
}

export type Segment = {
  point: ArrayPoint,
  handleIn: ArrayPoint,
  handleOut: ArrayPoint
}
