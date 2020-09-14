import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

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

const Heading = ({ level, children }) => (
  <Level.Consumer>
    {(inheritedLevel) => {
      let levelForStyling;
      let selectedLevel;
      if (typeof level === 'string') {
        selectedLevel = 1;
        levelForStyling = level;
      } else {
        selectedLevel = Math.min(level || inheritedLevel, 5);
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
  level: null,
};

Heading.propTypes = {
  level: PropTypes.oneOf(['large', 1, 2, 3, 4, 5]),
  children: PropTypes.string.isRequired,
};

const H = styled.div`
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
