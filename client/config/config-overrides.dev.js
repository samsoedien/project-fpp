const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
    ],
  },
  resolve: {
    alias: {
      'three/OrbitControls': path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
      'three/OBJLoader': path.join(__dirname, 'node_modules/three/examples/js/loaders/OBJLoader.js'),
      'three/MTLLoader': path.join(__dirname, 'node_modules/three/examples/js/loaders/MTLLoader.js'),
      'three/STLLoader': path.join(__dirname, 'node_modules/three/examples/js/loaders/STLLoader.js'),
      'three/STLExporter': path.join(__dirname, 'node_modules/three/examples/js/exporters/STLExporter.js'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.ProvidePlugin({
      THREE: 'three',
    }),
  ],
};
