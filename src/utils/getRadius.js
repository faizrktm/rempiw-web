import theme from '../config/theme';

export default function getRadius(radius) {
  const { spaces } = theme;
  if (typeof radius === 'boolean') {
    return radius ? `border-radius: ${spaces.small};` : 'border-radius: 0px;';
  }
  if (radius && Array.isArray(radius)) {
    return radius.map((rad) => `border-${rad.corner}-radius: ${spaces[rad.size || 'small'] || rad.size};`).join(' ');
  }
  return `border-radius: ${spaces[radius] || radius};`;
}
