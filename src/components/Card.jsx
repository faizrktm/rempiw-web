import { Box } from 'candi-ui';

export default function Card({ children, ...rest }) {
  return <Box pad="medium" round="medium" shadow={{ vertical: '2px', size: 'small' }} background="white" {...rest}>{children}</Box>;
}
