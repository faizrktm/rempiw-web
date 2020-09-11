import App from 'next/app';
import { appWithTranslation } from 'utils/i18n';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
