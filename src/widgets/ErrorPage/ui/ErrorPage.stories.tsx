import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
