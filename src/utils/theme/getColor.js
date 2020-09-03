import theme from 'config/theme';

export default function getColor(color) {
  return theme.colors[color] || color;
}
