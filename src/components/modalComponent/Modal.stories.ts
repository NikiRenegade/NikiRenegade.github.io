import type { Meta } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal (SCSS)',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    visible: true,
    children: 'Контент модального окна',
  },
};