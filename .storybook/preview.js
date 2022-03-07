import 'app/global.css'
import { MemoryRouter } from 'react-router-dom'
import { jsxDecorator } from 'storybook-addon-jsx'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
}

export const decorators = [
  jsxDecorator,
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
]
