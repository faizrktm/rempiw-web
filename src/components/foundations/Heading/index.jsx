import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'utils/theme/breakpoint';

import getHeadingStyle from 'utils/theme/getHeadingStyle';

const Level = React.createContext(0);

export const DocumentOutline = ({ children }) => (
  <Level.Consumer>
    {(level) => (
      <Level.Provider value={level + 1}>
        {children}
      </Level.Provider>
    )}
  </Level.Consumer>
);

DocumentOutline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

/**
 *
 * The Heading level will remain automatic even if we manually set props size.
 * The size prop only used for inherit styling.
 */
const Heading = ({ size, children }) => (
  <Level.Consumer>
    {(inheritedLevel) => {
      let levelForStyling;
      let selectedLevel;
      if (typeof size === 'string') {
        selectedLevel = 1;
        levelForStyling = size;
      } else {
        selectedLevel = Math.min(inheritedLevel, 5);
        levelForStyling = selectedLevel;
      }
      const hLevel = `h${selectedLevel}`;
      return (
        <H as={hLevel} level={levelForStyling}>
          {children}
        </H>
      );
    }}
  </Level.Consumer>
);

Heading.defaultProps = {
  size: null,
};

Heading.propTypes = {
  /** A size of the heading, for styling purpose only, does not affect the leveling. */
  size: PropTypes.oneOf(['large', 1, 2, 3, 4, 5]),
  children: PropTypes.string.isRequired,
};

const H = styled.div`
  margin: 0;
  ${({ level }) => {
    const styles = getHeadingStyle(level);
    return `
      font-size: ${styles.size};
      line-height: ${styles.height};
      font-family: ${styles.family};
      font-weight: ${styles.weight};
    `;
  }};

  ${breakpoint('desktop')`
  ${({ level }) => {
    const styles = getHeadingStyle(level, 'desktop');
    return `
      font-size: ${styles.size};
      line-height: ${styles.height};
      font-family: ${styles.family};
      font-weight: ${styles.weight};
    `;
  }};
  `}
`;

export default Heading;
