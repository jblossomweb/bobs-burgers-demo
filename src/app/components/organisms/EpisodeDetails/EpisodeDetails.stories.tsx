import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import mockEpisode from 'app/models/__mocks__/episode.json'

import EpisodeDetails, { type Props } from './EpisodeDetails'

export default {
  title: 'components/organisms/EpisodeDetails',
  component: EpisodeDetails,
  argTypes: {
    episode: { control: 'object' },
  },
} as ComponentMeta<typeof EpisodeDetails>

const Template: ComponentStory<typeof EpisodeDetails> = ({
  episode,
}: Props) => <EpisodeDetails episode={episode} />

export const Sample = Template.bind({})
Sample.args = {
  episode: mockEpisode,
}
