import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from 'app/components/atoms/Button'

import Card, { type Props } from './Card'

export default {
  title: 'components/atoms/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    width: { control: 'number' },
    children: { control: 'text' },
    head: { control: 'none' },
    foot: { control: 'none' },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = ({
  title,
  width,
  head,
  foot,
  children,
}: Props) => (
  <Card title={title} width={width} head={head} foot={foot}>
    {children}
  </Card>
)

// storybook borks on the next image when injected through a prop
// so we use a regular img tag
const renderImage = (width?: number) => (
  <img src="https://picsum.photos/600/400" width={width} alt="sample" />
)

const renderButton = () => <Button>Button</Button>

export const Sample = Template.bind({})
Sample.args = {
  title: 'Sample Card',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export const Sized = Template.bind({})
Sized.args = {
  ...Sample.args,
  width: 400,
}

export const WithImage = Template.bind({})
WithImage.args = {
  ...Sample.args,
  width: 400,
  head: renderImage(400),
}

export const WithButton = Template.bind({})
WithButton.args = {
  ...Sample.args,
  width: 400,
  foot: renderButton(),
}

export const WithBoth = Template.bind({})
WithBoth.args = {
  ...Sample.args,
  width: 400,
  head: renderImage(400),
  foot: renderButton(),
}
