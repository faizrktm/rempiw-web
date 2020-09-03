import Text from '.';

export default {
  title: 'Common/Text',
  component: Text,
};

export const Small = () => (
  <Text>This is Text</Text>
);

export const Medium = () => (
  <Text size="medium">This is Text</Text>
);

export const Large = () => (
  <Text size="large">This is Text</Text>
);
