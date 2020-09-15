import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  getMargin,
  getPadding,
  getGap,
  spacesVariable,
} from 'utils/theme/getSpacer';
import {
  getAlignItems,
  getAlignContent,
  getAlignSelf,
  getJustify,
  getWrap,
  getFlex,
} from 'utils/theme/getFlex';
import { getBg } from 'utils/theme/getColor';
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
  margin: null,
  pad: null,
  flex: false,
  gap: null,
  align: null,
  justify: 'stretch',
  alignSelf: null,
  background: null,
  wrap: false,
  alignContent: 'stretch',
  round: false,
  a11yTitle: null,
  overflow: null,
};

Box.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.oneOf(spacesVariable), PropTypes.shape({
    vertical: PropTypes.oneOf(spacesVariable),
    horizontal: PropTypes.oneOf(spacesVariable),
    top: PropTypes.oneOf(spacesVariable),
    bottom: PropTypes.oneOf(spacesVariable),
    right: PropTypes.oneOf(spacesVariable),
    left: PropTypes.oneOf(spacesVariable),
  })]),
  pad: PropTypes.oneOfType([PropTypes.oneOf(spacesVariable), PropTypes.shape({
    vertical: PropTypes.oneOf(spacesVariable),
    horizontal: PropTypes.oneOf(spacesVariable),
    top: PropTypes.oneOf(spacesVariable),
    bottom: PropTypes.oneOf(spacesVariable),
    right: PropTypes.oneOf(spacesVariable),
    left: PropTypes.oneOf(spacesVariable),
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
  overflow: PropTypes.oneOfType([PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']), PropTypes.shape({
    vertical: PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']),
    horizontal: PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']),
  })]),
  round: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.arrayOf(PropTypes.shape({
    size: PropTypes.string,
    corner: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  }))]),
  a11yTitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]).isRequired,
};

export default Box;

const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${getMargin};
  ${getPadding};
  ${getGap};
  ${getAlignItems};
  ${getAlignSelf};
  ${getJustify};
  ${getBg};
  ${getFlex};
  ${getWrap};
  ${getAlignContent};
  ${getOverflow};
  ${getRadius};
`;
