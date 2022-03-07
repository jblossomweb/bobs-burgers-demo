import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentHeader, { type Props } from './ContentHeader'

const links = [
  { text: 'Characters', to: '/characters' },
  { text: 'Episodes', to: '/episodes' },
]

export default {
  title: 'components/molecules/ContentHeader',
  component: ContentHeader,
  argTypes: {
    loading: { control: 'boolean' },
    currentRoute: { control: 'text' },
    links: { control: 'object' },
  },
} as ComponentMeta<typeof ContentHeader>

const Template: ComponentStory<typeof ContentHeader> = (args: Props) => (
  <ContentHeader {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  links,
}

export const Loading = Template.bind({})
Loading.args = {
  links,
  loading: true,
}

export const CurrentRoute = Template.bind({})
CurrentRoute.args = {
  links,
  currentRoute: links[0].to,
}
