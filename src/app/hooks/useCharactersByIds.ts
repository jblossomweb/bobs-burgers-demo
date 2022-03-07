import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
import useSwr from 'swr'
import config from 'app/config.json'
import type Character from 'app/models/Character'

const useCharactersByIds = (ids: Character['id'][]) => {
  const { data, error } = useSwr<AxiosResponse<Character[]>, AxiosError>(
    `${config.apiBase}/characters/[${ids.join(',')}]`,
    axios.get
  )

  return {
    loading: !error && !data?.data,
    data: data?.data,
    error,
  }
}

export default useCharactersByIds
