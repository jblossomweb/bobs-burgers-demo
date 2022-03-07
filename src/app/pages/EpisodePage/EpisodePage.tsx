import React from 'react'
import { useParams } from 'react-router-dom'
import ContentTemplate from 'app/templates/ContentTemplate'
import useEpisode from 'app/hooks/useEpisode'
import EpisodeDetails from 'app/components/organisms/EpisodeDetails'

const EpisodePage: React.FC = () => {
  const { id } = useParams()
  const { data, loading, error } = useEpisode(Number(id))

  return (
    <ContentTemplate title={data?.name || 'Episode'} loading={loading}>
      {!!loading && <div>loading...</div>}
      {!!error && <div>{error.message}</div>}
      {!!data && <EpisodeDetails episode={data} />}
    </ContentTemplate>
  )
}

export default EpisodePage
