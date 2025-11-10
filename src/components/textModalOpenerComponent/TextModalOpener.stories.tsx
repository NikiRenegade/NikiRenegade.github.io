import type { Meta, StoryObj } from '@storybook/react';

import { TextModalOpener } from './TextModalOpener';
import { ThemeProvider } from '../../contexts/ThemeContext';
import React from 'react';

const meta: Meta<typeof TextModalOpener> = {
  title: 'Components/TextModalOpener (SCSS)',
  component: TextModalOpener,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextModalOpener>;

export const Default: Story = {};
