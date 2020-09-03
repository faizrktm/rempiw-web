import { render } from '@testing-library/react';
import Text from '.';

describe('Text Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Text>Hi, my name is faiz</Text>);
    expect(getByText('Hi, my name is faiz')).toBeInTheDocument();
  });
});
