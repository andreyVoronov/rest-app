module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/rest-app/' : '/',
  outputDir: 'docs',
  transpileDependencies: ['vue'],
};
