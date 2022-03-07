import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentTemplate, { type Props } from './ContentTemplate'

export default {
  title: 'templates/ContentTemplate',
  component: ContentTemplate,
  argTypes: {
    title: { control: 'text' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof ContentTemplate>

const Template: ComponentStory<typeof ContentTemplate> = ({
  title,
  loading,
  children,
}: Props) => (
  <ContentTemplate title={title} loading={loading}>
    {children}
  </ContentTemplate>
)

export const Sample = Template.bind({})
Sample.args = {
  title: 'Sample',
  children: 'Page content',
}

export const Loading = Template.bind({})
Loading.args = {
  title: 'Loading',
  loading: true,
  children: 'Page content',
}
