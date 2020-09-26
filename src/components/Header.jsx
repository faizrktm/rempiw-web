import styled from 'styled-components';
import { Box, Text } from 'candi-ui';

const Header = () => (
  <Container background="tertiary500">
    <Wrapper>
      <Text color="white" weight="bold" size="large">
        rempIW
      </Text>
    </Wrapper>
  </Container>
);

export default Header;

const Container = styled(Box)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 74px;
  max-width: 480px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 16px;
`;
