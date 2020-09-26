import { Box, Text } from 'candi-ui';

export default function Field({ label, content, ...rest }) {
  return (
    <Box gap="xsmall" {...rest}>
      <Text size="xsmall" weight="300" color="black300">{label}</Text>
      <Text weight="500">
        {content}
      </Text>
    </Box>
  );
}
