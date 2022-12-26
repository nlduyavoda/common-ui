import classNames from 'classnames'
import { forwardRef, useState } from 'react'
import { DEEP_PINK } from '../../utils/variables'
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

enum navSize {
  extends,
  minimize
}

export const SideBarContent = forwardRef<HTMLDivElement, InputProps>(
  (_, ref) => {
    const [state, setState] = useState<'extends' | 'minimize' | ''>()
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
          <Options
            label="Selector-1"
            options={optionsDefaultValues}
            state={!!state}
          />
          <Options
            label="Selector-2"
            options={optionsDefaultValues}
            state={!!state}
          />
          <Options
            label="Selector-3"
            options={optionsDefaultValues}
            state={!!state}
          />
          <Options
            label="Selector-4"
            options={optionsDefaultValues}
            state={!!state}
          />
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
