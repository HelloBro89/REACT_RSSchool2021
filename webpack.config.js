const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let pathToCss = '/';
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  pathToCss = '';
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode,
  entry: {
    main: './index.jsx',
    // testEntry: "./testEntry.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: pathToCss,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: './assets',
            },
          },
        ],
      },
      {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// let mode = 'development';
// if (process.env.NODE_ENV === 'production') {
//   mode = 'production';
// }
// module.exports = {
//   mode,
//   entry: './src/index.jsx',
//   devtool: 'source-map',
//   output: {
//     filename: '[name].[contenthash].js',
//     path: path.resolve(__dirname, 'dist'),
//     // filename: 'bundle.js'
//   },
//   devServer: {
//     historyApiFallback: true,
//     port: 3000,
//     open: true,
//   },
//   performance: {
//     hints: false,
//     maxEntrypointSize: 512000,
//     maxAssetSize: 512000,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: [/* MiniCssExtractPlugin.loader, */ 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//     // new MiniCssExtractPlugin({
//     //   filename: 'styles.css',
//     // }),
//     new CleanWebpackPlugin(),
//   ],
// };
