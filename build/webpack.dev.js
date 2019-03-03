const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './demo/main.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './demo',
    historyApiFallback: true,
    port: 7777,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
}
