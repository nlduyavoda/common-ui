import { forwardRef, HTMLAttributes } from 'react'
import './Floating.scss'

type FloatingType = {
  options: string[]
} & HTMLAttributes<HTMLButtonElement>
export const Floating = forwardRef<HTMLButtonElement, FloatingType>(
  ({ ...props }, ref) => {
    return (
      <div>
        <button ref={ref} {...props} className={props.className}>
          {props.children}
          {props.options.map((_, idx) => {
            return <button className={`item${idx + 1}`} />
          })}
        </button>
      </div>
    )
  }
)
