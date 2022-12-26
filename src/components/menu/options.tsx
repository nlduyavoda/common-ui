import classNames from 'classnames'
import { forwardRef, HtmlHTMLAttributes } from 'react'
import { useEffect, useRef, useState } from 'react'
import { ArrowIcon } from '../ArrowIcon'
import './menu.scss'
import Option from './option'
import { toggleModal } from './toggleModal'

const MODAL = {
  default: 'container',
  show: 'modalShow',
  fade: 'modalFade'
}

type TypeLeftSide = '' | 'minimize' | 'extends'

const Options = ({ ...props }) => {
  const ref = useRef(null)
  const [state, setState] = useState(false)
  const optionsClasses = classNames(MODAL.default, {
    [`${MODAL.fade}`]: !state
  })

  const handleToggle = () => {
    if (props.state) {
      toggleModal(ref, state)
      setState(!state)
    }
  }

  useEffect(() => {
    if (!props.state) {
      toggleModal(ref, false)
      setState(false)
    }
  }, [ref, state, props])

  return (
    <div className="modal">
      <Header onChange={handleToggle} props={props} state={state} />
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

const Header = ({ onChange, props, state }: any) => {
  return (
    <div className="header" onClick={onChange}>
      <div className="label"></div>
      {props.state && <ArrowIcon state={state} />}
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
