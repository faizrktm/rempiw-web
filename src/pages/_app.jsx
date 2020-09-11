import App from 'next/app';
import LanguageProvider, { defaultLang } from 'utils/i18n';
import cookies from 'utils/cookies';
import Request from 'utils/request';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, initialLanguage, pageProps }) => (
  <LanguageProvider lang={initialLanguage}>
    <Component {...pageProps} />
  </LanguageProvider>
);

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  /**
   * Take a look at cookies lang, if does not same as lang on query
   * redirect to lang site based on cookie.
   * Basically only able to change language on click
   * the options on header.
   */
  const { ctx } = appContext;
  const lang = cookies.language.get(ctx);

  const { res, req, pathname } = ctx;
  const { baseUrl, queryStringify, language } = new Request(req);
  if (lang !== language) {
    if (res) {
      const url = `${baseUrl}${pathname !== '/' ? pathname : ''}${lang ? `/${lang}` : ''}${queryStringify}`;
      res.writeHead(302, {
        Location: url,
      });
      res.end();
    }
  }

  return ({
    ...appProps,
    initialLanguage: lang || defaultLang,
  });
};

export default MyApp;
