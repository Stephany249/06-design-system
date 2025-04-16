import { Box, Text, TextInput, TextInputProps } from '@stephany-ignite-ui/react'
import { StoryObj } from '@storybook/react/'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story: () => string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => {
      return (
        <Box as='label'  css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size='sm'>Email address</Text>
          {Story()}
        </Box>
      )
    }
  ]
}

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}