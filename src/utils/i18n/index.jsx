import { useContext, memo } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import cookies from 'utils/cookies';
import translate from './translate';

export const defaultLang = 'en';

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
