import theme from 'config/theme';

export default function getHeadingStyle(level, breakpoint) {
  return theme.heading[level][breakpoint || 'mobile'];
}
