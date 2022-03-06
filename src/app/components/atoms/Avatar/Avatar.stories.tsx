import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar, { type Props } from './Avatar'

export default {
  title: 'components/atoms/Avatar',
  component: Avatar,
  argTypes: {
    color: { control: 'color' },
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args: Props) => (
  <Avatar {...args} />
)

export const Image = Template.bind({})
Image.args = {
  // eslint-disable-next-line jsx-a11y/alt-text
  children: <img src="https://picsum.photos/80/80" />,
}

export const Letter = Template.bind({})
Letter.args = {
  children: <div style={{ width: '80px', height: '80px' }}>JB</div>,
}
