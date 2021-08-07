import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshTypescript from 'react-refresh-typescript'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export default ({ env = 'production' }) => {
  return {
    mode: env,
    ...(env === 'development' && {
      devServer: {
        hot: true,
      },
    }),
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
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
        template: './public/index.html',
      }),
      env === 'development' && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    output: {
      filename: 'main.js',
      path: new URL('./dist', import.meta.url).pathname,
    },
  }
}
