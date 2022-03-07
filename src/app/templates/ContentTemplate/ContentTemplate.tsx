import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import ContentHeader from 'app/components/molecules/ContentHeader'
import styles from './ContentTemplate.module.css'

export interface Props {
  title: string
  loading?: boolean
  children: React.ReactNode
}

const ContentTemplate: React.FC<Props> = ({ title, loading, children }) => {
  const { pathname } = useLocation()
  return (
    <div className={styles.container}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ContentHeader
        loading={loading}
        currentRoute={pathname}
        links={[
          { text: 'Characters', to: '/characters' },
          { text: 'Episodes', to: '/episodes' },
        ]}
      />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default ContentTemplate
