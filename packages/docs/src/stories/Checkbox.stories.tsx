import { Box, Text, Checkbox, CheckboxProps } from '@stephany-ignite-ui/react'
import { StoryObj } from '@storybook/react/'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story: () => string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => {
      return (
        <Box as='label'  css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size='sm'>Accept terms of use</Text>
        </Box>
      )
    }
  ]
}

export const Primary: StoryObj<CheckboxProps> = {}
