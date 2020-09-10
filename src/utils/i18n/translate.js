import id from 'constants/locales/id.json';
import en from 'constants/locales/en.json';

export default function translate(key, lang) {
  if (lang === 'id') {
    return id[key] || key;
  } if (lang === 'en') {
    return en[key] || key;
  }
  return 'There is no translation found';
}
