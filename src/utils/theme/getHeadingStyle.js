import theme from 'config/theme';

export const headingSizes = Object.keys(theme.heading);

export default function getHeadingStyle(level, breakpoint) {
  return theme.heading[level][breakpoint || 'mobile'];
}
