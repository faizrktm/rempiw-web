import styled from 'styled-components';
import PropTypes from 'prop-types';

import { paragraph } from 'utils/theme';

const ParagraphComponent = styled.p`
  ${paragraph}
  margin: 0;
`;

const Paragraph = (args) => <ParagraphComponent {...args} />;

Paragraph.defaultProps = {
  size: 'medium',
};

Paragraph.propTypes = {
  /** Size of the paragraph */
  size: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
};

export default Paragraph;
