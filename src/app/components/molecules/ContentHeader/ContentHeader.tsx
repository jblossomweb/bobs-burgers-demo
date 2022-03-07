import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import colors from 'app/colors.json'
import Button from 'app/components/atoms/Button'
import Spinner from 'app/components/atoms/Spinner'
import styles from './ContentHeader.module.css'

export interface Props {
  currentRoute?: string
  links: {
    text: string
    to: string
  }[]
  loading?: boolean
}

const ContentHeader: React.FC<Props> = ({ links, currentRoute, loading }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/">
          <img src="/bobsburgers.png" className={styles.logo} alt="Home" />
        </Link>
      </div>
      <div className={styles['toggle-wrapper']}>
        <Button
          className={styles['toggle-button']}
          // dark={!mobileOpen}
          red={mobileOpen}
          hollow={mobileOpen}
          onClick={() => {
            setMobileOpen(!mobileOpen)
          }}
        >
          {mobileOpen ? '❌' : '🍔'}
        </Button>
      </div>
      <div
        className={clsx(
          styles.links,
          mobileOpen ? styles['mobile-open'] : undefined
        )}
      >
        <div className={styles.grow}>
          {links.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className={clsx(
                styles.link,
                currentRoute?.includes(to) ? styles.active : undefined
              )}
            >
              {text}
            </Link>
          ))}
        </div>
        <div className={styles.loading}>
          {!!loading && <Spinner color={colors['palette-dark-blue']} />}
        </div>
      </div>
    </nav>
  )
}

export default ContentHeader
