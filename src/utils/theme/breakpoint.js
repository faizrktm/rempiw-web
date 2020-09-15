/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { css } from 'styled-components';

const defaultBreakpoints = {
  mobile: 0, // targeting all devices
  tablet: 737, // targeting devices that are LARGER than the iPhone 6 Plus (which is 736px in landscape mode)
  desktop: 1025, // targeting devices that are LARGER than the iPad (which is 1024px in landscape mode)
};

function _gte(breakpoints, value) {
  const max = breakpoints[value];
  return function (strings, ...interpolations) {
    return css`
      @media screen and (min-width: ${max}px) {
        ${css(strings, ...interpolations)};
      }
    `;
  };
}

function _between(breakpoints, gte, lt) {
  const max = breakpoints[gte];
  const min = breakpoints[lt] - 1;
  return function (strings, ...interpolations) {
    return css`
      @media screen and (min-width: ${max}px) and (max-width: ${min}px) {
        ${css(strings, ...interpolations)};
      }
    `;
  };
}

function _breakpoint(breakpoints, gte, lt) {
  if (typeof lt === 'undefined') {
    return _gte(breakpoints, gte);
  }
  return _between(breakpoints, gte, lt);
}

function breakpoint(gte, lt) {
  return function (strings, ...interpolations) {
    return function ({ theme = {} }) {
      return _breakpoint(
        theme.breakpoints || defaultBreakpoints,
        gte,
        lt,
      )(strings, ...interpolations);
    };
  };
}

export default breakpoint;
