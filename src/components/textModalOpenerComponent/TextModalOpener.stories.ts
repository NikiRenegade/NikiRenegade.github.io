import type { Meta, StoryObj } from '@storybook/react';

import { TextModalOpener } from './TextModalOpener';

const meta: Meta<typeof TextModalOpener> = {
  title: 'Components/TextModalOpener (SCSS)',
  component: TextModalOpener,
};

export default meta;
type Story = StoryObj<typeof TextModalOpener>;

export const Default: Story = {};
