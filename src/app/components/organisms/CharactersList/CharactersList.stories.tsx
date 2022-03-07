import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import mockCharacters from 'app/models/__mocks__/relatives.json'

import CharactersList, { type Props } from './CharactersList'

export default {
  title: 'components/organisms/CharactersList',
  component: CharactersList,
  argTypes: {
    characters: { control: 'object' },
  },
} as ComponentMeta<typeof CharactersList>

const Template: ComponentStory<typeof CharactersList> = ({
  characters,
}: Props) => <CharactersList characters={characters} />

export const Sample = Template.bind({})
Sample.args = {
  characters: mockCharacters as Props['characters'],
}
