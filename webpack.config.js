const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'annotorious-selector-pack.js',
    library: 'SelectorPack',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // Injects styles into DOM
          'css-loader',     // Turns CSS into CommonJS
          'sass-loader'     // Compiles Sass to CSS
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  mode: 'production'
};
