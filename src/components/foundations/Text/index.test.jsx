import { render } from 'test-utils';
import Text from '.';

describe('foundations/Text', () => {
  it('render <Text /> correctly', () => {
    const { getByText } = render(<Text>example</Text>);
    expect(getByText('example')).toBeInTheDocument();
  });
});
