/* eslint-disable no-underscore-dangle */
const pathRewrites = function pathRewrites(localeSubpaths) {
  let rewrites = [];

  if (localeSubpaths !== null && typeof localeSubpaths === 'object') {
    const subpaths = Object.values(localeSubpaths);

    for (let _i = 0, _subpaths = subpaths; _i < _subpaths.length; _i += 1) {
      const value = _subpaths[_i];
      rewrites = [].concat(rewrites, [{
        source: '/:lang('.concat(value, '){/}?'),
        destination: '/',
      }, {
        source: '/:path*/:lang('.concat(value, ')'),
        destination: '/:path*',
      }]);
    }
  }

  return rewrites;
};

module.exports = pathRewrites;
