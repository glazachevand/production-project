import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing e',
    isOpen: true,
  },
};

export const Darl: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing e',
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
