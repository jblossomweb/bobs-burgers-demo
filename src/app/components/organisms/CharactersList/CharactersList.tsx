import React from 'react'
import type Character from 'app/models/Character'
import CharacterCard from 'app/components/molecules/CharacterCard'
import styles from './CharactersList.module.css'

export interface Props {
  characters: Character[]
}

const CharactersList: React.FC<Props> = ({ characters }) => (
  <div className={styles.list}>
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </div>
)

export default CharactersList
