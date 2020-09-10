/* eslint-disable max-classes-per-file */
import cookies from 'next-cookies';
import { isServer } from './request';

const keys = {
  LANGUAGE: 'flkq_language',
};

class CookiesEntry {
  constructor(key) {
    this.key = key;
  }

  get(ctx) {
    try {
      if (!ctx || !isServer()) throw new Error('Please provide context from server side.');
      return cookies(ctx)[this.key];
    } catch (error) {
      return false;
    }
  }

  set(value) {
    try {
      if (isServer()) throw new Error('Does not support server side');
      document.cookie = `${this.key}=${value}; path=/`;
      return true;
    } catch (error) {
      return false;
    }
  }

  delete() {
    try {
      if (isServer()) throw new Error('Does not support server side');
      document.cookie = `${this.key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
      return true;
    } catch (error) {
      return false;
    }
  }
}

class Cookies {
  constructor() {
    this.language = new CookiesEntry(keys.LANGUAGE);
  }

  language() {
    return this.language;
  }
}

export default new Cookies();
