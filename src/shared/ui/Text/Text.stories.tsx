import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Description Description Description Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
