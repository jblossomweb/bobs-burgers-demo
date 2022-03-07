import React from 'react'
import clsx from 'clsx'
import style from './Button.module.css'

export interface Props {
  dark?: boolean
  hollow?: boolean
  yellow?: boolean
  red?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: React.HTMLAttributes<HTMLElement>['className']
}

const Button: React.FC<Props> = ({
  dark = false,
  hollow = false,
  yellow = false,
  red = false,
  children,
  onClick,
  className,
}) => (
  <button
    type="button"
    className={clsx(
      style.button,
      { [style.dark]: dark },
      { [style.hollow]: hollow },
      { [style.yellow]: yellow },
      { [style.red]: red },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
