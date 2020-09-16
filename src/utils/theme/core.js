import { css } from 'styled-components';
import breakpoint, { checkBreakpoint } from './breakpoint';

/**
 *
 * @param {Object} objStyles
 * Parse object to css stringify;
 */
export function createStyle(objStyles) {
  const stringify = Object.keys(objStyles).reduce((acc, curr) => `${acc}${curr}: ${objStyles[curr]};`, '');
  return css`${stringify}`;
}

function createStyleWithBreakpoint(theme, styles, callback) {
  return Object.keys(styles).reduce((acc, curr) => {
    if (curr === 'default' || curr === '_') {
      return css`${acc}${createStyle(callback(styles[curr]))}`;
    }
    const current = css`
      ${breakpoint(curr)`
        ${createStyle(callback(styles[curr]))}
      `}
    `;
    return css`${acc}${current}`;
  }, '');
}

/**
 *
 * @param {*} theme
 * @param {*} styles
 * @param {*} callback
 * 1. Check if styles is not undefined, otherwise, return empty style;
 * 2. Check for breakpoint usage possibility.
 *    e.g. <Box flex={{ default: 'column', desktop: 'row' }} />
 * 3. Process the style.
 */
export function wrapper(theme, styles, callback) {
  if (styles === null) {
    return null;
  }

  if (checkBreakpoint(theme, styles)) {
    return createStyleWithBreakpoint(theme, styles, callback);
  }
  return createStyle(callback(styles));
}
