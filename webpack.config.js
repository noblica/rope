const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: __dirname,
  entry: './index.ts',
  devServer: {
       contentBase: './dist'
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: [
                {
                  loader: 'ts-loader',
                }
              ]
          },
          {
            test: /\.(css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                    minimize: false,
                    sourceMap: true,
                    importLoaders: 2
                }
              }
            ],
          }
      ]
  },
  resolve: {
      extensions: [ '.ts', '.tsx', '.js' ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
  })
  ],
};
