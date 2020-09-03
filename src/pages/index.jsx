import Box from 'components/common/Box';
import Text from 'components/common/Text';

export default function Home() {
  return (
    <Box gap="large" margin="medium">
      <Box background="brand" pad="medium">
        <Text color="white" size="xxlarge">This is My Next Boilerplate</Text>
        <Text color="white" size="xlarge">This is My Next Boilerplate</Text>
        <Text color="white" size="large">This is My Next Boilerplate</Text>
        <Text color="white" size="medium">This is My Next Boilerplate</Text>
        <Text color="white" size="small">This is My Next Boilerplate</Text>
        <Text color="white" size="xsmall">This is My Next Boilerplate</Text>
      </Box>
      <Box round="large" background="chill-1" pad="medium" direction="column-reverse">
        <Text color="white" size="xxlarge">This is My Next Boilerplate</Text>
        <Text color="white" size="xlarge">This is My Next Boilerplate</Text>
        <Text color="white" size="large">This is My Next Boilerplate</Text>
        <Text color="white" size="medium">This is My Next Boilerplate</Text>
        <Text color="white" size="small">This is My Next Boilerplate</Text>
        <Text color="white" size="xsmall">This is My Next Boilerplate</Text>
      </Box>
    </Box>
  );
}
