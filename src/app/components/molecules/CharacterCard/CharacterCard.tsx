import React from 'react'
import { Link } from 'react-router-dom'
import type Character from 'app/models/Character'
import Button from 'app/components/atoms/Button'
import Card from 'app/components/atoms/Card'
import CharacterAvatar from 'app/components/ions/CharacterAvatar'
import styles from './CharacterCard.module.css'

export interface Props {
  character: Character
}

const CharacterCard: React.FC<Props> = ({ character }) => (
  <Card
    className={styles.card}
    width={300}
    title={character.name}
    foot={
      <Link to={`/characters/${character.id}`}>
        <Button className={styles.button}>Details...</Button>
      </Link>
    }
  >
    <CharacterAvatar character={character} />
    <p className={styles.info}>{character.occupation}</p>
  </Card>
)

export default CharacterCard
