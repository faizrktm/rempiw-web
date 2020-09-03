const alignItems = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const alignSelf = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
};

const justifies = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
  stretch: 'stretch',
};

const alignContent = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch',
};

export function getAlignItems(align) {
  return alignItems[align] || align;
}

export function getAlignSelf(align) {
  return alignSelf[align] || align;
}

export function getAlignContent(justify) {
  return alignContent[justify] || justify;
}

export function getJustify(justify) {
  return justifies[justify] || justify;
}

export function getFlex(flex) {
  if (typeof flex === 'string') {
    if (flex === 'grow') {
      return '1 0';
    } if (flex === 'shrink') {
      return '0 1';
    }
  }
  if (flex && typeof flex === 'object') {
    const flexs = [`${flex.grow || 0}`, `${flex.shrink || 0}`];
    return flexs.join(' ');
  }

  return flex ? '1 0' : '0 1';
}

export function getWrap(wrap) {
  if (typeof wrap === 'boolean') {
    return wrap ? 'wrap' : 'nowrap';
  }
  return 'wrap-reverse';
}
