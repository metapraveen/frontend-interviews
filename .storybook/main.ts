import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(ts|tsx|js|jsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    allowedHosts: true,
  },
};

export default config;
