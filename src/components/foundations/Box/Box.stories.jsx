import Box from '.';
import Text from '../Text';

export default {
  title: 'Core/Foundations/Box',
  component: Box,
};

export const Example = () => (
  <Box
    background="primary500"
    round="small"
    pad="medium"
  >
    <Text color="white">This is text inside a Box</Text>
  </Box>
);

const Template = (args) => (
  <Box
    {...args}
  >
    <Text color="white">This is text inside a Box</Text>
  </Box>
);

export const WithArgs = Template.bind({});
WithArgs.args = { background: 'primary500', round: 'small', pad: 'medium' };
