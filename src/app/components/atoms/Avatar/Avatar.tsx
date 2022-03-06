import React, { type CSSProperties } from 'react'
import colors from 'app/colors.json'
import style from './Avatar.module.css'

export interface Props {
  color?: CSSProperties['color']
  children: React.ReactNode
}

const Avatar: React.FC<Props> = ({
  children,
  color = colors['palette-light-blue'],
}) => (
  <div className={style.avatar} style={{ backgroundColor: color }}>
    {children}
  </div>
)

export default Avatar
