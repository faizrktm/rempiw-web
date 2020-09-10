import Box from 'components/foundations/Box';
import Text from 'components/foundations/Text';
import Heading, { DocumentOutline } from 'components/foundations/Heading';
import { useLanguage } from 'utils/i18n';

export default function About() {
  const { t, changeLanguage } = useLanguage();

  const onChangeLanguage = (lang) => {
    changeLanguage(lang);
  };

  return (
    <DocumentOutline>
      <Heading>About</Heading>
      <Box gap="small" margin="medium">
        <DocumentOutline>
          <Heading>Button Language</Heading>
          <Box direction="row" gap="medium">
            <button type="button" onClick={() => onChangeLanguage('id')}>
              Change to Indo
            </button>
            <button type="button" onClick={() => onChangeLanguage('en')}>
              Change to English
            </button>
          </Box>
        </DocumentOutline>
        <DocumentOutline>
          <Heading>Example Box and Text 1</Heading>
          <Box background="brand" pad="medium">
            <Text color="white" size="xxlarge">{t('hello')}</Text>
            <Text color="white" size="xlarge">{t('hello')}</Text>
            <Text color="white" size="large">{t('hello')}</Text>
            <Text color="white" size="medium">{t('hello')}</Text>
            <Text color="white" size="small">{t('hello')}</Text>
            <Text color="white" size="xsmall">{t('hello')}</Text>
          </Box>
        </DocumentOutline>
      </Box>
    </DocumentOutline>
  );
}
