import type { Meta, StoryObj } from '@storybook/react';
import { OperationFull } from './OperationFull';

const meta: Meta<typeof OperationFull> = {
  title: 'Components/OperationFull',
  component: OperationFull,
  argTypes: {
    title: { control: 'text' },
    category: { control: 'text' },
    description: { control: 'text' },
    amount: { control: 'text' },
    dateTime: { control: 'text' },
    categoryColor: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof OperationFull>;

export const Default: Story = {
  args: {
    title: 'Покупка в магазине',
    category: 'Продуктовый магазин',
    description: 'Ненужная покупка в продуктовом магазине. D котором было куплено много всего',
    amount: 5000,
    dateTime: '2025-10-16T14:39:00',
    categoryColor: 'gray',
  },
};
