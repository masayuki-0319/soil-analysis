import { VFC } from 'react';
import { RecoilRoot } from 'recoil';
import { Container } from '@material-ui/core';

import { CheckData } from './components/pages/CheckData';
import { Header } from './components/templates/Header';

export const App: VFC = () => {
  return (
    <RecoilRoot>
      <Header />
      <Container maxWidth="lg" fixed>
        <CheckData />
      </Container>
    </RecoilRoot>
  );
};
