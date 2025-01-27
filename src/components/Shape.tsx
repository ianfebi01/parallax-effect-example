import { scalePow } from 'd3-scale'
import React from 'react'

interface ShapeProps {
  myposy: number
}

const Shape: React.FC<ShapeProps> = ({ myposy }) => {
  const translate = scalePow().domain([-2000, 2000]).range([-200, 200])
  const rotate = scalePow().domain([1000, -1000]).range([-0, 90])
  return (
    <div>
      {/* Shape 1 */}
      <div
        className="shape shape-1"
        style={{
          transform: `translate(0, ${translate.exponent(1)(myposy)}px) rotate(${
            rotate(myposy) + 25
          }deg)`,
        }}
      />
      {/* Shape 2 */}
      <div
        className="shape shape-2"
        style={{
          transform: `translate(0, ${translate.exponent(1)(myposy)}px) rotate(${
            rotate(myposy) + 27
          }deg)`,
        }}
      />
      {/* Shape 3 */}
      <div
        className="shape shape-3"
        style={{
          transform: `translate(0, ${translate.exponent(1)(myposy)}px) rotate(${
            rotate(myposy) + -37
          }deg)`,
        }}
      />
      {/* Shape 4 */}
      <div
        className="shape shape-4"
        style={{
          transform: `translate(0, ${translate.exponent(1)(myposy)}px) rotate(${
            rotate(myposy) + 17
          }deg) scale(0.75)`,
        }}
      />
      {/* Shape 5 */}
      <div
        className="shape shape-5"
        style={{
          transform: `translate(0, ${translate.exponent(1)(myposy)}px) rotate(${
            rotate(myposy) - 6
          }deg) scale(0.75)`,
        }}
      />
      {/* Shape 6 */}
      <div
        className="shape shape-6"
        style={{
          transform: `translate(140px, ${translate.exponent(1)(
            myposy
          )}px) rotate(${rotate(myposy) + 6}deg)`,
        }}
      />
    </div>
  )
}

export default Shape
