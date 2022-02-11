module.exports = {
  "stories": [
    "../src/stories/*.stories.js",
    "../src/components/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
