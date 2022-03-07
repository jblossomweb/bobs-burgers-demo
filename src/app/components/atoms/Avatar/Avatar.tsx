import React, { type CSSProperties } from 'react'
import clsx from 'clsx'
import colors from 'app/colors.json'
import style from './Avatar.module.css'

export interface Props {
  color?: CSSProperties['color']
  className?: React.HTMLAttributes<HTMLElement>['className']
  children: React.ReactNode
}

const Avatar: React.FC<Props> = ({
  children,
  className,
  color = colors['palette-light-blue'],
}) => (
  <div
    className={clsx(style.avatar, className)}
    style={{ backgroundColor: color }}
  >
    {children}
  </div>
)

export default Avatar
