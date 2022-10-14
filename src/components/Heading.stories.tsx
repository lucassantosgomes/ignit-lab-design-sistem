import { Heading, HeadingProps } from './Heading'
import {Meta, StoryObj} from '@storybook/react'
export default{
  title: 'Components/Headingt',
  component: Heading,
  args:{
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>
export const Default: StoryObj<HeadingProps> = {}
export const Smoll: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (<h1>text with h1 tag</h1>)
  },
  argTypes: {
    children:{
      table:{
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}