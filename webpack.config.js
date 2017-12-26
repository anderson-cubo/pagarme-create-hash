module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/app.bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
