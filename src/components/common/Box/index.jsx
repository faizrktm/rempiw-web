import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import getSpacer from 'utils/theme/getSpacer';
import {
  getAlignItems,
  getAlignContent,
  getAlignSelf,
  getJustify,
  getWrap,
  getFlex,
} from 'utils/theme/getFlex';
import getColor from 'utils/theme/getColor';
import getOverflow from 'utils/theme/getOverflow';
import getRadius from 'utils/theme/getRadius';

const Box = ({
  margin,
  pad,
  flex,
  gap,
  children,
  direction,
  align,
  justify,
  alignSelf,
  background,
  alignContent,
  wrap,
  round,
  overflow,
  a11yTitle,
}) => (
  <Container
    gap={gap}
    space={margin}
    pad={pad}
    direction={direction}
    flex={flex}
    align={align}
    justify={justify}
    alignSelf={alignSelf}
    background={background}
    alignContent={alignContent}
    boxWrap={wrap}
    round={round}
    overflow={overflow}
    aria-label={a11yTitle}
  >
    {children}
  </Container>
);

Box.defaultProps = {
  direction: 'column',
  margin: 'none',
  pad: 'none',
  flex: false,
  gap: 'none',
  align: '',
  justify: 'stretch',
  alignSelf: '',
  background: '',
  wrap: false,
  alignContent: 'stretch',
  round: false,
  a11yTitle: '',
  overflow: null,
};

const sizes = ['none', 'hair', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge'];
const overflows = ['auto', 'hidden', 'scroll', 'visible'];

Box.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.oneOf(sizes), PropTypes.shape({
    vertical: PropTypes.oneOf(sizes),
    horizontal: PropTypes.oneOf(sizes),
    top: PropTypes.oneOf(sizes),
    bottom: PropTypes.oneOf(sizes),
    right: PropTypes.oneOf(sizes),
    left: PropTypes.oneOf(sizes),
  })]),
  pad: PropTypes.oneOfType([PropTypes.oneOf(sizes), PropTypes.shape({
    vertical: PropTypes.oneOf(sizes),
    horizontal: PropTypes.oneOf(sizes),
    top: PropTypes.oneOf(sizes),
    bottom: PropTypes.oneOf(sizes),
    right: PropTypes.oneOf(sizes),
    left: PropTypes.oneOf(sizes),
  })]),
  direction: PropTypes.oneOf(['row', 'column', 'row-responsive', 'row-reverse', 'column-reverse']),
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['grow', 'shrink']), PropTypes.shape({
    grow: PropTypes.string,
    shrink: PropTypes.string,
  })]),
  gap: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  alignSelf: PropTypes.string,
  background: PropTypes.string,
  wrap: PropTypes.oneOfType([PropTypes.oneOf(['reverse']), PropTypes.bool]),
  alignContent: PropTypes.string,
  overflow: PropTypes.oneOfType([PropTypes.oneOf(overflows), PropTypes.shape({
    vertical: PropTypes.oneOf(overflows),
    horizontal: PropTypes.oneOf(overflows),
  })]),
  round: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.arrayOf(PropTypes.shape({
    size: PropTypes.string,
    corner: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  }))]),
  a11yTitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default Box;

const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin: ${({ space }) => getSpacer(space)};
  padding: ${({ pad }) => getSpacer(pad)};
  grid-gap: ${({ gap }) => getSpacer(gap)};
  ${({ align }) => (align ? `align-items: ${getAlignItems(align)};` : '')};
  ${({ alignSelf }) => (alignSelf ? `align-self: ${getAlignSelf(alignSelf)};` : '')};
  justify-content: ${({ justify }) => getJustify(justify)};
  background: ${({ background }) => getColor(background)};
  ${({ flex }) => (flex ? `flex: ${getFlex(flex)}` : '')};
  flex-wrap: ${({ boxWrap }) => getWrap(boxWrap)};
  align-content: ${({ alignContent }) => getAlignContent(alignContent)};
  ${({ overflow }) => (overflow ? getOverflow(overflow) : '')};
  ${({ round }) => (round ? getRadius(round) : '')};
`;
