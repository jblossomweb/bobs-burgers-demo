/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Card, { type Props } from './Card'

export default {
  title: 'components/atoms/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    width: { control: 'number' },
    children: { control: 'text' },
    head: { control: 'none' },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = ({
  title,
  width,
  children,
}: Props) => (
  <Card title={title} width={width}>
    {children}
  </Card>
)

// storybook borks on the next image when injected through a prop
// so we use a regular img tag
const renderImage = (width?: number) => (
  <img src="https://picsum.photos/600/400" width={width} />
)

const ImageTemplate: ComponentStory<typeof Card> = ({
  title,
  width,
  children,
}: Props) => (
  <Card title={title} width={width} head={renderImage(width)}>
    {children}
  </Card>
)

export const Sample = Template.bind({})
Sample.args = {
  title: 'Sample Card',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export const Sized = Template.bind({})
Sized.args = {
  ...Sample.args,
  width: 400,
}

export const WithImage = ImageTemplate.bind({})
WithImage.args = {
  ...Sample.args,
  width: 400,
}
