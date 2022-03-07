import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
import useSwr from 'swr'
import config from 'app/config.json'
import type Episode from 'app/models/Episode'

const useAllEpisodes = () => {
  const { data, error } = useSwr<AxiosResponse<Episode[]>, AxiosError>(
    `${config.apiBase}/episodes`,
    axios.get
  )

  return {
    loading: !error && !data?.data,
    data: data?.data,
    error,
  }
}

export default useAllEpisodes
