const path = require('path');
var prod = process.env.NODE_ENV === 'production';
const TypeScriptCompiler = require('@wepy/compiler-typescript');

module.exports = {
  wpyExt: '.wpy',
  cliLogs: !prod,
  static: ['static'],
  build: {
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
  },
  plugins: [TypeScriptCompiler()],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
