export const spacesVariable = [
  'none',
  'hair',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

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

export function getMargin({ theme, space }) {
  if (!space) return '';
  return `margin: ${getSpacer(theme, space)};`;
}

export function getPadding({ theme, pad }) {
  if (!pad) return '';
  return `padding: ${getSpacer(theme, pad)};`;
}

export function getGap({ theme, gap }) {
  if (!gap) return '';
  return `grid-gap: ${getSpacer(theme, gap)};`;
}
