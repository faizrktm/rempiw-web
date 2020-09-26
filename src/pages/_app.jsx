import { CandiProvider, GlobalStyles } from 'candi-ui';
import 'root.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <CandiProvider>
    <GlobalStyles />
    <Component {...pageProps} />
  </CandiProvider>
);

export default MyApp;
