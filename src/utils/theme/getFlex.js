import { wrapper } from './core';

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

export function getAlignItems({ theme, align }) {
  return wrapper(theme, align, (style) => ({
    'align-items': alignItemsToken[style] || style,
  }));
}

export function getAlignSelf({ theme, alignSelf }) {
  return wrapper(theme, alignSelf, (style) => ({
    'align-self': alignSelfToken[style] || style,
  }));
}

export function getAlignContent({ theme, alignContent }) {
  return wrapper(theme, alignContent, (style) => ({
    'align-content': alignContentToken[style] || style,
  }));
}

export function getJustify({ theme, justify }) {
  return wrapper(theme, justify, (style) => ({
    'justify-content': justifiesToken[style] || style,
  }));
}

export function getFlex({ theme, flex }) {
  return wrapper(theme, flex, (style) => {
    if (typeof style === 'string') {
      if (style === 'grow') {
        return ({ flex: '1 0' });
      } if (style === 'shrink') {
        return ({ flex: '0 1' });
      }
    }
    if (typeof style === 'object') {
      const flexs = [`${style.grow || 0}`, `${style.shrink || 0}`];
      return ({ flex: flexs.join(' ') });
    }

    const flexs = style ? '1 0' : '0 1';

    return ({ flex: flexs });
  });
}

export function getWrap({ theme, boxWrap }) {
  return wrapper(theme, boxWrap, (style) => {
    if (typeof style === 'boolean') {
      const result = style ? 'wrap' : 'nowrap';
      return ({ 'flex-wrap': result });
    }
    return ({ 'flex-wrap': 'wrap-reverse' });
  });
}

export function getDirection({ theme, direction }) {
  return wrapper(theme, direction, (style) => ({
    'flex-direction': style,
  }));
}
