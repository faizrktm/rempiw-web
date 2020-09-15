import { render } from 'test-utils';
import Paragraph from '.';

describe('foundations/Paragraph', () => {
  it('render <Paragraph /> correctly', () => {
    const { getByText } = render(<Paragraph>example</Paragraph>);
    expect(getByText('example')).toBeInTheDocument();
  });
});
