const direction = {
  vertical: 'overflow-y',
  horizontal: 'overflow-x',
};

export default function getOverflow(overflow) {
  if (typeof overflow === 'object') {
    return Object.keys(overflow).map((item) => `${direction[item]}: ${overflow[item]};`).join(' ');
  }
  return `overflow: ${overflow}`;
}
