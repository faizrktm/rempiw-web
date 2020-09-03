import theme from 'config/theme';

export default function getFontStyle(size) {
  return theme.text[size] || {
    size,
    height: '1.5em',
  };
}

const alignment = {
  start: 'left',
  center: 'center',
  end: 'right',
};

export function getTextAlign(align) {
  return alignment[align] || align;
}
