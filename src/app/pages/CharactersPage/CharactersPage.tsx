import React from 'react'
import ContentTemplate from 'app/templates/ContentTemplate'
import useAllCharacters from 'app/hooks/useAllCharacters'
import CharactersList from 'app/components/organisms/CharactersList'

const CharactersPage: React.FC = () => {
  const { data, loading, error } = useAllCharacters()
  return (
    <ContentTemplate title="Characters" loading={loading}>
      {!!loading && <div>loading...</div>}
      {!!error && <div>{error.message}</div>}
      {!!data && <CharactersList characters={data} />}
    </ContentTemplate>
  )
}

export default CharactersPage
