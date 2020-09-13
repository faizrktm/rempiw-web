import { useContext } from 'react';

import { LanguageContext } from './Provider';

export default function useLanguage() {
  const { t, language, changeLanguage } = useContext(LanguageContext);
  return { t, language, changeLanguage };
}
