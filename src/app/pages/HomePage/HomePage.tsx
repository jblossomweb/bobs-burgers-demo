import React from 'react'
import HeroTemplate from 'app/templates/HeroTemplate'
import Button from 'app/components/atoms/Button'
import styles from './HomePage.module.css'

const HomePage: React.FC = () => (
  <HeroTemplate title="Home Page">
    <h1>
      <img src="/bobsburgers.png" className={styles.logo} alt="Bob's Burgers" />
    </h1>
    <div className={styles.buttons}>
      <Button>Characters</Button>
      <Button>Episodes</Button>
    </div>
  </HeroTemplate>
)

export default HomePage
