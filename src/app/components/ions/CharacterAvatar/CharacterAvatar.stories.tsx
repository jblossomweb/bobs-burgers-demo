import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import mockCharacter from 'app/models/__mocks__/character.json'

import CharacterAvatar, { type Props } from './CharacterAvatar'

export default {
  title: 'components/ions/CharacterAvatar',
  component: CharacterAvatar,
  argTypes: {
    character: { control: 'object' },
  },
} as ComponentMeta<typeof CharacterAvatar>

const Template: ComponentStory<typeof CharacterAvatar> = ({
  character,
}: Props) => <CharacterAvatar character={character} />

export const Sample = Template.bind({})
Sample.args = {
  character: mockCharacter,
}
