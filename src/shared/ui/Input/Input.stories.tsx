import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Input text',
    value: '123123',
  },
};
