export default {
  /**
   * Function that mutates the original webpack config.
   * Supports asynchronous changes when a promise is returned (or it's an async function).
   *
   * @param {object} config - original webpack config.
   * @param {object} env - options passed to the CLI.
   * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
   * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
   **/
  webpack(config, env, helpers, options) {
    /** you can change the config here **/
    const { plugin } = helpers.getPluginsByName(config, "DefinePlugin")[0];
    Object.assign(plugin.definitions, {
      "process.env": {
        NODE_ENV:
          JSON.stringify(process.env.NODE_ENV) || JSON.stringify("development"),
        BUILD_ENV_VAL:
          JSON.stringify(process.env.BUILD_ENV_VAL) ||
          JSON.stringify("development"),
      },
    });
  },
};
