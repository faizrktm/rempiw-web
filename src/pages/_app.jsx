import App from 'next/app';
import LanguageProvider from 'components/LanguageProvider';

import { appWithTranslation } from '../../i18n';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <LanguageProvider>
    <Component {...pageProps} />
  </LanguageProvider>
);

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
