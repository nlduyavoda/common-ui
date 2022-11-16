import { useRef, useState } from 'react'
import CheckedIcon from './icons/checkedIcon'
import './menu.scss'

const Option = ({ ...props }) => {
  const checkRef = useRef<HTMLDivElement>(null)
  const [checked, setChecked] = useState(false)
  const handleOnClick = () => {
    setChecked(!checked)
    return checked
      ? checkRef.current?.classList.remove('iconShow')
      : checkRef.current?.classList.add('iconShow')
  }
  return (
    <div className="item" key={props.id}>
      <div onClick={handleOnClick} className="icon" ref={checkRef}>
        <CheckedIcon />
      </div>
      <input type="checkbox" onClick={handleOnClick} />
      <div className="containerLabel">
        <label></label>
      </div>
    </div>
  )
}

export default Option
