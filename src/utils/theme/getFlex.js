const alignItemsToken = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const alignSelfToken = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
};

const justifiesToken = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
  stretch: 'stretch',
};

const alignContentToken = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch',
};

export function getAlignItems({ align }) {
  if (!align) return '';
  return `align-items: ${alignItemsToken[align] || align};`;
}

export function getAlignSelf({ alignSelf }) {
  if (!alignSelf) return '';
  return `align-self: ${alignSelfToken[alignSelf] || alignSelf};`;
}

export function getAlignContent({ alignContent }) {
  if (!alignContent) return '';
  return `align-content: ${alignContentToken[alignContent] || alignContent};`;
}

export function getJustify({ justify }) {
  if (!justify) return '';
  return `justify-content: ${justifiesToken[justify] || justify};`;
}

export function getFlex({ flex }) {
  if (typeof flex === 'string') {
    if (flex === 'grow') {
      return 'flex: 1 0;';
    } if (flex === 'shrink') {
      return 'flex: 0 1;';
    }
  }
  if (flex && typeof flex === 'object') {
    const flexs = [`${flex.grow || 0}`, `${flex.shrink || 0}`];
    return `flex: ${flexs.join(' ')};`;
  }

  return flex ? 'flex: 1 0;' : 'flex: 0 1;';
}

export function getWrap({ boxWrap }) {
  if (typeof boxWrap === 'boolean') {
    return boxWrap ? 'flex-wrap: wrap;' : 'flex-wrap: nowrap;';
  }
  return 'flex-wrap: wrap-reverse;';
}
