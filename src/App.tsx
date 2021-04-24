import { VFC } from 'react';
import { MainContent } from './components/templates/MainContent';
import { CheckData } from './components/pages/CheckData';
import { RecoilRoot } from 'recoil';

interface Props {}

const App: VFC<Props> = () => {
  return (
    <RecoilRoot>
      <MainContent>
        <CheckData />
      </MainContent>
    </RecoilRoot>
  );
};

export default App;
