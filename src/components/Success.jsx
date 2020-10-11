import styled from 'styled-components';
import { Portal, Text } from 'candi-ui';
import { CheckCircle } from 'react-feather';
import Card from './Card';
import Button from './Button';

export default function ModalSuccess({ message, onClick }) {
  return (
    <Portal>
      <Container>
        <Wrapper>
          <Card pad="large" align="center" gap="large">
            <CheckCircle size={128} color="#52A563" />
            <Text>{message}</Text>
            <Button type="submit" onClick={onClick}>Tutup</Button>
          </Card>
        </Wrapper>
      </Container>
    </Portal>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  max-width: 480px;
`;
