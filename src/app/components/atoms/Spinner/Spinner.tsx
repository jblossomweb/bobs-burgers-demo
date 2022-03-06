import React from 'react'
import clsx from 'clsx'
import colors from 'app/colors.json'
import Logo from './svg/Logo'
import style from './Spinner.module.css'

export interface Props {
  size?: number
  color?: React.CSSProperties['color']
  className?: React.HTMLAttributes<HTMLElement>['className']
}

const Spinner: React.FC<Props> = ({
  size = 48,
  color = colors['palette-light-blue'],
  className,
}) => (
  <div
    className={clsx(style.bounce, className)}
    style={{ width: `${size}px`, height: `${size}px` }}
    role="status"
  >
    <Logo className={style.spin} width={size} height={size} color={color} />
  </div>
)

export default Spinner
