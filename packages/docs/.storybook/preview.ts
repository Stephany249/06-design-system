import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark'
    },
    docs: {
      theme: themes.dark,
    }
  },
};

export default preview;