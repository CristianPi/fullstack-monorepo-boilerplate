// Helper for combining webpack config objects
const {merge} = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (config, context) => {
  // double check, nah!!
  config.plugins = config.plugins.filter((p) => {
    if (p instanceof ForkTsCheckerWebpackPlugin) {
      return false;
    }
    return true;
  })
  // disable this to allow transformer
  config.module.rules[0].options.transpileOnly = false;
  // breaks import side effects!!!
  config.optimization = undefined;
  console.dir(config, {depth: 99})
  return merge(config, {
    // overwrite values here
  });
};
