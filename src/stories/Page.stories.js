import { within, userEvent } from '@storybook/testing-library';
import MyPage from './Page.vue';

export default {
  component: MyPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const Test = {
  render: () => ({
    components: {
      MyPage,
    },
    template: '<my-page />',
  }),
  play: async ({ canvasElement }) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1100));
  },
};
