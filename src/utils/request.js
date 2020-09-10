import qs from 'qs';
import { publicRuntimeConfig } from '../../next.config';

export function isServer() {
  return !(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
  );
}

export default class Request {
  constructor(req) {
    if (isServer() && !req) {
      throw new Error('Request must be set');
    }
    this.req = req;
  }

  get host() {
    return isServer() ? this.req.headers.host : window.location.hostname;
  }

  get localhost() {
    return this.host.includes('localhost');
  }

  get language() {
    const pathOnly = this.req.url.split('?')[0].split('/');
    const lastSubPath = pathOnly[pathOnly.length - 1];
    return publicRuntimeConfig.localeSubpaths[lastSubPath];
  }

  get query() {
    return isServer() ? qs.parse(this.req.url.split('?')?.[1]) : {};
  }

  get queryStringify() {
    return qs.stringify(this.query, { addQueryPrefix: true });
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
}
