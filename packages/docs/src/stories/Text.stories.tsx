import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from "@ignite-ui/react"

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium dolores mollitia fuga harum aliquid adipisci vitae hic impedit! Voluptates cum fugiat cupiditate odio rem est quisquam saepe unde tempore.'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  	
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}

