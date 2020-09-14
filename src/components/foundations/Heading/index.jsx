import PropTypes from 'prop-types';
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
      const levelForStyling = level || inheritedLevel;
      let selectedLevel;
      if (typeof level === 'string') {
        selectedLevel = 1;
      } else {
        selectedLevel = Math.min(level || inheritedLevel, 5);
      }
      const H = `h${selectedLevel}`;
      const styles = getHeadingStyle(levelForStyling);
      return (
        <H style={{
          fontSize: styles.size,
          lineHeight: styles.height,
          fontWeight: styles.weight,
          fontFamily: styles.family,
        }}
        >
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
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.string.isRequired,
};

export default Heading;
