const path = require('path');

module.exports = {
  entry: ['babel-polyfill', 'app.jsx'], // emulate a full ES2015 environment
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
// Sets the path for the modules and makes it unnecessary to indicate the extensions:
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
// env is a Babel preset that automatically determines the Babel plugins you need
// based on your supported environments:
        presets: ['env', 'react', 'es2017'],
      },
    }],
  },
  devtool: 'source-map', // Base file in dev tools instead of bundle.js
  devServer: {
// Always return the main index.html, so react-router render the route in the client
    historyApiFallback: {
      index: '/',
    },
  },
};
