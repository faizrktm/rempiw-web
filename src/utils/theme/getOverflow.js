const direction = {
  vertical: 'overflow-y',
  horizontal: 'overflow-x',
};
export const overflows = ['auto', 'hidden', 'scroll', 'visible'];

export default function getOverflow(overflow) {
  if (typeof overflow === 'object') {
    return Object.keys(overflow).map((item) => `${direction[item]}: ${overflow[item]};`).join(' ');
  }
  return `overflow: ${overflow}`;
}
