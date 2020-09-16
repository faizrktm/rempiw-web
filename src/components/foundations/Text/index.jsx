import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  color,
  margin,
  weight,
  wordBreak,
  text,
  textAlign,
  truncate,
} from 'utils/theme';

const TextComponent = styled.span`
  ${weight}
  ${wordBreak}
  ${color}
  ${margin}
  ${textAlign}
  ${text}
  ${truncate}
`;

const Text = (args) => <TextComponent {...args} />;

Text.defaultProps = {
  size: 'medium',
  color: 'black500',
  weight: 'normal',
  margin: null,
  textAlign: 'start',
  truncate: false,
  wordBreak: 'normal',
};

const textSizesVariable = [
  'large',
  'medium',
  'small',
  'xsmall',
];
const textAlignVariable = ['start', 'end', 'center'];
const textWordBreakVariable = ['normal', 'break-all', 'keep-all', 'break-word'];
const spacesVariable = [
  'none',
  'hair',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

Text.propTypes = {
  /** The font size and line height are primarily driven by the chosen tag.
   * But, it can be adjusted via this size property. But the default line height is 1.5em. */
  size: PropTypes.oneOfType([PropTypes.oneOf(textSizesVariable), PropTypes.string]),
  /** A color identifier to use for the text color. */
  color: PropTypes.string,
  /** Font weight */
  weight: PropTypes.string,
  /** The amount of margin around the text.
   * An object can be specified to distinguish horizontal
   * margin, vertical margin, and margin on a particular side. */
  margin: PropTypes.oneOfType([PropTypes.oneOf(spacesVariable), PropTypes.shape({
    vertical: PropTypes.oneOf(spacesVariable),
    horizontal: PropTypes.oneOf(spacesVariable),
    top: PropTypes.oneOf(spacesVariable),
    bottom: PropTypes.oneOf(spacesVariable),
    right: PropTypes.oneOf(spacesVariable),
    left: PropTypes.oneOf(spacesVariable),
  })]),
  /** How to align the text inside the component. */
  textAlign: PropTypes.oneOf(textAlignVariable),
  /** Restrict the text to a single line and truncate with ellipsis if it is too long to all fit. */
  truncate: PropTypes.bool,
  /** Whether words should break when reaching the end of a line. */
  wordBreak: PropTypes.oneOf(textWordBreakVariable),
  children: PropTypes.string.isRequired,
};

export default Text;
