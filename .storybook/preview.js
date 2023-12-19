import { initialize, mswLoader } from 'msw-storybook-addon'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  loaders: [mswLoader]
}

export default preview

initialize({
  onUnhandledRequest: (request, callback) => {
    if (!["script"].includes(request.destination)) {
      console.log(1111111, request.destination, request.url)
      console.error('-------------- unhandled fetch request ------------');
      callback.error();
    }
  }
})
