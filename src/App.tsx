import { useRef, useState } from 'react'
import './App.scss'
import { LeftSide as Wrapper } from './components'

function App() {
  const [state, setState] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="App">
      <Wrapper state={state}>
        <div
          className="containerX"
          ref={ref}
          onClick={() => setState((prev) => !prev)}>
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
