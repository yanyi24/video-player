'use strict';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/player/' : '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: false,
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
