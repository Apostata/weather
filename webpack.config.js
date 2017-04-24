const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill', // emulate a full ES2015 environment
    './src/styles/main.scss',
    'app.jsx',
  ],
  plugins: [
    new ExtractTextPlugin('styles.css'), // creates a separate file for bundle.css
  ],
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
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
// env is a Babel preset that automatically determines the Babel plugins you need
// based on your supported environments:
        presets: ['env', 'react', 'es2017'],
      },
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'], // transforms scss into css
      }),
    },
    ],
  },
  devtool: 'source-map', // Base file in dev tools instead of bundle.js
  devServer: {
// Always return the main index.html, so react-router render the route in the client
    historyApiFallback: {
      index: '/',
    },
  },
};
