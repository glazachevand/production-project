import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
  })],
};

export const WithError: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: 'dfgfd23', error: 'ERROR' },
  })],
};

export const Loading: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { isLoading: true },
  })],
};
