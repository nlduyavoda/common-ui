import './index.scss'
import { useRef } from 'react'
import { Floating } from 'components/Floating'
import { onToggleClassName } from 'utils/controller'
import { PlusIcon } from 'components/Icons'

export const FloatingFeature = () => {
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <Floating
      className="floatingWrapper"
      ref={ref}
      options={['item1', 'item2', 'item3', 'item4']}
      onClick={() =>
        onToggleClassName(ref, 'floatingWrapper', 'active', 'reverse')
      }>
      <PlusIcon />
    </Floating>
  )
}
