import { VFC } from 'react';
import { RecoilRoot } from 'recoil';
import { Container } from '@material-ui/core';

import { CheckData } from './components/pages/CheckData';
import { ButtonAppBar } from './components/templates/ButtonAppBar';

export const App: VFC = () => {
  return (
    <RecoilRoot>
      <Container maxWidth="lg" fixed>
        <ButtonAppBar />
        <CheckData />
      </Container>
    </RecoilRoot>
  );
};
