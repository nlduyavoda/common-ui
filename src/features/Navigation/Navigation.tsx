import { forwardRef, useRef } from 'react'
import { Navigation } from '../../components'
import { generateData, isScrolledIntoView } from './controller'

export const NavigationWrapper = () => {
  const { arr, items } = generateData()
  const headerRef = useRef<any>()
  const navRef = useRef<any>()
  const listRef = useRef<any>()

  const onScroll = () => isScrolledIntoView({ headerRef, listRef, navRef })

  return (
    <div className="navigationWrapper" ref={listRef} onScroll={onScroll}>
      <Header ref={headerRef} />
      <Navigation items={items} ref={navRef} />
      <ListItem arr={arr} />
    </div>
  )
}

const ListItem = ({ arr }: any) => {
  return (
    <div className="list">
      {arr &&
        arr.map((ele: any) => {
          return <div key={ele.id} className="item"></div>
        })}
    </div>
  )
}

const Header = forwardRef<HTMLDivElement, any>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{ height: '100px', width: '100%', backgroundColor: 'lightblue' }}
      {...props}>
      HEADER
    </div>
  )
})
