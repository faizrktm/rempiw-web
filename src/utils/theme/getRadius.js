import { wrapper } from './core';

export default function getRadius({ theme, round }) {
  return wrapper(theme, round, (style) => {
    const { spaces } = theme;
    if (typeof style === 'boolean') {
      return style ? { 'border-radius': spaces.small } : {};
    }
    if (Array.isArray(style)) {
      return style.reduce((acc, curr) => ({
        ...acc,
        [`border-${curr.corner}-radius`]: spaces[curr.size || 'small'] || curr.size,
      }), {});
    }
    return {
      'border-radius': spaces[style] || style,
    };
  });
}
