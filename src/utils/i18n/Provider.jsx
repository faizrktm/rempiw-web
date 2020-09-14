import { memo } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import PropTypes from 'prop-types';
import cookies from 'utils/cookies';

import translate from './translate';

const { publicRuntimeConfig } = getConfig();

export const LanguageContext = React.createContext();

export const LanguageProvider = memo(({ lang, children }) => {
  const router = useRouter();
  const changeLanguage = (selectedLang) => {
    if (selectedLang === lang) {
      return;
    }
    let finalLang = selectedLang;
    if (finalLang === publicRuntimeConfig.defaultLang) {
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
      t: (key, props) => translate(key, lang, props),
      changeLanguage,
    }}
    >
      {children}
    </LanguageContext.Provider>
  );
}, () => true);

LanguageProvider.defaultProps = {
  lang: 'en',
};

LanguageProvider.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};
