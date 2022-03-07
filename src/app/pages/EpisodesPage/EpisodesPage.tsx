import React from 'react'
import ContentTemplate from 'app/templates/ContentTemplate'
import useAllEpisodes from 'app/hooks/useAllEpisodes'
import EpisodesList from 'app/components/organisms/EpisodesList'

const EpisodesPage: React.FC = () => {
  const { data, loading, error } = useAllEpisodes()
  return (
    <ContentTemplate title="Episodes" loading={loading}>
      {!!loading && <div>loading...</div>}
      {!!error && <div>{error.message}</div>}
      {!!data && <EpisodesList episodes={data} />}
    </ContentTemplate>
  )
}

export default EpisodesPage
