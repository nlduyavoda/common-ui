import classNames from 'classnames'
import { forwardRef, useRef, useState } from 'react'
import { ArrowIcon } from '../ArrowIcon'
import './menu.scss'
import Option from './option'
import { toggleModal } from './toggleModal'

const MODAL = {
  default: 'container',
  show: 'modalShow',
  fade: 'modalFade'
}

const Options = ({ ...props }) => {
  const ref = useRef(null)

  const [optHeader, setHeader] = useState(false)
  const optionsClasses = classNames(MODAL.default, {
    [`${MODAL.fade}`]: false
  })
  const handleToggle = () => {
    toggleModal(ref, optHeader)
    setHeader(!optHeader)
  }

  return (
    <div className="modal">
      <Header onChange={handleToggle} state={optHeader} />
      <OptionsContent
        ref={ref}
        classes={optionsClasses}
        options={props.options}
      />
      <div className={optionsClasses} ref={ref}>
        {props.options.map((opt: any, idx: number) => (
          <Option id={opt.id} name={opt.name} key={idx} />
        ))}
      </div>
    </div>
  )
}

const Header = ({ onChange, state = false }: any) => {
  return (
    <div className="header" onClick={onChange}>
      <div className="label"></div>
      <ArrowIcon state={state} />
    </div>
  )
}

const OptionsContent = forwardRef<any, any>(
  // const OptionsContent = forwardRef<HtmlHTMLAttributes<HTMLDivElement>, any>(
  ({ ...props }, ref) => {
    return (
      <div className={props.classes} ref={ref}>
        {props.options.map((opt: any, idx: number) => (
          <Option id={opt.id} name={opt.name} key={idx} />
        ))}
      </div>
    )
  }
)
export default Options
