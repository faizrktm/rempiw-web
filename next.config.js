const pathRewriteWithLang = require('./rewrites');

const localeSubpaths = {
  id: 'id'
};

module.exports = {
  rewrites: async () => pathRewriteWithLang(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
