import { wrapper } from './core';

export default function getSpacer(theme, space) {
  const { spaces: spacesObj } = theme;
  if (typeof space === 'object') {
    const spacing = {
      top: 'none',
      right: 'none',
      bottom: 'none',
      left: 'none',
    };
    if (space.vertical) {
      const vertical = spacesObj[space.vertical] || space.vertical;
      spacing.top = vertical;
      spacing.bottom = vertical;
    }
    if (space.horizontal) {
      const horizontal = spacesObj[space.horizontal] || space.horizontal;
      spacing.right = horizontal;
      spacing.left = horizontal;
    }
    if (space.top) {
      spacing.top = spacesObj[space.top] || space.top;
    }
    if (space.right) {
      spacing.right = spacesObj[space.right] || space.right;
    }
    if (space.bottom) {
      spacing.bottom = spacesObj[space.bottom] || space.bottom;
    }
    if (space.left) {
      spacing.left = spacesObj[space.left] || space.left;
    }
    return Object.values(spacing).join(' ');
  }
  return spacesObj[space] || space;
}

export function getMargin({ theme, margin }) {
  return wrapper(theme, margin, (style) => ({
    margin: getSpacer(theme, style),
  }));
}

export function getPadding({ theme, pad }) {
  return wrapper(theme, pad, (style) => ({
    padding: getSpacer(theme, style),
  }));
}

export function getGap({ theme, gap }) {
  return wrapper(theme, gap, (style) => ({
    'grid-gap': getSpacer(theme, style),
  }));
}
