export function getColor({ theme, color }) {
  return `color: ${theme.colors[color] || color};`;
}

export function getBg({ theme, background }) {
  return `background: ${theme.colors[background] || background};`;
}
