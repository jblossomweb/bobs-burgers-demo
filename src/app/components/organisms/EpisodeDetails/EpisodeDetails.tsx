import React from 'react'
import { Link } from 'react-router-dom'
import type Episode from 'app/models/Episode'
import Button from 'app/components/atoms/Button'
import styles from './EpisodeDetails.module.css'

export interface Props {
  episode: Episode
}

const EpisodeDetails: React.FC<Props> = ({ episode }) => (
  <div className={styles.content}>
    <h1>{episode.name}</h1>
    <h3>
      S{episode.season}E{episode.episode}
    </h3>
    <p>{episode.airDate}</p>
    <ul>
      <li>Production Code: {episode.productionCode}</li>
      <li>Total Viewers: {episode.totalViewers}</li>
    </ul>
    <div className={styles.links}>
      <Link to="/episodes">
        <Button hollow>&lt; All Episodes</Button>
      </Link>
    </div>
  </div>
)

export default EpisodeDetails
