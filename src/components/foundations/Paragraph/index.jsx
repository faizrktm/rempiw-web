import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: ${({ theme, size }) => theme.paragraph[size].size};
  line-height: ${({ theme, size }) => theme.paragraph[size].height};
  margin: 0;
`;

Paragraph.defaultProps = {
  size: 'medium',
};

Paragraph.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
};

export default Paragraph;
