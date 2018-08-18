const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    })
  ],
  externals: [nodeExternals()],
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      process.env.NODE_PATH ? path.resolve(__dirname, process.env.NODE_PATH) : '',
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /markers\/\w+\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /markers\/\w+\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'assets/[name].[ext]?[hash]'
        }
      },
      {
        test: require.resolve('leaflet'),
        loader: 'expose-loader?L'
      }
    ]
  }
};
