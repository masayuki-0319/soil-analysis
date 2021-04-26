import { VFC, ReactNode } from 'react';
import { Container } from '@material-ui/core';

type Props = {
  children: ReactNode;
};

export const MainContent: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <Container maxWidth="lg" fixed>
      {children}
    </Container>
  );
};