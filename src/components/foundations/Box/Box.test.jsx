import { render } from 'test-utils';
import Box from '.';

describe('foundations/Box', () => {
  it('render <Box /> correctly', () => {
    const { getByText } = render(<Box>example</Box>);
    expect(getByText('example')).toBeInTheDocument();
  });
});
