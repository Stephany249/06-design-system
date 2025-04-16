import { Box, Text, TextArea, TextAreaProps } from '@stephany-ignite-ui/react'
import { StoryObj } from '@storybook/react/'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story: () => string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => {
      return (
        <Box as='label'  css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size='sm'>Observations</Text>
          {Story()}
        </Box>
      )
    }
  ]
}

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

