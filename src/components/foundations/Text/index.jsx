import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor } from 'utils/theme/getColor';
import { getTextStyle, getTextAlign, getTruncate } from 'utils/theme/getFontStyle';
import { getMargin, spacesVariable } from 'utils/theme/getSpacer';

const Text = ({
  size,
  color,
  weight,
  margin,
  textAlign,
  truncate,
  wordBreak,
  a11yTitle,
  children,
}) => (
  <StyledText
    size={size}
    color={color}
    weight={weight}
    margin={margin}
    textAlign={textAlign}
    truncate={truncate}
    wordBreak={wordBreak}
    aria-label={a11yTitle}
  >
    {children}
  </StyledText>
);

const StyledText = styled.span`
  font-weight: ${({ weight }) => weight};
  word-break: ${({ wordBreak }) => wordBreak};
  ${getColor};
  ${getMargin};
  ${getTextAlign};
  ${getTextStyle};
  ${getTruncate};
`;

Text.defaultProps = {
  size: 'medium',
  color: 'text',
  weight: 'normal',
  margin: null,
  textAlign: 'start',
  truncate: false,
  wordBreak: 'normal',
  a11yTitle: null,
};

const textSizesVariable = [
  'large',
  'medium',
  'small',
  'xsmall',
];
const textAlignVariable = ['start', 'end', 'center'];
const textWordBreakVariable = ['normal', 'break-all', 'keep-all', 'break-word'];

Text.propTypes = {
  size: PropTypes.oneOfType([PropTypes.oneOf(textSizesVariable), PropTypes.string]),
  color: PropTypes.string,
  weight: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.oneOf(spacesVariable), PropTypes.shape({
    vertical: PropTypes.oneOf(spacesVariable),
    horizontal: PropTypes.oneOf(spacesVariable),
    top: PropTypes.oneOf(spacesVariable),
    bottom: PropTypes.oneOf(spacesVariable),
    right: PropTypes.oneOf(spacesVariable),
    left: PropTypes.oneOf(spacesVariable),
  })]),
  textAlign: PropTypes.oneOf(textAlignVariable),
  truncate: PropTypes.bool,
  wordBreak: PropTypes.oneOf(textWordBreakVariable),
  a11yTitle: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Text;
