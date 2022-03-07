import React from 'react'
import { Link } from 'react-router-dom'
import type Character from 'app/models/Character'
import Button from 'app/components/atoms/Button'
import Card from 'app/components/atoms/Card'
import CharacterAvatar from 'app/components/ions/CharacterAvatar'
import styles from './CharacterDetails.module.css'

export interface Props {
  character: Character
  relatives?: Character[]
}

const CharacterDetails: React.FC<Props> = ({ character, relatives }) => (
  <div className={styles.wrapper}>
    <Card
      className={styles.card}
      head={
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
        />
      }
    />
    <div className={styles.content}>
      <h1>{character.name}</h1>
      <p>{character.occupation}</p>
      <ul>
        <li>First Episode: {character.firstEpisode}</li>
        <li>Voiced By: {character.voicedBy}</li>
        <li>Gender: {character.gender}</li>
        {!!character.age && <li>Age: {character.age}</li>}
        {!!character.hairColor && <li>Hair: {character.hairColor}</li>}
      </ul>
      {!!relatives?.length && (
        <div>
          <h2>Related Characters:</h2>
          <div className={styles.related}>
            {relatives.map((relative) => (
              <CharacterAvatar key={relative.id} character={relative} />
            ))}
          </div>
        </div>
      )}
      <div className={styles.links}>
        <Link to="/characters">
          <Button hollow>&lt; All Characters</Button>
        </Link>
      </div>
    </div>
  </div>
)

export default CharacterDetails
