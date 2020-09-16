import {
  getAlignItems as alignItems,
  getAlignSelf as alignSelf,
  getAlignContent as alignContent,
  getJustify as justify,
  getFlex as flex,
  getWrap as wrap,
  getDirection as direction,
} from './getFlex';

import {
  getColor as color,
  getBg as background,
} from './getColor';

import overflow from './getOverflow';
import radius from './getRadius';

import {
  getMargin as margin,
  getPadding as pad,
  getGap as gap,
} from './getSpacer';

import {
  getText as text,
  getParagraph as paragraph,
  getTextAlign as textAlign,
  getTruncate as truncate,
  getWeight as weight,
  getWordBreak as wordBreak,
} from './getFontStyle';

export {
  // Flexes
  flex,
  wrap,
  justify,
  alignContent,
  alignItems,
  alignSelf,
  direction,
  // Colors
  color,
  background,
  // Overflow
  overflow,
  // Radius
  radius,
  // Spacer
  margin,
  pad,
  gap,
  // Typography
  text,
  paragraph,
  textAlign,
  truncate,
  weight,
  wordBreak,
};
