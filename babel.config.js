module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { esmodules: true } }]
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
  };
  