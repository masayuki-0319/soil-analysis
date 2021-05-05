import { VFC, ReactNode } from 'react';
import { Container } from '@material-ui/core';
import { ButtonAppBar } from '../organisms/Header';

type Props = {
  children: ReactNode;
};

export const MainContent: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <Container maxWidth="lg" fixed>
      <ButtonAppBar />
      {children}
    </Container>
  );
};
