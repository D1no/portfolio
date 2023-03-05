import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.story.@(js|jsx|ts|tsx)",

    // UI Workspace
    "../node_modules/ui/**/*.mdx)",
    "../node_modules/ui/**/*.stories.@(js|jsx|ts|tsx)",
    "../node_modules/ui/**/*.story.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    // Telemetry for Storybook Team
    disableTelemetry: false,
    enableCrashReports: true,
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
