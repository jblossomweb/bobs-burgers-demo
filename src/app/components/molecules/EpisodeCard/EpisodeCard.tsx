import React from 'react'
import { Link } from 'react-router-dom'
import type Episode from 'app/models/Episode'
import Button from 'app/components/atoms/Button'
import Card from 'app/components/atoms/Card'
import styles from './EpisodeCard.module.css'

export interface Props {
  episode: Episode
}

const EpisodeCard: React.FC<Props> = ({ episode }) => (
  <Card
    className={styles.card}
    width={400}
    title={episode.name}
    foot={
      <Link to={`/episodes/${episode.id}`}>
        <Button className={styles.button}>Details...</Button>
      </Link>
    }
  >
    <p className={styles.info}>{episode.airDate}</p>
  </Card>
)

export default EpisodeCard
