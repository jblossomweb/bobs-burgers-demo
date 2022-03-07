import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import mockEpisodes from 'app/models/__mocks__/episodes.json'

import EpisodesList, { type Props } from './EpisodesList'

export default {
  title: 'components/organisms/EpisodesList',
  component: EpisodesList,
  argTypes: {
    episodes: { control: 'object' },
  },
} as ComponentMeta<typeof EpisodesList>

const Template: ComponentStory<typeof EpisodesList> = ({ episodes }: Props) => (
  <EpisodesList episodes={episodes} />
)

export const Sample = Template.bind({})
Sample.args = {
  episodes: mockEpisodes as Props['episodes'],
}
