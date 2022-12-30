import classNames from 'classnames'
import { forwardRef, useState } from 'react'
import { DEEP_PINK } from '../../utils/variables'
import { LeftIcon } from './icon/leftIcon'
import { RightIcon } from './icon/rightIcon'
import './SideBarContent.scss'
export const MINI_CLASS = 'minimize'
export const EXTENDS_CLASS = 'extends'
export const ICON_CLASS = 'sidebar-arrow-icon'

type InputProps = {
  state?: boolean
  optionsContent: (state: StateType) => JSX.Element
} & React.HtmlHTMLAttributes<HTMLDivElement>

enum navSize {
  extends,
  minimize
}

export type StateType = 'extends' | 'minimize' | '' | undefined
export const SideBarContent = forwardRef<HTMLDivElement, InputProps>(
  ({ optionsContent }, ref) => {
    const [state, setState] = useState<StateType>()
    const classes = classNames('sideBar', state)
    const handleToggle = () => {
      if (state === MINI_CLASS) {
        return setState(EXTENDS_CLASS)
      }
      return !state && setState(MINI_CLASS)
    }

    return (
      <div className={classes} ref={ref}>
        <div className="options-wrapper" style={{ width: '100%' }}>
          {optionsContent(state)}
        </div>

        <div className="toggle-icon-wrapper">
          <div onClick={() => setState('')}>
            <LeftIcon color={DEEP_PINK} height="2rem" width="2rem" />
          </div>
          <div onClick={handleToggle}>
            <RightIcon color={DEEP_PINK} height="2rem" width="2rem" />
          </div>
        </div>
      </div>
    )
  }
)
