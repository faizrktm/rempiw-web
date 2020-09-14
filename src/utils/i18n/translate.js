import * as Locales from 'constants/locales';

// eslint-disable-next-line no-useless-escape
const REGEXP = new RegExp('(\{\{[^\}]+\}\}|\\$t\\([^\\)]+\\))', 'g');

function parser(text, props) {
  if (!text) return null;
  const splitted = text.split(REGEXP);
  const newChildren = splitted.length > 1 ? text.split(REGEXP).reduce((mem, match, index) => {
    if (index % 2 === 0) {
      mem.push({ type: 'text', content: match });
    } else if (match.indexOf('{{-') === 0) {
      const content = match.substring(3, match.length - 2);
      mem.push({
        type: 'interpolation_unescaped', raw: match, prefix: '{{-', suffix: '}}', content, variable: content.trim(),
      });
    } else if (match.indexOf('{{') === 0) {
      const content = match.substring(2, match.length - 2);
      mem.push({
        type: 'interpolation', raw: match, prefix: '{{', suffix: '}}', content, variable: content.trim(),
      });
    } else if (match.indexOf('$t(') === 0) {
      const content = match.substring(3, match.length - 1);
      mem.push({
        type: 'nesting', raw: match, prefix: '$t(', suffix: ')', content, variable: content.trim(),
      });
    }
    return mem;
  }, []) : [];

  return newChildren.reduce((acc, curr) => {
    if (curr.type === 'interpolation' || curr.type === 'nesting' || curr.type === 'interpolation_unescaped') {
      return `${acc}${props[curr.variable]}`;
    }
    return `${acc}${curr.content}`;
  }, '');
}

export default function translate(key, lang, props) {
  let translation = Locales[lang];
  if (translation) {
    const keys = key.split('.');
    keys.forEach((item) => {
      translation = translation?.[item];
    });
    if (props) {
      translation = parser(translation, props);
    }
    return translation || key;
  }
  return 'There is no translation found';
}
