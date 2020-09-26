import Head from 'next/head';
import styled from 'styled-components';

import Header from './Header';

const Page = ({ children, title = 'Rempiw' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Main>
      {children}
    </Main>
  </>
);

export default Page;

const Main = styled.main`
  position: relative;
  top: 74px;
  max-width: 480px;
  min-height: calc(100vh - 74px);
  margin: 0px auto;
  padding: 16px 10px 32px;
  background-color: transparent;
  width: 100%;

  @media only screen and (min-width: 768px){
    padding: 14px 16px 32px;
  }
`;
