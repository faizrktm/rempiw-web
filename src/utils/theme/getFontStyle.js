export function getTextStyle({ theme, size }) {
  const selected = theme.text[size] || {
    size,
    height: '1.5em',
  };
  return `
    font-size: ${selected.size};
    line-height: ${selected.height};
  `;
}

const alignmentToken = {
  start: 'left',
  center: 'center',
  end: 'right',
};

export function getTextAlign({ textAlign }) {
  if (!textAlign) return '';
  return `text-align: ${alignmentToken[textAlign] || textAlign}`;
}

export function getTruncate({ truncate }) {
  if (!truncate) return '';
  return `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;
}
