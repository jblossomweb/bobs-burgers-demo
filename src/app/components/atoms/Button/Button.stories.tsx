import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Button, { type Props } from './Button'

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: Props) => (
  <Button {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  children: 'Sample Button',
}

export const Hollow = Template.bind({})
Hollow.args = {
  ...Sample.args,
  hollow: true,
}

export const Yellow = Template.bind({})
Yellow.args = {
  ...Sample.args,
  yellow: true,
}

export const Red = Template.bind({})
Red.args = {
  ...Sample.args,
  red: true,
}

export const YellowHollow = Template.bind({})
YellowHollow.args = {
  ...Sample.args,
  yellow: true,
  hollow: true,
}

export const RedHollow = Template.bind({})
RedHollow.args = {
  ...Sample.args,
  red: true,
  hollow: true,
}
