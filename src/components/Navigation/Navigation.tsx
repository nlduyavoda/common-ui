import { forwardRef, HTMLAttributes } from 'react'
import './Navigation.scss'

interface navType extends HTMLAttributes<HTMLDivElement> {
  items: any
}

export const Navigation = forwardRef<HTMLDivElement, navType>(({ items }, ref) => {
  return (
    <div className="navigation" ref={ref}>
      {items.map((ele: any) => {
        return <div key={ele.id} className="navItem"></div>
      })}
    </div>
  )
})
