import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import getColor from 'utils/theme/getColor';
import getFontStyle, { getTextAlign } from 'utils/theme/getFontStyle';
import getSpacer from 'utils/theme/getSpacer';

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

const spacer = ['none', 'hair', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge'];
const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];

Text.propTypes = {
  size: PropTypes.oneOfType([PropTypes.oneOf(sizes), PropTypes.string]),
  color: PropTypes.string,
  weight: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.oneOf(spacer), PropTypes.shape({
    vertical: PropTypes.oneOf(spacer),
    horizontal: PropTypes.oneOf(spacer),
    top: PropTypes.oneOf(spacer),
    bottom: PropTypes.oneOf(spacer),
    right: PropTypes.oneOf(spacer),
    left: PropTypes.oneOf(spacer),
  })]),
  textAlign: PropTypes.oneOf(['start', 'end', 'center']),
  truncate: PropTypes.bool,
  wordBreak: PropTypes.oneOf(['normal', 'break-all', 'keep-all', 'break-word']),
  a11yTitle: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Text;
