// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces();
} catch (e) {
  require('os').networkInterfaces = () => ({});
}

var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '../node_modules/photoeditorsdk/assets',
        to: 'assets'
      },
      {
        from: 'index.html',
        to: ''
      }
    ])
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  entry: './application'
}
