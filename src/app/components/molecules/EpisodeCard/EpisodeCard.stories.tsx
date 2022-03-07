import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import mockEpisode from 'app/models/__mocks__/episode.json'

import EpisodeCard, { type Props } from './EpisodeCard'

export default {
  title: 'components/molecules/EpisodeCard',
  component: EpisodeCard,
  argTypes: {
    episode: { control: 'object' },
  },
} as ComponentMeta<typeof EpisodeCard>

const Template: ComponentStory<typeof EpisodeCard> = ({ episode }: Props) => (
  <EpisodeCard episode={episode} />
)

export const Sample = Template.bind({})
Sample.args = {
  episode: mockEpisode,
}
