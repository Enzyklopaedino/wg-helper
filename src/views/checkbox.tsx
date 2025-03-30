import { Button } from '@/src/views/button'
import { type FC, type PropsWithChildren, type ReactNode, useState } from 'react'

type CheckboxProps = {
  children?: ReactNode
  onClick: () => void
}

const UncheckedCheckbox: FC<CheckboxProps> = ({ onClick, children }) => {
  return (
      <Button variant="outline" onClick={onClick}>
        {children}
      </Button>
  )
}

const CheckedCheckbox: FC<CheckboxProps> = ({ onClick, children }) => {
  return (
      <Button onClick={onClick}>
        {children}
      </Button>
  )
}

export const Checkbox: FC<PropsWithChildren> = ({ children }) => {
  const [checked, setChecked] = useState(false)

  const handleButtonClick = (): void => {
    setChecked(!checked)
  }

  return (
    <div className="flex flex-row items-center text-base">
      {checked ? (
        <CheckedCheckbox onClick={handleButtonClick}>
          {children}
        </CheckedCheckbox>
      ) : (
        <UncheckedCheckbox onClick={handleButtonClick}>{children}</UncheckedCheckbox>
      )}
    </div>
  )
}
