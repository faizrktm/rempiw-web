const i18nRewrites = require('./src/utils/i18n/rewrites');

const localeSubpaths = {
  id: 'id'
};

module.exports = {
  rewrites: async () => i18nRewrites(localeSubpaths),
  publicRuntimeConfig: {
    defaultLang: 'en',
    localeSubpaths,
  },
}
