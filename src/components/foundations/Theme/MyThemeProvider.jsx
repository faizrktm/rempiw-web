import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'config/theme';

const MyThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

MyThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default MyThemeProvider;
