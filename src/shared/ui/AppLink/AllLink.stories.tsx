import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark: Story = {
  args: {
    ...Primary.args,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    ...Secondary.args,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
  args: {
    ...Red.args,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
