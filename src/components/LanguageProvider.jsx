import PropTypes from 'prop-types';
import { withTranslation, i18n } from '../../i18n';

export const LanguageContext = React.createContext();

const LanguageProvider = ({ t, children }) => (
  <LanguageContext.Provider value={{
    t,
    changeLanguage: i18n.changeLanguage,
  }}
  >
    {children}
  </LanguageContext.Provider>
);

LanguageProvider.propTypes = {
  t: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default withTranslation()(LanguageProvider);
