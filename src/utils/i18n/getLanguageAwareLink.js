import qs from 'qs';

export default function getLanguageAwareLink(pathname, query, lang) {
  const queryWithoutLang = Object
    .keys(query)
    .filter((item) => item !== 'lang')
    .reduce((acc, curr) => ({ ...acc, [curr]: query[curr] }), {});

  const url = `/${pathname !== '/' ? pathname : ''}${lang ? `/${lang}` : ''}${qs.stringify(queryWithoutLang, { addQueryPrefix: true })}`;
  return url;
}
