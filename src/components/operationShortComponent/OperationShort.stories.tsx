import type { Meta, StoryObj } from '@storybook/react';

import { OperationShortMemo } from './OperationShort';
import { ThemeProvider } from '../../contexts/ThemeContext';
import React from 'react';

const meta: Meta<typeof OperationShortMemo> = {
  title: 'Components/OperationShort',
  component: OperationShortMemo,
  argTypes: {
    operation: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OperationShortMemo>;

export const Positive: Story = {
  args: {
    operation: {
      title: 'Получение заработной платы',
      category: 'ЗП',
      description: 'Оплата за первую половину месяца',
      amount: 150000,
    },
  },
};
export const Negative: Story = {
  args: {
    operation: {
      title: 'Покупка в магазине',
      category: 'Продуктовый магазин',
      description: 'Ненужная покупка в продуктовом магазине.',
      amount: -5000,
    },
  },
};
