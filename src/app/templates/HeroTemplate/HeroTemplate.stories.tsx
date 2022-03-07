import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import HeroTemplate, { type Props } from './HeroTemplate'

export default {
  title: 'templates/HeroTemplate',
  component: HeroTemplate,
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof HeroTemplate>

const Template: ComponentStory<typeof HeroTemplate> = ({
  title,
  children,
}: Props) => <HeroTemplate title={title}>{children}</HeroTemplate>

export const Sample = Template.bind({})
Sample.args = {
  title: 'Sample',
  children: 'Page content',
}
