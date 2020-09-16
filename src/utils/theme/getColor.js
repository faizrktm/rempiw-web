import { wrapper } from './core';

export function getColor({ theme, color }) {
  return wrapper(theme, color, (style) => ({
    color: theme.colors[style] || style,
  }));
}

export function getBg({ theme, background }) {
  return wrapper(theme, background, (style) => ({
    background: theme.colors[style] || style,
  }));
}
