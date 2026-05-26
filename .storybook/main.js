module.exports = {
  stories: ["../src/stories/**/*.stories.(ts|tsx|js|jsx)"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  addons: ["@chromatic-com/storybook", "@storybook/preset-create-react-app"]
};
