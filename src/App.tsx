import { useRef, useState } from 'react'
import './App.scss'
import { LeftSide as Wrapper } from './components'

function App() {
  const [isClosSeideBar, setIsCloseSideBar] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="App">
      <Wrapper state={isClosSeideBar}>
        <div
          className="containerX"
          ref={ref}
          onClick={() => setIsCloseSideBar((prev) => !prev)}>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>
      </Wrapper>
    </div>
  )
}

export default App
