import React from 'react'
import type Episode from 'app/models/Episode'
import EpisodeCard from 'app/components/molecules/EpisodeCard'
import styles from './EpisodesList.module.css'

export interface Props {
  episodes: Episode[]
}

const EpisodesList: React.FC<Props> = ({ episodes }) => (
  <div className={styles.list}>
    {episodes.map((episode) => (
      <EpisodeCard key={episode.id} episode={episode} />
    ))}
  </div>
)

export default EpisodesList
