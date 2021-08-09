import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshTypescript from 'react-refresh-typescript'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_PATH = path.join(__dirname, '../..')

export default ({ env = 'production' }) => {
  return {
    mode: env,
    ...(env === 'development' && {
      devServer: {
        hot: true,
        port: 5000,
      },
    }),
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
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: `${ROOT_PATH}/config/typescript/tsconfig.json`,
              getCustomTransformers: () => ({
                before: env === 'development' ? [ReactRefreshTypescript()] : [],
              }),
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
                sourceMap: env === 'development',
              },
            },
          ],
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
      env === 'development' && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    output: {
      filename: 'main.js',
      path: `${ROOT_PATH}/dist`,
    },
  }
}
