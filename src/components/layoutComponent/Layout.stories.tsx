import type { Meta } from '@storybook/react';

import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <h1>Заголовок контента страницы</h1>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <p>Контента внутри</p>
      </div>
    ),
  },
};
