import HtmlWebpackPlugin from 'html-webpack-plugin'

export const ROOT_PATH = new URL('../..', import.meta.url).pathname

export default {
  entry: `${ROOT_PATH}/src/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${ROOT_PATH}/public/index.html`,
    }),
  ],
  output: {
    filename: 'main.js',
    path: `${ROOT_PATH}/dist`,
    clean: true,
  },
}
