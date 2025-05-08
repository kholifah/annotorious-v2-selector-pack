const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'annotorious-selector-pack.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SelectorPack',
    libraryTarget: 'umd', // Penting: universal compatibility
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['defaults']
                },
                useBuiltIns: 'entry',
                corejs: 3
              }]
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
};
