import qs from 'qs';
import getConfig from 'next/config';

export function isServer() {
  return !(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
  );
}

const { publicRuntimeConfig } = getConfig();

export default class Request {
  constructor(ctx) {
    if (isServer() && !ctx) {
      throw new Error('Request must be set');
    }
    this.req = ctx.req;
    this.ctxQuery = ctx.query;
    this.pathname = ctx.pathname;

    // enable getChangeLangUrl to use this.
    this.getChangeLangUrl = this.getChangeLangUrl.bind(this);
  }

  get url() {
    return isServer() ? this.req.url : window.location.href;
  }

  get host() {
    return isServer() ? this.req.headers.host : window.location.hostname;
  }

  get localhost() {
    return this.host.includes('localhost');
  }

  get query() {
    return isServer()
      ? Object.keys(this.ctxQuery) // remove lang from query
        .filter((query) => query !== 'lang')
        .reduce((acc, curr) => ({ ...acc, [curr]: this.ctxQuery[curr] }), {})
      : qs.parse(window.location.search, { ignoreQueryPrefix: true });
  }

  get language() {
    if (this.query.lang) return this.query.lang;

    const pathOnly = this.url.split('?')[0].split('/');
    const lastSubPath = pathOnly[pathOnly.length - 1]; // get last subpath
    return publicRuntimeConfig.localeSubpaths[lastSubPath]; // get lang from last subpath
  }

  get protocol() {
    let defaultProtocol = 'https';
    if (this.localhost) {
      defaultProtocol = 'http';
    }
    return defaultProtocol;
  }

  get baseUrl() {
    return `${this.protocol}://${this.host}`;
  }

  get path() {
    return isServer() ? this.pathname : window.location.pathname;
  }

  getChangeLangUrl(lang) {
    const queryStringify = qs.stringify(this.query, { addQueryPrefix: true });
    const url = `${this.baseUrl}${this.path !== '/' ? this.path : ''}${lang ? `/${lang}` : ''}${queryStringify}`;
    return url;
  }
}
