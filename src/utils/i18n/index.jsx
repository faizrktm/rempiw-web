/* eslint-disable react/prop-types */
import { useContext, memo } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import cookies from 'utils/cookies';
import Request from 'utils/request';

import translate from './translate';

const defaultLang = 'en';

const LanguageContext = React.createContext();

const LanguageProvider = ({ lang, children }) => {
  const router = useRouter();
  const changeLanguage = (selectedLang) => {
    if (selectedLang === lang) {
      return;
    }
    let finalLang = selectedLang;
    if (finalLang === defaultLang) {
      cookies.language.delete();
      finalLang = null;
    } else {
      cookies.language.set(selectedLang);
    }
    router.reload();
  };

  return (
    <LanguageContext.Provider value={{
      language: lang,
      t: (key) => translate(key, lang),
      changeLanguage,
    }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.defaultProps = {
  lang: 'en',
};

LanguageProvider.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default memo(LanguageProvider, () => true);

export function useLanguage() {
  const { t, language, changeLanguage } = useContext(LanguageContext);
  return { t, language, changeLanguage };
}

export const appWithTranslation = (Component) => class ChildClass extends React.Component {
  static async getInitialProps(appContext) {
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

    return {
      initialLanguage: lang || defaultLang,
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
