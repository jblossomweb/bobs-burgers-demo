import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './HeroTemplate.module.css'

export interface Props {
  title: string
  children: React.ReactNode
}

const HeroTemplate: React.FC<Props> = ({ title, children }) => (
  <div className={styles.container}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <header className={styles.header}>{children}</header>
  </div>
)

export default HeroTemplate
