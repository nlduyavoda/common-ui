import classNames from 'classnames'
import { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Options from '../menu'
import './index.scss'
import { SideBarContent, StateType } from './SideBarContent'
import { optionsDefaultValues, SIDE_BAR_CLASS } from './Variables'

export const LeftSide = ({
  children,
  state
}: {
  children: any
  state: boolean
}) => {
  const parentRef = useRef<HTMLDivElement>(null)

  function optionsContent(state: StateType) {
    return <FormContent state={state} />
  }

  return (
    <div className={SIDE_BAR_CLASS} ref={parentRef}>
      <SideBarContent optionsContent={optionsContent} />
      {children}
    </div>
  )
}

const FormContent = ({ state }: { state: StateType }) => {
  const methods = useForm()

  const onSubmit = (val: any) => {
    console.log(val)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {Array.from(Array(5).keys()).map((_, idx) => {
          return (
            <Options
              key={idx}
              labe={`Selector-${idx}`}
              options={optionsDefaultValues}
              isCloseSideBar={!!state}
            />
          )
        })}
      </form>
    </FormProvider>
  )
}
