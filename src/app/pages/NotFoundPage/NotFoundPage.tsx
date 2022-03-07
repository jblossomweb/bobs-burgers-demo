import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'app/components/atoms/Button'
import HeroTemplate from 'app/templates/HeroTemplate'
import styles from './NotFoundPage.module.css'

const NotFoundPage: React.FC = () => (
  <HeroTemplate title="404: Not Found">
    <h1 className={styles.header}>Sorry! That page was not found.</h1>
    <p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </p>
  </HeroTemplate>
)

export default NotFoundPage
