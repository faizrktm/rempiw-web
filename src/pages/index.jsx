import Box from 'components/common/Box';
import Text from 'components/common/Text';
import Heading, { DocumentOutline } from 'components/common/Heading';
import useLanguage from 'utils/hooks/useLanguage';

export default function Home() {
  const { t, language, changeLanguage } = useLanguage();

  const onChangeLanguage = (lang) => {
    if (lang === language) return;
    changeLanguage(lang);
  };

  return (
    <DocumentOutline>
      <Heading>Example</Heading>
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
        <DocumentOutline>
          <Heading>Example Box and Text 2</Heading>
          <Box round="large" background="chill-1" pad="medium" direction="column-reverse">
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
