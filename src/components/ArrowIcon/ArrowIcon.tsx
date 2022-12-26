import classNames from 'classnames'
import styled from 'styled-components'
import './index.scss'

export const ArrowIcon = ({ state }: any) => {
  return (
    <div>
      <ArrowStyled className={classNames('arrowIcon', { active: !state })} />
    </div>
  )
}

export const ArrowStyled = styled.div`
  &::before,
  ::after {
    background-color: white;
  }
`
