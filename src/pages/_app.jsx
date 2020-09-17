import App from 'next/app';
import { appWithTranslation } from 'utils/i18n';
import { MyThemeProvider } from 'candi-ui';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <MyThemeProvider>
    <Component {...pageProps} />
  </MyThemeProvider>
);

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
