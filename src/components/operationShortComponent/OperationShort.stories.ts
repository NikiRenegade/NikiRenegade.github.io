import type { Meta, StoryObj } from '@storybook/react';

import { OperationShort } from './OperationShort';

const meta: Meta<typeof OperationShort> = {
  title: 'Components/OperationShort',
  component: OperationShort,
  argTypes: {
    title: { control: 'text' },
    category: { control: 'text' },
    description: { control: 'text' },
    amount: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof OperationShort>;

export const Positive: Story = {
  args: {
    title: 'Получение заработной платы',
    category: 'ЗП',
    description: 'Оплата за первую половину месяца',
    amount: 150000,
  },
};
export const Negative: Story = {
  args: {
    title: 'Покупка в магазине',
    category: 'Продуктовый магазин',
    description: 'Ненужная покупка в продуктовом магазине.',
    amount: -5000,
  },
};
