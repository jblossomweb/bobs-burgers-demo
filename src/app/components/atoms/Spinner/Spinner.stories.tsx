import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Spinner from './Spinner'

export default {
  title: 'components/atoms/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 160,
}

export const Color = Template.bind({})
Color.args = {
  color: '#bada55',
}
