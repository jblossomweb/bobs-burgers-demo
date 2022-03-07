import config from 'app/config.json'
import type Character from 'app/models/Character'
import useCharactersByIds from 'app/hooks/useCharactersByIds'

const mapRelativeIds = (relatives: string[]) =>
  relatives
    .filter((r) => r.includes(config.apiBase))
    .map((relative) => {
      const splits = relative.split('/')
      return Number(splits[splits.length - 1])
    })

const useCharacterDetails = (id: Character['id']) => {
  const main = useCharactersByIds([Number(id)])

  const [character] = main?.data || []
  const relativeIds = character?.relatives
    ? mapRelativeIds(character.relatives)
    : []

  const rels = useCharactersByIds(relativeIds)
  const relatives = rels?.data || []

  const loading = main?.loading || rels?.loading
  const error = main?.error || rels?.error

  return { character, relatives, loading, error }
}

export default useCharacterDetails
