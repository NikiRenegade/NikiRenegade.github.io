import type { Meta, StoryObj } from '@storybook/react';
import { OperationList } from './OperationList';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { createRandomOperationShort } from '../../homeworks/ts1/3_write';
import React from 'react';

const meta: Meta<typeof OperationList> = {
  title: 'Components/OperationList',
  component: OperationList,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
const operationsArray = [...Array(20)].map(() => createRandomOperationShort());
export default meta;
type Story = StoryObj<typeof OperationList>;

export const Default: Story = {
  args: {
    operations: operationsArray,
  },
};
