import React from 'react'
import { Link } from 'react-router-dom'
import type Character from 'app/models/Character'
import Avatar from 'app/components/atoms/Avatar'
import styles from './CharacterAvatar.module.css'

export interface Props {
  character: Character
}

const CharacterAvatar: React.FC<Props> = ({ character }) => (
  <Avatar className={styles.avatar}>
    <div className={styles.wrapper}>
      <Link to={`/characters/${character.id}`}>
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
        />
      </Link>
    </div>
  </Avatar>
)

export default CharacterAvatar
