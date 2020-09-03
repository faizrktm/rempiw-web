import theme from '../config/theme';

export default function getSpacer(space) {
  const { spaces } = theme;
  if (typeof space === 'object') {
    const spacing = {
      top: 'none',
      right: 'none',
      bottom: 'none',
      left: 'none',
    };
    if (space.vertical) {
      const vertical = spaces[space.vertical] || space.vertical;
      spacing.top = vertical;
      spacing.bottom = vertical;
    }
    if (space.horizontal) {
      const horizontal = spaces[space.horizontal] || space.horizontal;
      spacing.right = horizontal;
      spacing.left = horizontal;
    }
    if (space.top) {
      spacing.top = spaces[space.top] || space.top;
    }
    if (space.right) {
      spacing.right = spaces[space.right] || space.right;
    }
    if (space.bottom) {
      spacing.bottom = spaces[space.bottom] || space.bottom;
    }
    if (space.left) {
      spacing.left = spaces[space.left] || space.left;
    }
    return Object.values(spacing).join(' ');
  }
  return spaces[space] || space;
}
