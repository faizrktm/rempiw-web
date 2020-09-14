import Box from 'components/foundations/Box';
import Heading, { DocumentOutline } from 'components/foundations/Heading';
import Paragraph from 'components/foundations/Paragraph';
import { useLanguage } from 'utils/i18n';

export default function Home() {
  const { t, changeLanguage } = useLanguage();

  const onChangeLanguage = (lang) => {
    changeLanguage(lang);
  };

  return (
    <DocumentOutline>
      <Box gap="large" pad="medium">
        <Heading>Heading 1</Heading>
        <Box gap="medium">
          <DocumentOutline>
            <Heading>Heading 2</Heading>
            <Box direction="row" gap="medium">
              <button type="button" onClick={() => onChangeLanguage('id')}>
                {t('example.change_language', { lang: 'Indonesia' })}
              </button>
              <button type="button" onClick={() => onChangeLanguage('en')}>
                {t('example.change_language', { lang: 'English' })}
              </button>
            </Box>
          </DocumentOutline>
        </Box>
        <Box gap="medium">
          <DocumentOutline>
            <Heading>Heading 2</Heading>
            <Paragraph color="white">{t('example.hello')}</Paragraph>
          </DocumentOutline>
        </Box>
      </Box>
    </DocumentOutline>
  );
}
