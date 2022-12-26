import { useState } from 'react'
import './index.scss'

export const ArrowIcon = () => {
  const [active, setActive] = useState(false)
  return (
    <div className="App">
      <div className={`arrowIcon ${!active ? 'active' : ''}`}></div>
      <button onClick={() => setActive(!active)}>toggle</button>
    </div>
  )
}
