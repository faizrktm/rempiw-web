import { Box, Text } from 'candi-ui';

export default function CardHeader({ icon, title, subtitle }) {
  return (
    <Box direction="row" align="center" gap="large">
      <Box round="small" pad="medium" background="tertiary300" align="center" justify="center">
        {icon}
      </Box>
      <Box>
        <Text weight="700">{title}</Text>
        <Text weight="300" color="black300" size="small">{subtitle}</Text>
      </Box>
    </Box>
  );
}
