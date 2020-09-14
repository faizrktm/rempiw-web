export default function getRadius({ theme, round }) {
  const { spaces } = theme;
  if (typeof round === 'boolean') {
    return round ? `border-radius: ${spaces.small};` : '';
  }
  if (round && Array.isArray(round)) {
    return round.map((rad) => `border-${rad.corner}-radius: ${spaces[rad.size || 'small'] || rad.size};`).join(' ');
  }
  return `border-radius: ${spaces[round] || round};`;
}
