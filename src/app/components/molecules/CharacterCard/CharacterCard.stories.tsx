import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import mockCharacter from 'app/models/__mocks__/character.json'

import CharacterCard, { type Props } from './CharacterCard'

export default {
  title: 'components/molecules/CharacterCard',
  component: CharacterCard,
  argTypes: {
    character: { control: 'object' },
  },
} as ComponentMeta<typeof CharacterCard>

const Template: ComponentStory<typeof CharacterCard> = ({
  character,
}: Props) => <CharacterCard character={character} />

export const Sample = Template.bind({})
Sample.args = {
  character: mockCharacter,
}
