import './App.scss'
import { Floating } from './components/Floating'
import { PlusIcon } from './components/Icons'

const FloatingWrapper = () => {
  return (
    <div className="container" style={{ backgroundColor: 'lightgray' }}>
      <Floating Icon={<PlusIcon />} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <FloatingWrapper />
    </div>
  )
}

export default App
