import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import getColor from 'utils/getColor';
import getFontStyle, { getTextAlign } from 'utils/getFontStyle';
import getSpacer from 'utils/getSpacer';

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
  color: ${({ color }) => getColor(color)};
  margin: ${({ margin }) => getSpacer(margin)};
  text-align: ${({ textAlign }) => getTextAlign(textAlign)};
  ${({ size }) => {
    const fontStyle = getFontStyle(size);
    return `
      font-size: ${fontStyle.size};
      line-height: ${fontStyle.height};
    `;
  }};
  ${({ truncate }) => {
    if (!truncate) return '';
    return `
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `;
  }};
`;

Text.defaultProps = {
  size: 'small',
  color: 'text',
  weight: 'normal',
  margin: 'none',
  textAlign: 'start',
  truncate: false,
  wordBreak: 'normal',
  a11yTitle: '',
};

export const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];

Text.propTypes = {
  size: PropTypes.oneOfType([PropTypes.oneOf(sizes), PropTypes.string]),
  color: PropTypes.string,
  weight: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.oneOf(['none', ...sizes]), PropTypes.shape({
    vertical: PropTypes.oneOf(sizes),
    horizontal: PropTypes.oneOf(sizes),
    top: PropTypes.oneOf(sizes),
    bottom: PropTypes.oneOf(sizes),
    right: PropTypes.oneOf(sizes),
    left: PropTypes.oneOf(sizes),
  })]),
  textAlign: PropTypes.oneOf(['start', 'end', 'center']),
  truncate: PropTypes.bool,
  wordBreak: PropTypes.oneOf(['normal', 'break-all', 'keep-all', 'break-word']),
  a11yTitle: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Text;
