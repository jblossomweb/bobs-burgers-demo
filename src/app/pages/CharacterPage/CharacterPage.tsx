import React from 'react'
import { useParams } from 'react-router-dom'
import ContentTemplate from 'app/templates/ContentTemplate'
import useCharacterDetails from 'app/hooks/useCharacterDetails'
import CharacterDetails from 'app/components/organisms/CharacterDetails'

const CharacterPage: React.FC = () => {
  const { id } = useParams()
  const { character, relatives, loading, error } = useCharacterDetails(
    Number(id)
  )

  return (
    <ContentTemplate title={character?.name || 'Character'} loading={loading}>
      {!!loading && <div>loading...</div>}
      {!!error && <div>{error.message}</div>}
      {!!character && (
        <CharacterDetails character={character} relatives={relatives} />
      )}
    </ContentTemplate>
  )
}

export default CharacterPage
