import './menu.scss'
import Option from './option'
import { useRef, useState } from 'react'
import { toggleModal } from './toggleModal'
import MinusIcon from './icons/MinusIcon'
import PlusIcon from './icons/PlusIcon'

const Options = ({ ...props }) => {
  const modalRef = useRef(null)
  const [isShow, setShow] = useState(false)
  const handleToggle = () => {
    toggleModal(modalRef, isShow)
    setShow(!isShow)
  }
  return (
    <div className={`modal${props.state ? '' : ' hidden'}`}>
      <div className="header">
        <div onClick={handleToggle}></div>
        <div>
          <div className={`headerIcon ${isShow && 'showIcon'}`}>
            <MinusIcon />
          </div>
          <div className={`headerIcon ${!isShow && 'showIcon'}`}>
            <PlusIcon />
          </div>
        </div>
      </div>

      <div className="container" ref={modalRef}>
        {props.options.map((opt: any, idx: number) => (
          <Option id={opt.id} name={opt.name} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Options
