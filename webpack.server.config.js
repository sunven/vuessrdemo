const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  target: 'node',
  entry: {
    server: './src/entry-server.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
});
