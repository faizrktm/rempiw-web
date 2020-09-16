import { wrapper } from './core';

export function getText({ theme, size }) {
  return wrapper(theme, size, (style) => {
    const selected = theme.text[style] || {
      size,
      height: '1.5em',
    };
    return {
      'font-size': selected.size,
      'line-height': selected.height,
    };
  });
}

export function getParagraph({ theme, size }) {
  return wrapper(theme, size, (style) => {
    const selected = theme.paragraph[style];
    return {
      'font-size': selected.size,
      'line-height': selected.height,
    };
  });
}

const alignmentToken = {
  start: 'left',
  center: 'center',
  end: 'right',
};

export function getTextAlign({ theme, textAlign }) {
  return wrapper(theme, textAlign, (style) => ({
    'text-align': alignmentToken[style] || style,
  }));
}

export function getTruncate({ theme, truncate }) {
  return wrapper(theme, truncate, (style) => {
    if (!style) return {};
    return {
      overflow: 'hidden',
      'white-space': 'nowrap',
      'text-overflow': 'ellipsis',
    };
  });
}

export function getWeight({ theme, weight }) {
  return wrapper(theme, weight, (style) => ({
    'font-weight': style,
  }));
}

export function getWordBreak({ theme, wordBreak }) {
  return wrapper(theme, wordBreak, (style) => ({
    'word-break': style,
  }));
}
