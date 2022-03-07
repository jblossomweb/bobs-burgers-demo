import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
import useSwr from 'swr'
import config from 'app/config.json'
import type Episode from 'app/models/Episode'

const useEpisode = (id: Episode['id']) => {
  const { data, error } = useSwr<AxiosResponse<Episode>, AxiosError>(
    `${config.apiBase}/episodes/${id}`,
    axios.get
  )

  return {
    loading: !error && !data?.data,
    data: data?.data,
    error,
  }
}

export default useEpisode
