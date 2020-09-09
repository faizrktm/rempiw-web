import Box from '.';
import Text from '../Text';

export default {
  title: 'Core/Foundations/Box',
  component: Box,
};

export const Example = () => (
  <Box
    background="brand"
    round="small"
    pad="medium"
  >
    <Text color="white">This is text inside a Box</Text>
  </Box>
);
