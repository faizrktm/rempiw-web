import styled from 'styled-components';
import Card from './Card';

const BorderedCard = (args) => <StyledBorderedCard pad={{ vertical: 'medium', horizontal: 'large' }} {...args} />;

const StyledBorderedCard = styled(Card)`
  border: 1px solid #ccc;
  box-shadow: none;
`;

export default BorderedCard;
