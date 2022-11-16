import classNames from 'classnames'
import { forwardRef, useState } from 'react'
import Options from '../menu'
import { LeftIcon } from './icon/leftIcon'
import { RightIcon } from './icon/rightIcon'
import './SideBarContent.scss'
import { optionsDefaultValues } from './Variables'
export const MINI_CLASS = 'minimize'
export const EXTENDS_CLASS = 'extends'
export const ICON_CLASS = 'sidebar-arrow-icon'

type InputProps = {
  state?: boolean
} & React.HtmlHTMLAttributes<HTMLDivElement>

export const SideBarContent = forwardRef<HTMLDivElement, InputProps>(
  ({ ...props }, ref) => {
    const [state, setState] = useState<string | null>(null)
    const classes = classNames('sideBar', state)
    const handleToggle = () => {
      if (state === MINI_CLASS) {
        return setState(EXTENDS_CLASS)
      }
      return !state && setState(MINI_CLASS)
    }
    return (
      <div className={classes} ref={ref}>
        <Options
          label="Selector-1"
          options={optionsDefaultValues}
          state={state}
        />
        <div className="toggle-icon-wrapper">
          <div onClick={() => setState(null)}>
            <LeftIcon />
          </div>
          <div onClick={handleToggle}>
            <RightIcon />
          </div>
        </div>
      </div>
    )
  }
)
