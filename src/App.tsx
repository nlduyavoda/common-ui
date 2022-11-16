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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          voluptatibus hic laboriosam, amet possimus magni rerum. Possimus odio
          repellat quam libero sit repellendus, similique quisquam amet
          veritatis, laboriosam illo aspernatur.
        </div>
      </Wrapper>
    </div>
  )
}

export default App
