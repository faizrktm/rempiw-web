import { useContext } from 'react';
import { I18nContext } from 'next-i18next';

import { LanguageContext } from 'components/LanguageProvider';

export default function useLanguage() {
  const { i18n: { language } } = useContext(I18nContext);
  const { t, changeLanguage } = useContext(LanguageContext);
  return { t, language, changeLanguage };
}
