import PropTypes from 'prop-types';

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

const Heading = (props) => (
  <Level.Consumer>
    {(level) => {
      const H = `h${Math.min(level, 6)}`;
      return <H {...props} />;
    }}
  </Level.Consumer>
);

export default Heading;
