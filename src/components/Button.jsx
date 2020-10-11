import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ size }) => (size === 'small' ? '14px' : '100%')};
  font-family: inherit;
  border: 0;
  padding: ${({ size }) => (size === 'small' ? '0 8px' : '0 16px')};
  height: ${({ size }) => (size === 'small' ? '32px' : '46px')};
  background: ${({ color }) => color || '#2196F3'};
  border-radius: 8px;
  color: white;
  cursor: pointer;
  align-self: stretch;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
