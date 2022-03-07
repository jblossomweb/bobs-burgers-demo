import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import mockCharacter from 'app/models/__mocks__/character.json'
import mockRelatives from 'app/models/__mocks__/relatives.json'

import CharacterDetails, { type Props } from './CharacterDetails'

export default {
  title: 'components/organisms/CharacterDetails',
  component: CharacterDetails,
  argTypes: {
    character: { control: 'object' },
    relatives: { control: 'object' },
  },
} as ComponentMeta<typeof CharacterDetails>

const Template: ComponentStory<typeof CharacterDetails> = ({
  character,
  relatives,
}: Props) => <CharacterDetails character={character} relatives={relatives} />

export const Sample = Template.bind({})
Sample.args = {
  character: mockCharacter,
}

export const Relatives = Template.bind({})
Relatives.args = {
  ...Sample.args,
  relatives: mockRelatives as Props['relatives'],
}
