import { useRef } from 'react'
import './index.scss'
import { SideBarContent } from './SideBarContent'
import { SIDE_BAR_CLASS } from './Variables'

export const LeftSide = ({
  children,
  state
}: {
  children: any
  state: boolean
}) => {
  const parentRef = useRef<HTMLDivElement>(null)
  return (
    <div className={SIDE_BAR_CLASS} ref={parentRef}>
      <SideBarContent />
      {children}
    </div>
  )
}
