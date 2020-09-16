import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  flex,
  wrap,
  alignItems,
  alignContent,
  alignSelf,
  justify,
  direction,
  background,
  overflow,
  radius,
  margin,
  pad,
  gap,
} from 'utils/theme';

const BoxComponent = styled.div`
  display: flex;
  ${flex}
  ${direction}
  ${alignItems}
  ${alignSelf}
  ${justify}
  ${wrap}
  ${alignContent}
  ${background}
  ${overflow}
  ${radius}
  ${margin}
  ${pad}
  ${gap}
`;

const Box = (args) => <BoxComponent {...args} />;

Box.defaultProps = {
  direction: 'column',
  margin: null,
  pad: null,
  flex: null,
  gap: null,
  align: null,
  justify: 'stretch',
  alignSelf: null,
  background: null,
  wrap: null,
  alignContent: 'stretch',
  round: null,
  overflow: null,
};

const spacesVariable = [
  'none',
  'hair',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

Box.propTypes = {
  /** The amount of margin around the component.
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
  /** The amount of padding around the box contents.
   * An object can be specified to distinguish horizontal
   * padding, vertical padding, and padding on a particular side of the box
  */
  pad: PropTypes.oneOfType([PropTypes.oneOf(spacesVariable), PropTypes.shape({
    vertical: PropTypes.oneOf(spacesVariable),
    horizontal: PropTypes.oneOf(spacesVariable),
    top: PropTypes.oneOf(spacesVariable),
    bottom: PropTypes.oneOf(spacesVariable),
    right: PropTypes.oneOf(spacesVariable),
    left: PropTypes.oneOf(spacesVariable),
  })]),
  /** The amount of spacing between child elements.
   * This should not be used in conjunction with 'wrap' as the gap elements
   * will not wrap gracefully. If a child is a Fragment,
   * Box will not add a gap between the choldren of the Fragment. */
  gap: PropTypes.oneOf(spacesVariable),
  /** The orientation to layout the child components in. */
  direction: PropTypes.oneOf(['row', 'column', 'row-responsive', 'row-reverse', 'column-reverse']),
  /** Whether flex-grow and/or flex-shrink is true and at a desired factor. */
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['grow', 'shrink']), PropTypes.shape({
    grow: PropTypes.string,
    shrink: PropTypes.string,
  })]),
  /** How to align the contents along the cross axis. */
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  /** How to align the contents along the main axis. */
  justify: PropTypes.oneOf(['around', 'between', 'center', 'end', 'evenly', 'start', 'stretch']),
  /** How to align along the cross axis
   * when contained in a Box or along the column axis when contained in a Grid. */
  alignSelf: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  /** Either a color specified on design token, example: 'primary100'. Or url() for an image */
  background: PropTypes.string,
  /** Whether children can wrap if they can't all fit. */
  wrap: PropTypes.oneOfType([PropTypes.oneOf(['reverse']), PropTypes.bool]),
  /** How to align the contents when there is extra space in the cross axis. */
  alignContent: PropTypes.oneOf(['around', 'between', 'center', 'end', 'start', 'stretch']),
  /** Box overflow. */
  overflow: PropTypes.oneOfType([PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']), PropTypes.shape({
    vertical: PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']),
    horizontal: PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']),
  })]),
  /** How much to round the corners. (Border Radius) */
  round: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.arrayOf(PropTypes.shape({
    size: PropTypes.string,
    corner: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  }))]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]).isRequired,
};

export default Box;
