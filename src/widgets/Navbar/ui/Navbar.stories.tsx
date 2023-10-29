import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({
  })],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
  ],
};

export const AuthNavbar: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: {} },
    }),
  ],
};
