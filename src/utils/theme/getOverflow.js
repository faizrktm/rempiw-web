import { wrapper } from './core';

const direction = {
  vertical: 'overflow-y',
  horizontal: 'overflow-x',
};

export default function getOverflow({ theme, overflow }) {
  return wrapper(theme, overflow, (style) => {
    if (typeof style === 'object') {
      return Object
        .keys(style)
        .reduce((acc, item) => ({ ...acc, [direction[item]]: style[item] }), {});
    }
    return { overflow: style };
  });
}
