import React from 'react'
import clsx from 'clsx'
import style from './Card.module.css'

export interface Props {
  title?: string
  children?: React.ReactNode
  head?: React.ReactNode
  width?: number
  className?: React.HTMLAttributes<HTMLElement>['className']
}

const widthStyle = (width: Props['width']): React.CSSProperties =>
  width ? { width: `${width}px` } : {}

const Card: React.FC<Props> = ({
  title,
  children,
  width,
  head,
  className = '',
}) => (
  <div className={style.container} style={widthStyle(width)}>
    <div className={clsx(style.card, className)}>
      {head}
      {!!(title || children) && (
        <div className={style.body}>
          {!!title && <h2 className={style.title}>{title.toLowerCase()}</h2>}
          {!!children && <p className={style.content}>{children}</p>}
        </div>
      )}
    </div>
  </div>
)

export default Card
