import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(ts|tsx|js|jsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => ({
    ...config,
    server: {
      ...config.server,
      allowedHosts: true,
    },
  }),
};

export default config;
