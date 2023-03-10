const { merge } = require('webpack-merge');
const base = require('./webpack.common');

module.exports = (async () => {
  return await merge(base, {
    mode: 'development',
    devServer: {
      client: {
        logging: 'none',
      },
      allowedHosts: ['.preview.csb.app'],
      port: 6660,
    },
  });
})();
