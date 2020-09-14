import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import base from 'styles.css';

const GlobalStyles = createGlobalStyle`
${normalize}
${base}
`;

export default GlobalStyles;
