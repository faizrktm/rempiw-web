import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'utils/i18n';
import theme from 'config/theme';
import 'normalize.css';
import 'styles.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
