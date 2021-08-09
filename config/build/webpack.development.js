import { merge } from 'webpack-merge'
import ReactRefreshTypescript from 'react-refresh-typescript'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import common, { ROOT_PATH } from './webpack.common.js'

const development = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: `${ROOT_PATH}/config/typescript/tsconfig.json`,
            getCustomTransformers: () => ({ before: [ReactRefreshTypescript()] }),
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
}

export default merge(common, development)
