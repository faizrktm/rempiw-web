import theme from 'config/theme';

export const spaces = Object.keys(theme.spaces);

export default function getSpacer(space) {
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
