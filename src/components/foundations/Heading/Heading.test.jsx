import { render } from 'test-utils';
import Heading, { DocumentOutline } from '.';

describe('foundations/Heading', () => {
  it('render <Heading /> correctly', () => {
    const { getByText } = render((
      <DocumentOutline>
        <Heading>example</Heading>
      </DocumentOutline>
    ));
    expect(getByText('example')).toBeInTheDocument();
  });
});
