import { Avatar, AvatarProps } from "@ignite-ui/react"
import { StoryObj } from "@storybook/react"

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/stephany249.png',
    alt: 'Stephany Pereira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}