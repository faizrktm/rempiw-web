/* eslint-disable react/prop-types */
import getConfig from 'next/config';
import Request from 'utils/request';
import cookies from 'utils/cookies';
import { LanguageProvider } from './Provider';

const { publicRuntimeConfig } = getConfig();

const appWithTranslation = (Component) => class extends React.Component {
  static async getInitialProps(appContext) {
    /**
     * Take a look at cookies lang, if result i not equal from lang query
     * redirect to lang site based on cookie.
     * Basically only able to change language from cookie.
     */
    const { ctx } = appContext;
    const lang = cookies.language.get(ctx);

    const { res } = ctx;
    const { language, getChangeLangUrl } = new Request(ctx);
    if (lang !== language) {
      if (res) {
        const url = getChangeLangUrl(lang);
        res.writeHead(301, {
          Location: url,
        });
        res.end();
      }
    }

    return {
      initialLanguage: lang || publicRuntimeConfig.defaultLang,
      ...await Component.getInitialProps(appContext),
    };
  }

  render() {
    const { initialLanguage, ...rest } = this.props;
    return (
      <LanguageProvider lang={initialLanguage}>
        <Component {...rest} />
      </LanguageProvider>
    );
  }
};

export default appWithTranslation;
